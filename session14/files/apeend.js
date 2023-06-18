const fs = require('fs') ;


 
fs.appendFile("data.txt" , "\nHello from the append.js file code" , "utf-8" ,(err)=>{
    if(err){
        console.log("something went wrong while appending to file") ; 
        console.log(err.message) ; 
    }
    else{
        console.log("file appended successfully") ; 
    }
})