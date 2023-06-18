//primitive datatypes
let firstName ='Alaa' ;
const lastName='Duridi';
const result ='Hello ' + firstName + ' ' + lastName ; 

console.log(result) ; 

const num1 = 3 ;
const num2= 50 ; 
console.log(num1+num2) ;

const major ='Computer Science';
if(major.includes('Computer'))
console.log('Welcome') ; 
 
//Object Types 

//some object are predefined in javascript 
//ex: 1- Object 

Object.keys
Object.values
Object.toString

const strObj = Object.toString(result);
console.log(strObj) ;

//2- Date  : used to deal with date and time 
const time = new Date (2023,4,6) ; 
console.log(time);
console.log(time.getFullYear());
console.log(time.toISOString()) ; 
console.log(time.toLocaleDateString()) ;


// if we did this --> 
const time2 = Date() ; 

// time2 will be a string not an object 

 
//3 Array

//4. Window 

//5. Document 

//6. Function 

//7. Error


// First class Objects : exp , to a var , arg  , return 
