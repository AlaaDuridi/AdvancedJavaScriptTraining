function printSibling(element){
    // console.log(this) ;
    console.log(element + " " + this.family) ;
}

const obj = {

    name:"Ahmad" , 
    family :"Saed" ,
    siblings:['Hiba','Sarah','Jameel'] ,
    showFamily: function () {

        //instead of using the (thisArg) in foreach
        this.siblings.forEach(printSibling.bind(this));

        

    }
}
obj.showFamily();