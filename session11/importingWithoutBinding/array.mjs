if(!Array.prototype.contain){
    Array.prototype.contain = function(obj) {
        return this.indexOf(obj)!= -1;
    }
}

