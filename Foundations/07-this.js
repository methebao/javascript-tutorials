
// A functions's this references the execution context for that call
// determinded entirely by  * how the function was called

// It's about the call not the definition of function, where function
// declare


var course = {
    trainer: "The Bao",
    ask(question) {
        console.log(this.trainer, question);
    }
}

course.ask("What is implicit binding ? ");
// course object in front of .ask() method
// this is an implicit binding of course as the this keyword.
// allowed the function ask() to use course as it's this context.




// So we can change what this context use by change how we call it.

function ask(question) {
    console.log(this.trainer, question);
}

function otherClass() {
    var myContext = {
        trainer: "Viet Thanh"
    };
    ask.call(myContext, "Why?")
}

// => one function can be reused again with a lot of different contexts.
