/*example 1 : */ 

// const fun1 =() => {
//     console.log("Task 1 finished!") ; 
// }
// const fun2=()=>{
//     console.log("Task 2 finished!");
// }
// let longTaskFn = ()=>{
//     let start = Date.now() ; 
//     while(Date.now() - start < 5000) {
//         //Do nothing 
//         //wait
//     }
//     //after 5000 ms = 5 s 
//     console.log("Long Task finished!") ; 
// }
// const fun3=()=>{
//     console.log("Task 3 finished!");
// }
// fun1() ; 
// fun2() ;
// longTaskFn(); // blocking the code for 5s.
// fun3(); 

/* example  2 : fn3 depends on longTimeFn , but fn4 waits for no reason*/

const fun1 =() => {
    console.log("Task 1 finished!") ; 
}
const fun2=()=>{
    console.log("Task 2 finished!");
}
let longTaskFn = ()=>{
    let start = Date.now() ; 
    while(Date.now() - start < 5000) {
        //Do nothing 
        //wait
    }
    //after 5000 ms = 5 s 
    return"Long Task finished!" ; 
}
const fun3=(msg)=>{
    console.log(msg);
}
const fun4=()=>{
    console.log("Task 4 finished!");
}
fun1() ; 
fun2() ;
const res = longTaskFn(); // blocking the code for 5s.
fun3(res); 
fun4() ;

