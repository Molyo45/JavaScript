const array = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
array.push(array2);
// console.log(array); // [ 1, 2, 3, 4, 5, [ 6, 7, 8, 9, 10 ] ]


// const newArray = array.concat(array2);
// console.log(newArray); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ] -> Conacte return new array 

const anotherArray = [1, 2, 2, 3, 3, 3, 2, [1, 2, 3, 3], 45,[90, 18, 7, 33, 63, 9]];
// const real_array = anotherArray.flat(Infinity); // [ 1, 2, 2, 3, 3, 3, 2, 1, 2, 3, 3, 45, 90, 18, 7, 33, 63, 9 ] -> flat return new array
// console.log(real_array);
let a = 10
let b = 20 
let c = 89 
let d = 45
console.log(Array.of(a, b, c, d)); // [ 10, 20, 89, 45 ]