const myArr = [1, 2, 3, 4, 5];
myArr.forEach((num) => {
    // console.log(num);
}); // ; is Important to end the statement

const myArr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; 
const filteredArr = myArr2.filter((num) => num > 4); // Implicit return statement in arrow function
// console.log(filteredArr);


const myarr3 = []
myArr2.forEach((num) => {
    if (num > 4) {
        myarr3.push(num);
    }
});
// console.log(myarr3);



const stats = [
    { name: 'Rohit Sharma', age: 35, runs: 15000, odi_highest_score: 264 },
    { name: 'Virat Kohli', age: 34, runs: 12000, odi_highest_score: 183 },
    { name: 'Rishabh Pant', age: 25, runs: 2000, odi_highest_score: 78 },
    { name: 'Hardik Pandya', age: 28, runs: 1500, odi_highest_score: 91 }
]

const filteredStats = stats.filter((player) => player.runs > 5000);
// console.log(filteredStats);

const filteredStats2 = stats.filter((player) => (player.name === 'Virat Kohli' || player.name === 'Rohit Sharma') && player.runs > 10000);
// console.log(filteredStats2); // [ { name: 'Rohit Sharma', age: 35, runs: 15000, odi_highest_score: 264 } ]