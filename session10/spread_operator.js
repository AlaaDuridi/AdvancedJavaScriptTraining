/* spread operator : es6 feature , it can be used to spread elements of an ITERABLE into individual elements
like arraus, strings */ 


/*##################EXAMPLE #1 ######################*/
const cities = ['Jerusalem','Hebron','Ramallah', 'Nablus' ];
console.log(...cities)
const copy = [...cities] ;
//add two elements at the beginning of the 'cities' array, without using 'unshift' method twice.

//#############NOTE : THIS IS ARRAY DEEP COPY###############
const newCities = ['Tulkarm', 'Jenin', ...cities, 'Dura'] ;
console.log(...newCities) ; 

cities[0] = 'Gaza';

console.log(...newCities) ; 
console.log(...copy) ; 
/*##################EXAMPLE #2 ######################*/

 let chars = ['A',...'BC' ,'D'] ; 
 console.log(chars); //['A','B','C','D'];

/*##################EXAMPLE #3 ######################*/

const myArr = [...'AlaaDuridi'] ;
console.log(myArr) ; 

/*##################EXAMPLE #4 ######################*/
/*Use spread operator for the definition of parameters, 
when there is undefined number of arguments will be sended*/
const sum = (a,b,...args)=> {
    console.log(args) ;
    /*remember the signature of the reduce method
    reduce(callbackFn , initialValue) 
    callbackFn signature : 
    callbackFn(commulator, currentValue)*/
   return args.reduce((comm,curr)=> comm+curr ,  a+b) ;
}


console.log(sum(1,2,3,4,5,6,7)) ; 

/*##################EXAMPLE #5 ######################*/
 /*Join two Arrays */ 

let nums = [1,2] ; 
let morenums = [3,4] ;
let allnums = [...nums,...morenums] ;
// what if we removerd the three dots (...) 

let allnums2 = [nums,morenums] ; // array of two arrays , 2D array

console.log(allnums) ; 
console.log(allnums2) ; 

//end of example 5

/*
const obj = {name : 'ahmad', age:18} ; 
console.log(...obj) ; // TypeError : object is not iterable

*/


let myObj = { 
    name: "John", 
    age: 30, 
    city: "New York"
  };
  for(let property in myObj) {
    console.log(property + ': ' + myObj[property]);
  }
let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, ...obj1 };

console.log(obj2); // { c: 3, a: 1, b: 2 }



// /*
// const obj = {name : 'ahmad', age:18} ; 
// console.log({...obj}) ; 

// can we use spread operator with objects in this way ?
//  هاي الصيغة غلط نوعاً ما ، لكنها بتعطي جواب 

// */