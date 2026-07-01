function addNumbers(a, b) {
    return a + b;
}
// console.log(addNumbers()); // Returns NaN
// console.log(addNumbers(10, 5)); // Returns 15
// console.log(addNumbers("4", "A")); // Returns 4A

// function loginUsermessage(username) {
//     if (username) {
//         return `Welcome back, ${username}!`;
//     } else {
//         return "Please provide a username.";
//     }
// }
// console.log(loginUsermessage("John")); // Returns "Welcome back, John!"

function calculatePrice(val1,val2,...num1) {
    return num1;
}
// console.log(calculatePrice(10, 20, 40)); // Returns [40]

const user = {
    name: "John",
    price: 100,
}

// function handleobject(anyobject) {
//     console.log(`User name is ${anyobject.name} and price is ${anyobject.price}`);
// }

// handleobject(user); // Returns "User name is John and price is 100"
// handleobject({
//     name : "Jane",
//     price : 200,
// })


let myNewArray = [1, 2, 3, 4, 5];
function returnSeondElement(array) {
    return array[1];
}
console.log(returnSeondElement(myNewArray)); // Returns 2
console.log(returnSeondElement([10, 20, 30])); // Returns 20