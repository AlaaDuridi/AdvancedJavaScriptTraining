//came with ES6 

//set is object , data structure , unique data 
// 1- like array, but values are unique 
//2- data types of its values can be different 

const mySet = new Set() ; 

const obj = {name : "Hiba"} ;

mySet.add(1);
mySet.add(2); 
mySet.add('Ahmad');
mySet.add({name: 'Hiba'}) ; 
mySet.add(obj) ;

mySet.add(1) ; // this will be ignored 
mySet.add('Ahmad') ; // this will be ignored 
mySet.add({name: 'Hiba'}) ; 
mySet.add(obj) ;



console.log(mySet) ; 
console.log("Set Size : " , mySet.size) ; 

console.log("Does it have Ali" , mySet.has('Ali'));
console.log("Does it have Ahamd " , mySet.has('Ahmad'));
console.log(`Does it have {name:"Hiba"}` , mySet.has({name:"Hiba"}));


mySet.forEach((value) => { 
    console.log(value) ;
}
); 

const mySetEntries = mySet.entries() ; 
console.log(mySetEntries) ; 

// set entries are composed from both the key and value , and the key is equal to the value 


//convert set to array 
//1- 
const myArray = Array.from(mySet) ; 
//2-  because set is iterable object 
const myArray2 = [...mySet] ;

console.log("The set Array: ", myArray) ; 
console.log("The set Array2: ", myArray2) ; 


mySet.clear() ; 
console.log(mySet) ; 

// Set is sorted according to addition 
const mySet2 = new Set("Hello World") ; 
console.log(mySet2) ; 
const arr =[1,2,5,5,5,1,7,3,3,3,3,33,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3] ; 

console.log(arr) ; 
const deDuplicatedArray = [... new Set(arr)] ; 
console.log(deDuplicatedArray) ; 

