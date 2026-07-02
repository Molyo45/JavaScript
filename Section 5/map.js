const myArr = [1, 2, 3, 4, 5];
const newArr = myArr.map((num) => num + 45);
// console.log(newArr); // [46, 47, 48, 49, 50]


// ++++++++++++ Chaining of map() method ++++++++++++++
const nums = [1, 2, 3, 4, 5];
const newNums = nums.map((num) => num * 10).map((num) => num + 45);
// console.log(newNums); // [55, 56, 57, 58, 59]


const newARR = nums
    .map((num) => num * 10)
    .map(num => num + 45)
    .filter(num => num > 50);  // True or False
// console.log(newARR); // [55, 56, 57, 58, 59]



