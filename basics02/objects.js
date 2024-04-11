// singleton : constructor se bnega tabhi singleton //object.create

//object literals
const mySym = Symbol('key1')


const jsUser = {
    name:'nehasingh',
    key:'value',
    [mySym]:'mykey1',//correct syntax for symbol
    age:'23',
    email:'neha112@gmailcom',
    isloggedIn:'false'
}
console.log(jsUser.email)
console.log(jsUser['email'])
// console.log(jsUser.mySym)//not correct syntax for symbol
console.log(jsUser[mySym])//correct syntax

jsUser.email='nehasingh@gmail.com'
// Object.freeze(jsUser)
jsUser.email='hema@gmail.com'

console.log(jsUser)

//functions 
jsUser.greeting = function(){
      console.log('good morning')
}
console.log(jsUser.greeting())

//this is for saved objects reference 
jsUser.greetingTwo = function(){
console.log(`good afternoon, ${this.name}`)
}
console.log(jsUser.greetingTwo())
