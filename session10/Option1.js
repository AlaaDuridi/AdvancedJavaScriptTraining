/*Option 1: Binding the method explicitly:*/
const person = {
    name: 'John',
    age: 30,
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  };
  
  const { name, age } = person;
  const greet = person.greet.bind(person); // Explicitly bind the method to the person object
  
  console.log(name); // Output: 'John'
  console.log(age); // Output: 30
  greet(); // Output: 'Hello, my name is John and I'm 30 years old.'
  