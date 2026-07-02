// For _ loop
for(let index = 0; index < 5; index++) {
    console.log(index);
}

const myArray = ['apple', 'banana', 'cherry'];
for(let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// Continue and break inside for loop
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] === 3) {
        continue;
        console.log('Found 3, skipping...');
    }
    else if (numbers[i] === 4) {
        break;
        console.log('Found 4, breaking...');
    }
    console.log(numbers[i]);
}