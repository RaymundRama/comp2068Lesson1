function parent(){

    let message = 'hello from parent'

    function child(){
        console.log(message)




    }


    return child;

}

var childFunction = parent()
childFunction()