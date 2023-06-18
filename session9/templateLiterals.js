const firstName = "Ahmad" ; 
const lastName= "Saed" ; 
const age = 25; 
//Hello my name is Ahmad Saed, I am 25 years old

const str = "Hello my name is " 
+ firstName + " " 
+ lastName +" and I'm " 
+age + " years old." ; 
console.log(str) ; 

//using template literals 

const str2 = `My name is ${firstName} ${lastName} and I'm ${age >20? '':'not'} old` ; 
console.log(str2) ; 