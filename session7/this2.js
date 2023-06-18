

function printSiblings(sibling) {
    console.log(this) ; 
    console.log(sibling+ " " + this.family) ; 
}

const person = {

    name :'Ahmad',
    family : 'Saed',
    siblings:['Hiba','Sarah','Jane'],
    showFamily: function () { 
        this.siblings.forEach(printSiblings,this)
        }
    }
    
    //person.showFamily() ; 
    //this refer to the object it is inside 

    
    //bind example
const person3 = {

    name :'Ahmad',
    family : 'Saed',
    siblings:['Hiba','Sarah','Jane'],
    showFamily: function () { 
        this.siblings.forEach(

            function (sibling) {
                console.log(this) ; 
    console.log(sibling+ " " + this.family) ; 
            }.bind(this)
        )
        }
    }
    person3.showFamily() ; 