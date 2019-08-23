// let globalVar;
function addFive(number) {
    const someVariable = "you can't see me outside this function";
    // globalVar = 'change';
    if (true) {
        console.log(someVariable);
        // -> It works, because someVariable is in higher scope
        const something = 5;
        console.log(something);
    }
    // console.log(something);
    // function addTen(number) {
    //     console.log(someVariable);
    //     return number + 10
    // }
    // addTen()
    return number + 5;
}

addFive(10);
// globalVar;
// addTen;
console.log(someVariable);
