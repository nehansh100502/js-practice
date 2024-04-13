// map for adding number in array

const myNum = [2,424,24,5,4,23,4,5,3]

// const newnum =myNum.map((num)=> { return num + 10})
const newnum = myNum
                .map((num)=> num+20)
                .map((num)=> num*3)
                .filter((num)=> num >=30)
console.log(newnum)