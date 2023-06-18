const people =[
{"name":"jhon", "age":25 , "gender":"male"},
{"name":"jane","age":80,"gender":"female"},
{"name":"Bob","age":20,"gender":"male"},
{"name":"Mary","age":75,"gender":"female"},
{"name":"Mark","age":48,"gender":"male"},
];

function isElder(p){
    return {
        "name":p.name ,
        "age":p.age,
        "elder":p.age>20?true:false
    };
}

const people2 = people.map(isElder) ; 
console.log(people2) ;

const people3 = people.map((parameter)=> {

    return parameter.name 
    + ' is ' + parameter.age + ' years old, and '
    +(parameter.gender=="male"?'he':'she') + ' is '
    +(parameter.age>20?'':'not') + ' elder' ; 

});

console.log(people3) ;


const oldPeople = people.filter((par)=> {
    return (par.age>=40)  ;
});

console.log(oldPeople);