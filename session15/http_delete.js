const delData = () => {
    fetch(
    "https://jsonplaceholder.typicode.com/posts/50", 
    {
    method:'DELETE',
    headers:
    {
        "Content-Type":"application/json; charset=utf-8"
    }
   }
    ).then( (res)=>{
        if(res.ok) {
            console.log("posts DELETED successfully.") ; 
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
        console.error("Fail DELETING your post!") ;
        console.log(err) ;
    })
}
delData() ; 