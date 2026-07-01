// Imdiatly Invoked Function Expression (IIFE) 

function chai() {
    console.log("Hello World")
}
// chai() // Returns Hello World

(function chai1() {
    console.log("I use IIFE")
})();  // (FISRT)-> FUNCTION DEFINATION (SECOND) -> FUNCTION INVOCATION (EXECUTION) -> Returns I am use IIFE

(() => {
    console.log("I use IIFE with arrow function")
})(); 