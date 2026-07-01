const myarr = [1, 2, 3, 4, 5];
// console.log(myarr[0]);
// myarr.push(6);
// console.log(myarr);
// myarr.pop();
// console.log(myarr);
// myarr.unshift(9);

// console.log(myarr);
// myarr.shift();
// console.log(myarr);

// console.log(myarr.length);
// console.log(myarr.includes(3));
// console.log(myarr.indexOf(-90));

// const newarr =myarr.join();
// console.log(newarr); // -> Type string newarr 

const myn1 = [1, 2, 3, 4, 5];
const sli = myn1.slice(1, 3);
console.log(sli);          // [ 2, 3 ]
console.log("A " + myn1); // A 1,2,3,4,5

const spli = myn1.splice(1, 3);
console.log(spli); // [ 2, 3, 4 ]
console.log("B " + myn1); // B 1,5
