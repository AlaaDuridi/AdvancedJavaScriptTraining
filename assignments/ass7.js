// const obj = {
//     name: "Ahmed",
//     age: 21,
//   };
//   function sayHello() {
//     console.log(this.name);
//   }
//   sayHello();
//   sayHello.call(obj);

const person = {
    fullName: function (city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    },
  };
  
  
  const person1 = {
    firstName: "John",
    lastName: "Doe",
  };
  
  
  console.log(person.fullName.apply(person1, ["Oslo", "Norway"]));
  
  
  