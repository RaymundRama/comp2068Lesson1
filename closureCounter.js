//use a closure wrapper so the var only gets created once
function closureFunction() {
    let counter = 0;

    //use a 2nd var and assign a child function
    let increment = () => {
        counter++;
        console.log(counter);

    }


    return increment();
}
//assign a var to the closure function but it doesnt execute reight away
let countMe = closureFunction();

//execute function twice
countMe();
countMe();