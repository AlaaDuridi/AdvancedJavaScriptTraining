/*Key feature of enhanced object literals :
1. Property Shortened:When the property name and variable name are the same,
you can omit the property name and just specify the variable name.
The object will automatically create a property with the same name and assign it the value of the variable.
2.Method Shortened:When defining methods within an object, 
you can omit the function keyword and use a concise syntax. 
Instead of methodName: function() { ... }, you can simply write methodName() { ... }.
3.Computed Property Names: You can use square brackets [] to specify property names dynamically using an expression. 
This allows you to compute the property names at runtime.
4.Object Method Definitions: You can directly define methods within an object using a shorthand syntax. 
This makes the object declaration more concise and readable.*/

/*#####################EXAMPLE#########################*/
/*
const name = 'John';
const age = 30;

const person = {
  name, // Property shorthand
  age,  // Property shorthand
  greet() { // Method shorthand
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  },
  ['prop_' + 1 + 2]: 'Computed Property Name' // Computed property name
};

person.greet(); // Output: Hello, my name is John and I'm 30 years old.
console.log(person.prop_12); // Output: Computed Property Name

*/


/*###############EXAMPLE2################*/

const personName = 'Ahmad' ; 
const age = 30 ; 

// const person = {
//     personName:personName ,
//     age: age
// };

const person = {
    personName ,
   age
};
console.log(person);

