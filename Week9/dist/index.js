"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FullTimeEmployee_1 = require("./FullTimeEmployee");
console.log('Welcome to TypeScript Programming');
// let a = "Hello"
var a = "'Hello";
// a = 100
var c = 10;
// c = "hello"
var obj;
var d;
var e;
var f;
var g;
var s1 = {
    sid: 1,
    first_name: "Pritesh",
    last_name: "Patel",
    city: "TORONTO"
};
console.log(typeof s1, s1);
//Union
var x;
x = 100;
x = "Hello";
// x = false
//Intersect
var y;
y = {
    sid: 1,
    pid: 1,
    first_name: "FN",
    last_name: "LN",
    city: "CITY",
    address: "ADDRESS"
};
console.log(y);
var fe1 = new FullTimeEmployee_1.default(1, "MOX", "Shen", "CAL", "PROF", 1256.60);
fe1.display();
