const fs = require('fs') ; 

const writeToJsonFile =() => { 

    const myData = {
        'name':'alaa',
        'age':20
    }


fs.writeFile("data2.json" , JSON.stringify(myData) ,"utf8" , (err)=>{
    if(err){
console.log("Something went wrong!") ; 
    }
    else{
        console.log("Data has been written.") ;
    }
})

}

writeToJsonFile() ; 

