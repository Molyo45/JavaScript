const email1 = "user@example.com" // Truthy value
if(email1) {
    console.log('Email is valid');
} else {
    console.log('Email is not valid');
}


const email = "" // Falsey value
if(email) {
    console.log('Email is valid');
} else {
    console.log('Email is not valid');
}

// falsy value 
// false, 0, -0, "", null, undefined, NaN , BigInt(0n)

// truth values 
// true, 1, -1, "string", [], {}, function() {}, BigInt(1n),"0", 'false'

const array = []// Truthy value
if(array) {
    console.log('Array is valid');
} else {
    console.log('Array is not valid');
}