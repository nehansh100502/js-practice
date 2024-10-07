// let inp = prompt (`what is your name ?`);
// let age = prompt(`what is your age ?`)

// inp = parseInt(inp);
// age = Number.parseInt(age);
 
// if (age>20){
//     console.log(`You can vote `);
// }
// else{
//    console.log(`you age is not complete..`);
// }

// let a = prompt (`what is your age ?`);
// a = Number.parseInt(a);
// let maxAge = 20
// if( a < maxAge ){
//     console.log(`age is smaller than max age`)
//     console.log(`you r eligible`);
//     console.log(`done maximum is ${maxAge} and your age is ${a}`)

// }
// else if (a=maxAge){
//      console.log(`congrates u r eligible !!!`)
// }
// else {
//     console.log(`u r not eligible sorry !`)
// }
// // console.log(`done maximum is ${maxAge} and your age is ${a}` )


// ***********************************************************************************************

// Number guess application 

// let no = 5;
// let a = prompt(`enter your guess number ..`);
// a = Number.parseInt(a);
// if (no === a){
//     console.log(`congrates !`)
//     console.log(`your guess is ${no} is correct`)
// }
// else{
//    console.log((no > 5) ? "yes" : "NO") // using ternary operator 
// }

// ****************************************************************************************************

// let sum = 0 ;
// let num = prompt(`enter the value of n ..`)
// num = Number.parseInt(num)
// for(let i= 0 ; i<num ; i++){
//     sum += i+1
// }
// console.log(`sum of first ${num} natural no is ${sum}`)


// ********************************************************************************************************
//  for in loop 

// let obj = {
//     neha:22,
//     swati : 17,
//     hema :2,
//     kavya : 5,
//     priyanka : 9
// }

// for (let [key,value] in obj){
//     console.log(`marks of all studets are ${obj[key,value]}`)
// }

// const hello = () => {
//     console.log(`hey how r u ?`)
//     return `hi`
// }
// let v = hello();
// console.log(v)

// function sqr(num){
//     return num * num
// }
// console.log(sqr(2))
// console.log(sqr(5))

// function checkNumber(){
//     if (num%2 === 0){
//         console.log(`number is even`)
//     }
//     else {
//         console.log(`number is odd`)
//     }

// }
// let num = prompt(`enter an number `)
// console.log(checkNumber(num))

// function capitalStr(){
//     let result = str.toUpperCase();
//     console.log(result)
//     return result 
   
// }

// let str = prompt(`enter any string name `)
// capitalStr()

// function capitalize(str){
//     return str[0].toUpperCase()+ str.slice(1);
// }
// console.log(capitalize(`neha` ))

// Array methods 
// ********************************************************************************

// let n = [1,2 ,3, 4,5 ,66, 5]
// console.log(n.toString())
// console.log(n)
// console.log(n.length) // this is not a method it is property 

// console.log(n.join(`$`))
// console.log(n.slice(1))
// console.log(n.shift())
// console.log(n.unshift())
// console.log(n.sort())
// console.log(n.compare())

// let n = `neha`
// let arr = Array.from(n)
// console.log(arr)

// console.log(Array.from(`swati`))

// let arr = [2,3,11,21,3,32]
// let a = prompt(`enter any no.`)
// a=Number.parseInt(a);
// arr.push(a)
// console.log(arr)

// let arr = [1,2,34,5,3,2]
// let newarr = arr.reduce((h1,h2)=>{
//     return h1+h2
// })
// console.log(arr)

// let arr = [2,3,45,2,3]
// let a;
// do{
//  a = prompt(`enter a number to add into array`)
//  a = Number.parseInt(a)
//  arr.push(a)
//  console.log(arr)
// }
// while(a != 0);
//     console.log(arr)

// let arr = [2, 3, 45, 2, 3];
// let a;
// do {
//   if (typeof prompt !== 'undefined') {
//     a = prompt(`Enter a number to add into array`); // Prompt user for input
//     a = Number.parseInt(a); // Convert input to integer
//     if (!isNaN(a)) { // Check if a is a number before pushing to array
//       arr.push(a); // Add the integer to the array
//       console.log(arr); // Print the array
//     } else {
//       console.log("Invalid input, please enter a number.");
//     }
//   } else {
//     console.log("Prompt is not available in this environment.");
//     break;
//   }
// } while (a !== 0); // Continue the loop until the user enters 0
// console.log(arr); // Print the final array after the loop ends

// let arr1 = [2,3,11,44,32,10]   
// let n = arr1.filter((x) => {
//      return x%10 == 0 
// })
// console.log(n)



// let arr = [2,3,4,1,3,2,2]
// let n = arr.reduce((x1 , x2) =>{
//     return x1*x2
// })
// console.log(n)

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
// console.log(sum); // Output: 15

// const numbers = [1, 2, 3, 4, 5];
// const max = numbers.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue));
// console.log(max); // Output: 5

// let num = [2,3,2,4,32,1,2]
// let max = num.reduce((acc,currval) => Math.max(acc,currval))
// console.log(max)

// const nestedArray = [[1, 2], [3,[2 , [2]], 4], [5, 6]];
// const flatArray = nestedArray.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
// console.log(flatArray); // Output: [1, 2, 3, 4, 5, 6]

// let arr = [3,2,[3,1],3,[11,1,2]]
// let flatArray = arr.reduce((acc,currval) => acc.concat(currval),[])
// console.log(flatArray)

// instance of value in an object 
// const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];
// const count = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});
// // document.write(fruits)
// console.log(count); // Output: { apple: 2, banana: 3, orange: 2 }

 