const mynum = [1,2,3,4,5]

// const myTotal = mynum.reduce(function (acc,currval) {
//     console.log(`acc : ${acc} and currval is : ${currval}`);
//     return acc+currval
// },0)

// const myTotal = mynum.reduce((acc,curr) => acc+curr, 0)
// console.log(myTotal)

const shoppingCart = [
    {
        item:"java",
        price:332
    },
    {
        item:"css",
        price:999
    },
    {
        item:"js",
        price:222
    },
]
 let pricetopay = shoppingCart.reduce((acc,item)=> acc+item.price , 0)
 console.log(pricetopay);