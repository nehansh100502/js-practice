'use strict'; //treat all JS code as newer version

//alert(3+3); 

//there i two type of dataType one is primitive or another is refrence (non-primitive)

// 7 : primitive types : String , Boolean , Number , Null , Undefined , Symbol , BigInt

const score = 100 
const scoreValue = 100.3 

const isloggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")

// console.log(id === anotherId);

//const BigNumber = 48412748009237392n



//Reference (non-primitive)

//Array , Objects , Functions 

const heros =["shaktiman","naagraj","doga"];
let myObj = {
    name:"neha",
    age:22,
}

const myFunction = function(){
//    console.log("hello world !");
}
// console.log(typeof anotherId);

//*****************************************************************

// Stack Memory(Primitive) always find copy 

let name = "neha";
let myName = name;
myName = "hema";
console.log(myName);
console.log(name);


// Heap Memory(non-primitive)

let userOne = {
    email:"neha123@gmail.com",
    pass:"113312"
}

let userTwo = userOne;
userTwo.email ="12345@gmail.com";

console.log(userOne.email)
console.log(userTwo.email)



