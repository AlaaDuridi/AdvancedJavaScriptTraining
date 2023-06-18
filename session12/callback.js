/*remember: javascript is a 
first class language: 
it permits the usage of functions 
as variables 
or 
functions in js are first class functions */
const fetchData=(callback)=>{
setTimeout( ()=>{
    const msg = "Hello, that took a lot of time!";
    //sth
callback(msg);
 
},3000);

};
const printWhenDone=(data)=>{
console.log(data) ; 
}; 
console.log("Program Start!")
fetchData(printWhenDone) ; 
console.log("Program End!")


//if the code was SYNCHRONOUS, we will use the following code  
// const res = fetchData(); //NO: because the code IS ASYNCHRONOUS 
// console.log(res) ; 

