const myobject = {
  name: "John",
  age: 30,
  city: "New York"
}
const { name: n } = myobject;
console.log(n); // John ->> Destructuring object and renaming the key to n { }-> Destructuring 