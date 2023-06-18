const people =[
    {"name":"jhon", "age":5 , "gender":"male"},
    {"name":"jane","age":30,"gender":"female"},
    {"name":"Bob","age":20,"gender":"male"},
    {"name":"Mary","age":12,"gender":"female"},
    {"name":"Mark","age":28,"gender":"male"},
    ];

    const totalPeople = people.reduce((acc, curr)=>{
        if(curr.age>18)
        return acc+=curr.age ; 
        else 
        return acc ;
    },0) ;

    console.log(totalPeople) ; 

    const adults = people.reduce((acc,curr)=>{
        if(curr.age>18)
        {
            acc.push(curr) ;
        }
        return acc ;
    },[]) ; 

    console.log(adults) ; 