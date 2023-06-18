const updateData = (data) => {
    fetch(
    "https://jsonplaceholder.typicode.com/posts/10", // change posts to (eg: postsy) to examine error  handling 
    {
    method:'PUT',
    body : JSON.stringify(data) ,
    headers:
    {
        "Content-Type":"application/json; charset=utf-8"
    }
   }
    ).then(async (res)=>{
        if(res.ok) {
            console.log("posts UPDATED successfully.") ; 

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
    })
    .catch((err)=>{
        console.error("Fail UPDATING your post!") ;
        console.log(err) ;
    })
}
const myData ={
    userId : 1010 , 
    title :"My Edition",
    body : "Hello After Edition ! " 
};

updateData(myData) ;