import Task from './task.js' ;
import isValidDate from './index.js' ;
import prompt from 'prompt-sync';
const input = prompt() ; 
let lastIndex =0 ; 
let todo = [] ; 

const formatTask =(task)=>{
    return `ID : ${task.id}\n Title: ${task.title}\n Description: ${task.description}\n Due Date : ${task.dueDate}\n---------------------------------\n\n`;
}
const printMenu=()=>{

    console.log(`
    ***************************
    Welcome to JS TODO-APP
    ***************************
    Select an action:
    1) Add a new task
    2) List all tasks
    3) List completed tasks
    4) Mark the task as done
    5) Delete a task
    6) Sort tasks by the due date
    7) Sort tasks by ID
    8) Clear all tasks
    9)Exit
    ***************************
    `);
}
const addTask =()=>{
    let validDate=false ; 
    const title = input("Enter title : " ); 
    const description = input("Enter description :") ; 
 let dueDate;
    while(!validDate){
        dueDate = input("Enter a valid date, please!") ;
        if(isValidDate(dueDate)) {
            validDate = true ;
        } 
    }
    const newTask = new Task(++lastIndex,title,description,dueDate) ; 
    todo.push(newTask) ;     
}

const listTasks=()=>{
    console.log("######## LIST OF TASKS ###############") ; 
    let output = todo.map(formatTask) ;
    // console.log(output) ;
    output.forEach((element)=>{
        console.log(element) ;}
    );
}

const markAsDone = ()=>{
    let id = input("Enter done task id : ") ;
    const taskIndex = todo.findIndex((item)=> item.id == id) ;
    todo[taskIndex].setCompleted(); 
    console.log(`Task # ${id} marked as DONE`) ;
    // console.log(task) ;
}
const listCompletedTasks =()=>{
console.log("########## LIST OF COMPLETED TASKS ############") ;
    let ret = todo.filter((task)=>{
return task.completed ;
    }).map(formatTask);
    ret.forEach((element)=>console.log(element)) ; 
}

const deleteTask =()=>{
    const id = Number(input("Enter done task id : ") );
    todo = todo.filter(task=> task.id != id)  ;
//delete using splice 
    // const tId = todo.findIndex(task=> task.id = id ) ; 
    // todo.splice(tId,1) ;
}

const sortTasksById = ()=>{
    todo.sort ((t1,t2) => t1.id>=t2.id?1:-1) ;
}

const clearAllTasks = ()=>{
todo=[];
}

const sortTasksByDueDate =()=>{
    console.log("Sorting by due date");
    todo=todo.sort((a,b)=>(new Date(a.dueDate).getTime())-(new Date(b.dueDate)));

}
const main = () =>{
    while(true) {
        printMenu() ; 
       const choice = input("Enter your choice: ") ;
            switch (choice) {
                case '1':
                    addTask(); 
                break;
                case '2':
                    listTasks(); 
                break;
                case '3':
                    listCompletedTasks(); 
                break;
                case '4':
                    markAsDone();
                break;
                case '5':
                    deleteTask();
                break;
                case '6':
                    sortTasksByDueDate();
                break;
                case '7':
                    sortTasksById();
                break;
                case '8':
                    clearAllTasks();
                break;
                case '9':
                   return ;
                break;
                default:
                    console.log('Invalid Choice');
                 break;
            }
        } ; 


    }

    todo.push(new Task(20,"alaa","alaa" ,"2022-10-10")); 

main() ;