// singletone 
// const myObject = new Object();

const myObject = {}
// console.log(myObject); // {} -> empty object
myObject.name = "John";
myObject.age = 30;
myObject.location = "New York";
myObject.email = "john@example.com";

// console.log(myObject); // { name: 'John', age: 30, location: 'New York', email: 'john@example.com' }

const ruserObject = {
    UserName : {
        Fullname: {
            firstname: "John",
            lastname: "Doe"
        }
    }
}
// console.log(ruserObject.UserName.Fullname); // { firstname: 'John', lastname: 'Doe' }
// console.log(ruserObject.UserName.Fullname.firstname); // John


// Object Merge
const obj1 = { 1 : "a", 2: "b" };
const obj2 = { 3 : "c", 4: "d" };

// const mergedObject = Object.assign({}, obj1, obj2);
// console.log(mergedObject); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const mergedObject2 = { ...obj1, ...obj2 }; // Spread operator
// console.log(mergedObject2); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }



console.log(myObject); // { name: 'John', age: 30, location: 'New York', email: 'john@example.com' }
console.log(Object.keys(myObject)); // [ 'name', 'age', 'location', 'email' ] ->> Array of keys
console.log(Object.values(myObject)); // [ 'John', 30, 'New York', 'john@example.com' ] ->> Array of values
console.log(Object.entries(myObject)); // [ [ 'name', 'John' ], [ 'age', 30 ], [ 'location', 'New York' ], [ 'email', 'john@example.com' ] ] ->> Array of array key-value pairs
console.log(Object.hasOwnProperty("name")); // true ->> Check if key exists in object