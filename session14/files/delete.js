//delete 
const fs = require('fs') ;

fs.unlink("abc2.txt",(err) => {
    if(err){
        console.log("something went wrong while deleting the file") ; 
        console.log(err.message) ; 
    }
    else{
        console.log("file deleted successfully") ; 
    }
})
