const user = {}

if (user) {
    console.log(`got user email...`)
}
else{
    console.log(`do not have user email...`)
}

// falsy values 

// false , 0 , -0 ,BigInt 0n , "" , null , undefined , NaN

// truthy values 

// "0" ,"false" ," " , [] , {} , function(){}
const userEmail = "nehasingh@gmail.com"
if (userEmail.length === 0 ) {
    // console.log(`Array is empty`)
}
else {
    // console.log(userEmail)
}

// const emptyObj = {}

// if (Object.keys(emptyObj).length){
//     console.log("Object is Empty")
// }

// Nullish Coalesting Operator (??): null undefined 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10 
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 15

console.log(val1);

//Ternary Operators ..

// condition ? true : false

const num = 100;

num <= 60 ? console.log("less than 60") : console.log("more than 60");