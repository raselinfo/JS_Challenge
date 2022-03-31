"use strict";
// Write a function that takes an object (a) and a string (b) as argument
// Return true if a has a property with key b
// Return false otherwise
function myFunction(a, b) {
    let result = a.hasOwnProperty(b);
    return result;
}
// Another Solution
function myFunction2(a, b) {
    let result = b in a;
    return true;
}
// Test Case
console.log(myFunction({ a: 1, b: 2, c: 3 }, "b"));
console.log(myFunction({ x: "a", y: "b", z: "c" }, "a"));
console.log(myFunction({ x: "a", y: "b", z: "c" }, "z"));
