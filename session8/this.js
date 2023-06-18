function print() {
    console.log(this) ; 
}
person = {
    print() {
        console.log(this) ; 
    },
}
print() ; // output: the global function 
person.print() ;// output : the object


//The  definition below is definition for an object, make sure to differentiate between object and the constructor 
//case 1 
const person1 = {
    name:"Ahmad",
    
    greet :function () {
        console.log('hi, ' , this.name);
    }
} ; 
person1.greet() ; 
//case2 
const person2 = {
    name:"Ahmad",
    
    greet : ()=> {
        console.log('hi, ' , this.name);
    }
} ; 
person2.greet() ; 

//************what is the difference between case 1 and cas2 ?!***************

//###############CASE1###################

// The greet property is defined as 
// a regular function using the function keyword. 
// In this case, the this keyword inside the function refers to the object person. 
// So, when person.greet() is called, it will log 'hi, Ahmad' to the console.

//###############CASE2###################

// The greet property is defined as an arrow function. 
// Arrow functions do not bind their own this context but inherit it from the surrounding scope. 
// In this case, the surrounding scope is the global scope 
// (e.g., the window object in a browser or the global object in Node.js). 
// Therefore, this.name will not refer to the name property of the person object,
//  but instead, it will be undefined or reference a different name property in the global scope.

// To summarize, the key difference is that regular functions defined using the 
// function keyword have their this context dynamically bound based on how they are called,
//  whereas arrow functions inherit the this value from their surrounding scope and do not have their own this context. 
//  In most cases, when working with object methods, it is recommended to use 
//  regular functions to ensure proper handling of the this context.
