// For of loop 
let myArr = ['RohitSharma', 'ViratKohli', 'RishabhPant', 'HardikPandya'];
for (let player of myArr) { 
    // console.log(player);
}
for(let p in myArr) {
     // console.log(p); // Gives Indices of the array as a key 
}



// Map iteration
let myMap = new Map();
myMap.set('name', 'Rohit Sharma');
myMap.set('age', 35);
myMap.set('team', 'India');
// Use for...of loop to iterate over the Map and in loop through the key-value pairs but not give and Error
for (let [key, value] of myMap) {
     // console.log(`${key}: ${value}`);
}


// Object Iteration
const myObject = {
    name: 'Rohit Sharma',
    age: 35,
    team: 'India'
};
// Use for...in loop to iterate over the object and of loop through the key-value pairs but give and Error
for (let key in myObject) { 
    // console.log(`${key}: ${myObject[key]}`);
}



// For each loop
const myArray = ['apple', 'banana', 'cherry'];
myArray.forEach(function(item, index) { 
    // console.log(`${index}: ${item}`);
}); // Callback function No name function




// [{}, {}, {}] => Array of Objects
const users = [
    { username: 'RohitSharma', age: 35 },
    { username: 'ViratKohli', age: 34 },
    { username: 'RishabhPant', age: 25 }
]
users.forEach((user) => {
    // console.log(`Username: ${user.username}, Age: ${user.age}`);
})