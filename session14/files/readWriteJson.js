const fs = require('fs') 
let jsonData ; 
const readFromJson=()=>{
    fs.readFile("data.json" , "utf8" , (err,data)=>{
        if(err) {
            console.log("Something went Wrong!") ; 
            console.log(err.message) ; 
        }
        else{
            // typeof data here is : string 
            jsonData = JSON.parse(data) ; 
            //type of jsonData here is : object 
            jsonData[0].name = "Omar" ; 
            // jsonData[0].age = 2 ; 
            console.log(jsonData) ; 

            writeToJson();
        }
    })
}
const writeToJson = ()=>{
    jsonData = [
        {
            "name" : "A",
            "age" : "30"
        }, 
        {
            "name" : "B",
            "age" : "31"
        },
        {
            "name" : "C",
            "age" : "32"
        }
    ]
    fs.writeFile("data.json" , JSON.stringify(jsonData) , "utf8" ,(err)=>{
        if(err) {
        console.log("Something went wrong !") ; 
        console.log(err.message) ; 
        }
        else{
            console.log(jsonData, "has been written.") ; 
        }
    })
}

readFromJson();
/*
طريقة ثانية عشان أهندل الارور اللي بطلع 
اني اعمل بروميس 

*/