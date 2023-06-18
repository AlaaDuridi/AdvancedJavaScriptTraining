// //ex1 : 
// const greet=(name, age = 18  )=> {
//     console.log(`Your name is ${name} and your age is ${age}`) ;
// }
// greet('Alaa') ; 

// //ex2 : 
// const greet=(name='no one', age = 'unknown'  )=> {
//     console.log(`Your name is ${name} and your age is ${age}`) ;
// }
// greet('Alaa') ; 

//ex3 :  add a third parameter, which does not have a default value 
const greet=( address ,name='no one', age = 'unknown' )=> {
    console.log(`Your name is ${name} and your age is ${age}`) ;
    console.log(address) ; 
}
greet('Hebron') ; 

//The name parameter has a default value of 'no one'. If no argument is provided when calling the function, name will be set to 'no one'.
//The age parameter also has a default value of 'unknown'. Similarly, if no argument is passed for age, it will default to 'unknown'.
//The second console.log statement prints the value of the address parameter, which was not given a default value.
//Finally, the function is invoked by calling greet('Hebron'). Only the name parameter is provided with the value 'Hebron', while age remains as the default 'unknown'. The address parameter is not provided, so it will be undefined in the function body.

//When the code is executed, the value will be : 
// Your name is Hebron and your age is unknown
// undefined


//So,The parameter have a default values should be at the end of parameters list