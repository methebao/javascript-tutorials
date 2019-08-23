// Procedure - function not return any values
function greetStudent(student) {
    console.log(
        "Hello " + student.name
    )
}
greetStudent({ name: "TheBao" });

// Function - take input and return output

function timeRemaining(timePassed, endTime) {
    return endTime - timePassed;
}

var left = timeRemaining(32, 240);

left
