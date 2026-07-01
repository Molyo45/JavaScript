const user = {
    username: 'JohnDoe',
    price: 100,
    welcomeMessage: function () {
        console.log(`Welcome ${this.username}, your price is ${this.price}`);
        console.log(this) // Returns the user object
    }
}
// user.welcomeMessage() // Returns Welcome JohnDoe, your price is 100
// user.username = 'Malay Sharma'
// user.welcomeMessage() // Returns Welcome Malay Sharma, your price is 100

// console.log(this) // Returns the global object (window in browser, global in node.js) -> {} -> Empty object in strict mode



function chai1() {
    let a = 10
    console.log(this.a) // Returns undefined because a is not a property of the global object, it is a local variable inside the function chai.
}
// chai()



const chai = () => {
    let a = 10
    console.log(this.a) // Returns undefined because arrow functions do not have their own this, they inherit this from the parent scope. In this case, the parent scope is the global scope, where a is not defined as a property of the global object.
}
// chai()


 const addtwo = (num1, num2) => {
    return num1 + num2 // Explicitily returning the sum of num1 and num2
}
// console.log(addtwo(5, 10)) // Returns 15


const addthree = (num1, num2, num3) => num1 + num2 + num3 // IMplicitly returning the sum of num1, num2 and num3
// console.log(addthree(5, 10, 15)) // Returns 30  


const addfour = (num1, num2, num3, num4) => ({ username: "malay" })

console.log(addfour(5, 10, 15, 20)) // Returns { username: 'malay' } -> Here we are returning an object, so we need to wrap the object in parentheses to avoid syntax errors.

