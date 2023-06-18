//my app will fire an error 
const fetchAsync = async(value)=>{
    console.log("From fetchAsync");
    if(value===0){
        //my code throw error
    throw("Value Should not be zero");}
}
const getData = async()=>{
    let res;

    try{
        res = await fetchAsync(0) ; //the error thrown and arrivers here , then the try block passes it to the catch block to handle it 
        console.log("Operation Success!") ; 
    }catch(error){
        console.log("Something went wrong!");
        res ={name:"Unknown" , age:0} ;
    }
    finally{
        console.log("Anyways the result is , : " , res) ;
    }
}
getData() ;