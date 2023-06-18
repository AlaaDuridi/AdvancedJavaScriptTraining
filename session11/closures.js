/*
Closures in JavaScript provide important 
benefits and functionality, 
such as encapsulation, 
data privacy, 
and preserving state. 
They are a fundamental part 
of the language and are 
widely used in various 
programming patterns and paradigms. 
*/

let fname= 'Ahmad' ; 
const greet = () => {
    const msg = 'Hello' ; 
    console.log(`${msg} , ${fname}`) ;
}
greet();
// console.log(`${msg} , ${fname}`) ;//ReferenceError

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const outerFn = ()=> {
    let outerVar = "NO MORE DREAM" ; 

    const innerFn =()=>{
        console.log(outerVar) ; 
    }
    return innerFn ; 
}

const closure = outerFn() ; 
closure() ; // NO MORE DREAM

///////////////////////////////////////////////////////////////////////////////////////////////////////////////


const greeting = (message)=> {
    const title = 'Mr/Mrs' ; 
    return (fname)=>{
        console.log(`${message} ${title} ${fname}`) ;
    }
};

let sayHi = greeting('Hi'); 
let sayHello= greeting('Hello') ; 

sayHi('Ahmad') ; 
sayHello("Ala'a") ;

//call in one line : 
//IIFE :  immediately invoked function expression
greeting("Hi")("Ahmad") ;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const createCounter=(initialValue)=>{
    let counter = initialValue ;
    return ()=>{
        counter++;
        console.log(counter) ;
    }
}
const counter1 = createCounter(0) ; 
counter1() ; 
counter1() ; 
counter1() ; 

const counter2 = createCounter(100) ; 
counter2() ;    
counter2() ;    
counter2() ;    
counter2() ;    
counter2() ;    



/* there is approaches to minimize the usage of closures:

1. Object-Orianted Programming (OOP):
Ex :
class Counter {
  constructor() {
    this.count = 0;
  }

  increment() {
    this.count++;
  }

  getCount() {
    return this.count;
  }
}

const counter = new Counter();
counter.increment();
console.log(counter.getCount()); // Output: 1



2.Module Pattern:
Ex :
const counterModule = (function() {
  let count = 0;

  function increment() {
    count++;
  }

  function getCount() {
    return count;
  }

  return {
    increment,
    getCount
  };
})();

counterModule.increment();
console.log(counterModule.getCount()); // Output: 1


3.Functional Programming:
Ex:
function increment(count) {
  return count + 1;
}

function getCount(count) {
  return count;
}

let counter = 0;
counter = increment(counter);
console.log(getCount(counter)); // Output: 1


These examples demonstrate alternative
 approaches that reduce the direct usage 
 of closures. 
 However, it's important to note that 
 closures or closure-like behavior
  may still be present in the 
  implementation details of these 
  approaches, such as with the 
  lexical scoping of functions 
  or hidden closure-like mechanisms 
  provided by JavaScript runtime 
  environments.

  */