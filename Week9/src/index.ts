import Student from "./Student"
import Person from "./Person"
import FullTimeEmployee from "./FullTimeEmployee"

console.log('Welcome to TypeScript Programming')

// let a = "Hello"
let a:string = "'Hello"
// a = 100
let c:number = 10
// c = "hello"
let obj:String
let d:never 
let e:object
let f:void 
let g:unknown



let s1: Student = {
    sid: 1,
    first_name: "Pritesh",
    last_name: "Patel",
    city: "TORONTO"
}

console.log(typeof s1, s1)

//Union
let x:string | number
x = 100
x = "Hello"
// x = false

//Intersect
let y: Student & Person
y = {
    sid:1,
    pid:1,
    first_name: "FN",
    last_name: "LN",
    city: "CITY",
    address: "ADDRESS"
}

console.log(y)

let fe1 = new FullTimeEmployee(1, "MOX", "Shen", "CAL", "PROF", 1256.60)
fe1.display()