//Check the difference between these two code snippets 

/*###########Code Snippet #1 ################*/
/*
const obj1 = {'name' :'apple'} ; 
const obj2 = {'name':'banana'} ;
let fruits = [obj1, obj2 ] ; 
//
let fruits_copy=Array.from(fruits) ; 
console.log(fruits);
console.log(fruits_copy) ; 
//2
let fruits_copy2=fruits.slice() ; 
console.log(fruits_copy2) ; 
//3
let fruits_copy3 = [...fruits] ; 
console.log(fruits_copy3) ;
fruits[0].name='melon' ;
console.log(fruits);
console.log(fruits_copy) ; 
console.log(fruits_copy2) ; 
console.log(fruits_copy3) ;
*/

/*###########Code Snippet #2 ################*/

let fruits = ['apple', 'banana' ] ; 
let fruits_copy=Array.from(fruits) ; 
console.log(fruits);
console.log(fruits_copy) ; 
//2
let fruits_copy2=fruits.slice() ; 
console.log(fruits_copy2) ; 
//3
let fruits_copy3 = [...fruits] ; 
console.log(fruits_copy3) ;
fruits[0] = 'melon' ;
console.log(fruits);
console.log(fruits_copy) ; 
console.log(fruits_copy2) ; 
console.log(fruits_copy3) ;


/*#################What shallow copy mean ?  copy the reference###############*/

/*##########this code snippet provides two methods for objects deep copies , 
and c a comparison btw shallow and deep copies for objects */ 

function Person (name)
{ 
    this.name = name ;
}
const pArr = [
    new Person('John'),
    new Person('Mary'),
    new Person('Peter')
];
console.log(pArr) ; 
const dCopy1 = structuredClone(pArr) ; 
const dCopy2 = JSON.parse(JSON.stringify(pArr)) ; 
const pArrCopy = Array.from(pArr) ; 
pArr[0].name = 'Mohammed' ; 
console.log( 'shallow Copy ' , pArrCopy[0].name) ; 
console.log('original after modification ' , pArr[0].name) ; 
console.log('deep copy 1 ' , dCopy1[0].name)  ; 
console.log('deep copy 2 ', dCopy2[0].name) ; 
pArrCopy[0].name = 'Alaa' ;
console.log( 'shallow Copy ' , pArrCopy[0].name) ; 
console.log('original after modification ' , pArr[0].name) ; 
console.log('deep copy 1 ' , dCopy1[0].name)  ; 
console.log('deep copy 2 ', dCopy2[0].name) ; 


