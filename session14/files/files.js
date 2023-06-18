// import fs from 'fs' 
const fs =require('fs') ; 
// fs.readFile('data2.txt',"utf8", (err, data)=>{

fs.readFile('data.txt',"utf8", (err, data)=>{
    if(err){
        console.log("Something Went Wrong") ; 
        console.log(err.message) ; 
    }
    else {
        console.log(data); 
    }
}) ; 
console.log('hi') ; 

/*result without utf8 : 
hi
<Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 20 66 72 6f 6d 20 69 6e 73 69 64 65 20 74 68 65
20 66 69 6c 65 20>*/

/*result with utf8 :
hi
Hello World from inside the file
*/
