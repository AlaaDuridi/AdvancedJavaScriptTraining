try {

    // open file 
    //read file
    //close file
}
catch(error){
    //log error
    //close file
}

/*Note : assume the following scenario 
the file is opened 
start reading 
an error is fired 
go to catch block 
?? now  what will happen if you don't close the file in the catch block??
another process will try open the file and read from it, but can't do that 
deadlock is occured 
or access denied
so the action of closing the file is mandatory whether the reading process succeeded or failed 
so, the best practice is to use the finally block to close the file 


*/


try {

    // open file 
    //read file
}
catch(error){
    //log error
}
finally{
    //close file
}
