// console.log(x) ; 

let x =10 ; 
console.log(10) ; 

const y=100 ; 
console.log(y); 
// y=200 ; // will fire TypeError

function test() { 
    if(true) {
        let z = 20 ; 
        console.log("from if : " , z) ; 
    }
    // console.log("from function : " , z) ; // will fire referenceEroor 
}