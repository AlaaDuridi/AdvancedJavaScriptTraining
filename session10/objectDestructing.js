const info ={ 
   name :'ahmad',
    age : 25,
   score :93.5,
   addresss:'nablus',
   university:'alnNajah',
   courses: 3,
   isgraduated:false
} ; 
// const name = obj.name;
// const age = obj.age ; 
// const university = obj.university ;
/***************In Object destructing, Order is NOT Important */
/*
const{name:studentName, lastName , age, university, isgraduated , ...rest} = info ;

lastName here will be undefined 
*/

// name: studentName : is aliasing for the name property 
const{name:studentName, lastName ="Unknown", age, university, isgraduated , ...rest} = info ;

//لازم اكون عارف اسماء الاتربيوتس 
//بس بقدر اعمل aliasing : 

console.log(studentName,lastName, age,university) ; 
console.log(rest) ; 


/*###### Example ######*/

const person2 = {
  name2: 'John',
  age2: 30,
  address2: {
    city2: 'New York',
    country2: 'USA'
  }
};

// Extracting properties from an object
const { name2, age2, address2: { city2 } } = person2;
console.log(name2); // Output: 'John'
console.log(age2); // Output: 30
console.log(city2); // Output: 'New York'





