const name="neha";
const age = "23";

//console.log(name+age);

console.log(`my name is ${name} and age is ${age}.`);

const myNameIs = new String("neha-singh"); //here string as a object with length property and prototype
console.log(myNameIs);
console.log(myNameIs[0]);
console.log(myNameIs.length);
console.log(myNameIs.toUpperCase());
console.log(myNameIs.charAt(2));
console.log(myNameIs.indexOf("s"));

const newName=myNameIs.substring(0, 4);
console.log(newName);
const anotherName=myNameIs.slice(-7, 3);
console.log(anotherName);

// trim will ignore the last and fisrt unnecessary spaces ..
console.log(myNameIs.split("_"));

//  String.at() Method
const sentence = 'The quick brown fox jumps over the lazy dog.';

let index = 5;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"

index = -4;

console.log(`An index of ${index} returns the character ${sentence.at(index)}`);

// Function.bind()
/*The bind() method of Function instances creates a new function that, when called, calls 
this function with its this keyword set to the provided value, and a given sequence of 
arguments preceding any provided when the new function is called.*/