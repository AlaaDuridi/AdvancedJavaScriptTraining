const fs = require('fs') ;

//this code snippet is for reading from json file 
const read_file = ()=>{
fs.readFile('data.json','utf8',(err, data)=>{
if(err){
    console.log("Sth Went Wrong") ; 
    console.error(err.message) ;
}else{

    //convert json string to json object 
    const jsonData = JSON.parse(data); // convert string to json 
    jsonData[0].name = " Alaa" ; //edit data
    console.log(jsonData) ; //print data
}
});
}

// read_file() ;


//this code snippet is for writing on a file 

const write_to_file =()=>{

    const myData = "Hello From The Code!" ; 

    fs.writeFile("data2.txt" , myData , "utf8" ,(err)=>{
        if(err){
            console.log("something went wrong !") ; 
            console.error(err.message) ;
        }else {
        console.log("File Has Been Written ") ; 
        }
    }) ; 


}
write_to_file() ; 


