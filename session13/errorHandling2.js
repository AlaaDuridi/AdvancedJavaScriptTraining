// const fetchAsync = async (value)=> {
//     console.log("From fetchAsync") ; 
//     if(value === 0 ) { 
//         throw("Value should not be zero ") ; 
//     }
// }
// const  getData =async() => { 
//     let res ; 
// try {
// const res = await fetchAsync(0) ; 
// console.log("Operation Success : " , res) ; 
// }
// catch{
// console.log("Something Went Wrong ") ; 
// if(error instanceof ReferenceError){
//     console.log("You are calling a function that doesn't exist" )  ;
// }

// res= {neme : "Unknown ", age : 0} ; 
// }

// console.log("anaways the result is : " , res ) ; 
// }

// getData();
  
const getData = async()=>{
    let res;

    try{
        res = await fetchAsync() ; 
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