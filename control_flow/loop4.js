const myNum = [1,2,42,24,212,7,8,]

// let nums = myNum.filter((num)=> num>4)
// console.log(nums)

const nums =myNum.filter((num) =>{
    return num>4 //if we use scope { return } please use return keyword ...
})
// console.log(nums)

// const newnums = []
// myNum.forEach((num) => {
//     if(num>4){
//         newnums.push(num) 
//       }
// })
// console.log(newnums)


// let userbook = books.filter((bk)=> bk.edition === "2018")
// console.log(userbook)

// let userbook = books.filter((bk)=> { return bk.edition === "2018"}) //use return keyword here with objects...
// console.log(userbook)