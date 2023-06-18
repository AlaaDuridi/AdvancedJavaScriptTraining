class Task {
id;
title;
description ;
completed; 
dueDate;

constructor(id, title="", description="", dueDate="") {
this.id = id;
this.title = title ;
this.description = description;
this.dueDate = dueDate ; 
this.completed=false;
}

 setCompleted(){
    this.completed=true ;
}

}

export default Task ; 