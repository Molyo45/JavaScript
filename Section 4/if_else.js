// if (condition) {
//     // code here
// } else {
//     // alternative code here
// }



const user = true;
const loggedIn = false;
if(user && loggedIn) {
    console.log('You are logged in');
} else if(user && !loggedIn) {
    console.log('You are not logged in');
}else if(user || loggedIn) {
    console.log('You are either a user or logged in');
}else {
    console.log('You are not a user');
}



// Nullish coalescing operator (??) is used to provide a default value when the left-hand side is null or undefined.
const userName = null;
const defaultName = "Guest";
const nameToDisplay = userName ?? defaultName;
console.log(nameToDisplay); // Output: Guestn


// Ternary operator (condition ? exprIfTrue : exprIfFalse) is a shorthand for if-else statements.
const isLoggedIn = true;
const message = isLoggedIn ? "Welcome back!" : "Please log in.";
console.log(message); // Output: Welcome back!