//This  : used to  refer to the current execution context 

const person = {

    name :'Ahmad',
    greet : function() {
        console.log(this) ; 
        console.log(this.name) ; 
    }
    //this refer to the object where it's reside
}

function sayHello(){
    console.log(this) ;  // will print the global object in the node js
    console.log('Hello, my name is: ' + this.name) ; // undefined
// refer to the window object  (browser )or to the global function (node)

}

// person.greet() ; *********
// { name: 'Ahmad', greet: [Function: greet] }
// Ahmad
// sayHello() ; **************
//globalObjec 
//Hello, my name is: undefined

//
function Person(name) { 
    this.name = name ;
    console.log(this) ; 
}
Person('alaa') ;  // here i used it as a function , will show the global function 

const p1=new Person('Ahmad') ; 
const p2=new Person('Hiba') ; 


// apply and call , allows you to send (this) on your own 
//i am passing a specific value of thes to the function 
sayHello.call(p1) ;