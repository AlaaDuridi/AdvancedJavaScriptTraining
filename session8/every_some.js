const people =[
    {"name":"jhon", "age":5 , "gender":"male"},
    {"name":"jane","age":30,"gender":"female"},
    {"name":"Bob","age":20,"gender":"male"},
    {"name":"Mary","age":12,"gender":"female"},
    {"name":"Mark","age":28,"gender":"male"},
    ];

    function ageGreaterthan18(curr) {
        return curr.age>=18 ; 
    }
    const isEvevryOneAdult = people.every(ageGreaterthan18) ;

    console.log(isEvevryOneAdult) ;
    const isSomeOneAdult = people.some(ageGreaterthan18) ;
    console.log(isSomeOneAdult) ;
