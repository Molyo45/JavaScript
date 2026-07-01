// let a = 56
// const b = 100 
var c = 200 // All are global variables and can be accessed anywhere in the code
if(true){
    let a = 10
    const b = 20
    var c = 30
    // console.log(a) // Returns 10
    // console.log(b) // Returns 20
    // console.log(c) // Returns 30 
    // All three variables are block scoped and can be accessed only inside the block
}


// console.log(a) // Returns 56
// console.log(b) // Returns 100
// console.log(c) // Returns 200 -> 30 ( 200 is overwritten by 30 because var is function scoped and not block scoped)


// Nested block scope
function one() {
    const username = "John"
    function two() {
        const password = "1234"
        console.log(username) // Returns John
        console.log(password) // Returns 1234
    }   
    two()
    // console.log(password) // Returns ReferenceError: password is not defined
}
// one();

console.log(addone(5))
function addone(num){
    return num + 1
}
 

// console.log(addtwo(5)) // Here addtwo is called before it is defined, so it will throw an error.
const addtwo = function (num) { // THis type of function is called function expression and it is not hoisted, so it cannot be called before it is defined.
    return num + 2
}
console.log(addtwo(5)) // Returns 7 // Here addtwo is called after it is defined, so it will work fine.

