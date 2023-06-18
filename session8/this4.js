function printSibling(element){
    console.log(this) ;
    console.log(element + " " + this.family) ;
}

const obj = {

    name:"Ahmad" , 
    family :"Saed" ,
    siblings:['Hiba','Sarah','Jameel'] ,
    showFamily: function () {

        this.siblings.forEach(printSibling ,{family : 'Duridi'});

        

    }
}
obj.showFamily();