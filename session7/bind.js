
const person = {

    name :'Ahmad',
    greet : function() {
        console.log(`Hello, My name is: ${this.name}`) ; 
    }
    //this refer to the object it is inside 
}

const sayHelloToAlice = person.greet.bind(person) ; 
sayHelloToAlice();