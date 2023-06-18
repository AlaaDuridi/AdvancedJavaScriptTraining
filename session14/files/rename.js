//rename abc file to xyz 
const fs = require('fs') ;

fs.rename("abc.dat", "xyz.dat" , (err) => {
    if(err){
        console.log("something went wrong while renaming the file") ; 
        console.log(err.message) ; 
    }
    else{
        console.log("file renamed successfully") ; 
    }
})
