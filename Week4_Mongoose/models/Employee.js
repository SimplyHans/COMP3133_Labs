const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [ true, "First Name is required"],
    minlength: [3, "First Name should be at least 3 characters"],
    maxlength: [100, "First Name should be at most 100 characters"],
    trim: true,
    lowercase: true
  },
  lastname: {
    type: String,
    required: [ true, "Last Name is required"],
    minlength: [3, "Last Name should be at least 3 characters"],
    maxlength: [100, "Last Name should be at most 100 characters"],
    trim: true,
    lowercase: true
  },
  email: {
    type: String,
    unique: true,
    required: [ true, "Email is required"],
    trim: true,
    lowercase: true
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: [ true, "Gender is required"],
  },
  city:{
    type: String,
    trim: true,
    lowercase: true
  },
  designation: {
    type: String,
    trim: true,
    lowercase: true
  },
  salary: {
    type: Number,
    min: [1000, "Salary should be at least 1000"],
    max: [100000, "Salary should be at most 100000"],
    validate: {
      validator: function(v) {
        return Number.isInteger(v);
      },
      message: "Salary should be an integer value"
    }
  },
  created: { 
    type: Date
  },
  updatedat: { 
    type: Date
  },
});

//Declare Virtual Fields


//Custom Schema Methods
//1. Instance Method Declaration


//2. Static method declararion


//Writing Query Helpers



EmployeeSchema.pre('save', () => {
  console.log("Before Save")
  let now = Date.now()
   
  this.updatedat = now
  // Set a value for createdAt only if it is null
  if (!this.created) {
    this.created = now
  }
});

EmployeeSchema.pre('findOneAndUpdate', () => {
  console.log("Before findOneAndUpdate")
  let now = Date.now()
  this.updatedat = now
  console.log(this.updatedat)
});


EmployeeSchema.post('init', (doc) => {
  console.log('%s has been initialized from the db', doc._id);
});

EmployeeSchema.post('validate', (doc) => {
  console.log('%s has been validated (but not saved yet)', doc._id);
});

EmployeeSchema.post('save', (doc) => {
  console.log('%s has been saved', doc._id);
});

EmployeeSchema.post('remove', (doc) => {
  console.log('%s has been removed', doc._id);
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
