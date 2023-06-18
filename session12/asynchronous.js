/*Asynchronous programming is particularly 
useful when dealing with tasks that involve waiting
for I/O operations (such as reading from a file or
making network requests) or performing time-consuming operations. 
By leveraging asynchronous programming, 
you can improve the responsiveness
and efficiency of your code.*/

/*JavaScript provides several mechanisms for asynchronous programming:

Callbacks: In the past, callbacks were commonly used to handle asynchronous tasks.
A callback function is passed as an argument to an asynchronous function and is invoked 
once the task is completed.

Promises: Promises provide a more structured and elegant way to handle asynchronous operations. 
A promise represents the eventual completion (or failure) of an asynchronous task and allows 
you to attach callbacks to handle the results.

Async/await: Introduced in ES2017, the async/await syntax provides 
a more synchronous-looking code structure for handling asynchronous operations. 
It allows you to write asynchronous code that looks similar to synchronous code, 
making it easier to read and understand.*/

console.log("first statement") ; 

setTimeout( ()=>{
    console.log("middle statement");
} ,5000) ;

console.log("last statement") ; 

/*Output: 
first statement 
last statement 
(after 5 s) 
last statement
*/

console.log("first statement") ; 

setTimeout( ()=>{
    console.log("middle statement");
} ,0) ;

console.log("last statement") ; 


/*
first 
last 
first
last 
middle
middle
*/
