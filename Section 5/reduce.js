// +++++++++++ Use Reduce Method to calculate sum +++++++++++
const numbers = [1, 2, 3, 4, 5];

// const totalSum = numbers.reduce(function (acc, currVal) {
//     console.log(`Accumulator: ${acc}, Current Value: ${currVal}`);
//     return acc + currVal;
// }, 0);
// console.log(totalSum); // 15

const tSum = numbers.reduce((acc, currVal) => acc + currVal, 0);
console.log(tSum); // 15