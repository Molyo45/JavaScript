// Singlton

// literal object
const mysymbol = Symbol("key1");
const myObject = {
    name: "John",
    "Full Name": "John Doe",
    [mysymbol]:"Key2", // Important to use symbol as key to avoid conflict with other keys
    age: 30,
    location: "New York",
    email: "malay@google.com",
    IsLoggedIn: true,
    lastLogindays: ["Monday", "Tuesday", "Wednesday"],
}
// console.log(myObject.name); // John
// console.log(myObject["Full Name"]); // John Doe
// console.log(myObject["location"]); // New York
// console.log(myObject.age); // 30
// console.log(myObject[mysymbol]); // Key2

// Object.freeze(myObject); // freeze object
myObject.name = "Doe";
// console.log(myObject); // John -> freeze object not allow to change the value

myObject.gretting = function() {
    console.log("Hello");
}
myObject.griiting2 = function () {
    console.log(`Hello ${this.name}`);
}
console.log(myObject.gretting()); // Hello
console.log(myObject.griiting2()); // Hello Doe



