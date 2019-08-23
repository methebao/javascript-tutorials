// Falsy
// Values if we try to convert them into a boolean will become false
""
0, -0
null
false
undefined

// Truthy
// Values if we try to convert them into a boolean will become true
"foo"
23
{ a: 2 }
[1, 2, 3]
true
function sayHello() {
    console.log("Hello")
}


// // Convert to boolean ways:
// console.log(Boolean(null))
// console.log(!!null)


// IF, WHILE statements
var order = false;
// implicit (ngầm ) way
if (order) {
    console.log("run")
    /// do some thing
}

// explicit (có thể thấy được ) way

if (!!order) {
    console.log("run")
    /// do some thing
}

while (newOrders.length) {
    processOrders(newOrders);
}


while (newOrders.length > 0) {
    processOrders(newOrders);
}
