// for loop 

// let Array=[2,3,4,5,2,6,7]
// for (let i = 0; i< Array.length;i++){
  
//     if(Array==5){
//         console.log("5 is best number")
//     }
//     console.log(`index value is ${i}`)
// }

// for (let i=0 ; i<=10; i++){
//     console.log(`Outer loop is equal to ${i}`);
//     for(let j=0 ; j<=10; j++){
//         // console.log(`Inner loop value ${j} and Inner loop ${i} `)
//         console.log(i + "*" + j + "=" + i*j  )
//     }
// }

//keywords 
//break and continue 

// for (let i=1 ; i<=20 ; i++){
//     if(i==5){
//         console.log("detected 5");
//         break
//     }
//     console.log(`value of i is ${i}`)
// }


for (let i=1 ; i<=20 ; i++){
    if(i==5){
        console.log("detected 5");
        continue//skip one value or conditions and print further values as it is ..
    }
    console.log(`value of i is ${i}`)
}