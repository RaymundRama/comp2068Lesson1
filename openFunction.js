//create a parent or "wrapper" functi0on that contains a variable
function parent(){
    let message = "Hello from parent"

    function child(){
        console.log(message)
    }

    //execute child function
    child()
}


//execute the function
parent();