// const tinderUser= new Object()//singleton objects 

const tinderUser={} //multipleton objects

tinderUser.id = '123nehasingh'
tinderUser.name = 'nehasingh'
tinderUser.idLoggedIn = false

// console.log(tinderUser)

const regularUser ={
    emial:'nehas@gmail.com',
    fullname:{
       user: {
        firstname:'neha',
        lastnmae:'singh'
       }

    }
}

// console.log(regularUser)
// console.log(regularUser.fullname.user.firstname)

const obj1 = {1:'a',2:'b',3:'c'}
const obj2 = {4:'d',5:'e',6:'f'}

// const obj3 = { obj1, obj2}
// const obj3 = Object.assign ({}, obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3)

const user = [{
    id:1,
    email:'nehasingh@gmail.com'
},
{
    id:2,
    email:'hemasingh@gmail.com'
}
]
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))

//objects destructuring
