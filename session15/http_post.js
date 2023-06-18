const sendData = (data) => {
    fetch(
    "https://jsonplaceholder.typicode.com/posts", // change posts to (eg: postsy) to examine error  handling 
    {
    method:'POST',
    body : JSON.stringify(data) ,
    headers:
    {
        "Content-Type":"application/json; charset=utf-8"
    }
   }
    ).then(async (res)=>{
        if(res.ok) {
            console.log("posts added successfully.") ; 

            res.json().then((data)=> {
                console.log("Your Post:") ;
                console.log(data) ;
            })
        }
        //handle errors 
        else if(res.status===404) {
            console.log("Resource not found");
        }
        else if(res.status===400)
        {
            console.log("Bad data") ;
        }
        else if(res.status===500){
            console.log("INternal server error") ;
        }
        /*
        console.log(res.ok) ;  // will log http response 
        console.log(res.status) ;*/
    })
    .catch((err)=>{
        console.error("Fail adding your post!") ;
        console.log(err) ;
    })
}
const myData ={
    userId : 9 , 
    title :"My Fake Post, Sent to API",
    body : "Post body : Hello World! " 
};

sendData(myData) ;