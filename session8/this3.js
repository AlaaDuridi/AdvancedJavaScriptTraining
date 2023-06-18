const obj = {

    name:"Ahmad" , 
    family :"Saed" ,
    siblings:['Hiba','Sarah','Jameel'] ,
    showFamily: function () {

        this.siblings.forEach(

            function (element) {
                console.log(element+" " + this.family) ; 

            } , this 
        )

    }
}

obj.showFamily() ;