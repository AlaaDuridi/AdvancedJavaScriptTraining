//run time errors  

//catch reference error 
try { 
    const res = summation(); 
    console.log("The result is : ")
    console.log(res) ; 
}
catch(error){
    console.log("Something Went Wrong") ;
    // console.log(error ) ;
}finally{
    console.log('Finally Block '); 
}
