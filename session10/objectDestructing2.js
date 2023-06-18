
let person = {
    name: 'John',
    age: 30,
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  };
  
  // Destructuring the object and accessing the function
 person.greet() ; // Output: 'Hello, my name is John and I'm 30 years old.'
  const { name, age, greet } = person;
  console.log(name); // Output: 'John'
  console.log(age); // Output: 30
  greet(); // Output: 'Hello, my name is undefined and I'm undefined years old.'

  /*
The reason for this behavior is that when you destructure an object and extract a method like greet, 
it loses its original this context. In this case, when you call greet(), 
this.name and this.age are undefined because the this context is not bound to the person object anymore.
To ensure that the greet method maintains the correct this context, you can 
bind it explicitly .
*/
  
/*Option 1: Binding the method explicitly:
*/
