//object and new keyword 
function multipleBy5(num){

    return num*5
}
multipleBy5.power = 2
console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function CreateUser(username,score){
    this.username= username
    this.score = score
}
CreateUser.prototype.increment = function(){
    this.score++
}
CreateUser.prototype.printMe = function(){
    console.log(`score is ${this.score}`)
}
const chai = new CreateUser("chai",22)
const tea = new  CreateUser("tea",25)
chai.printMe()

//prototype

// let myname= "..nehasingh....."
// console.log(myname.length)

let myHero = ["spiderman","ironman","thor"]

let heroPower  = {
    thor:"hammer",
    spiderman:"sling",
    ironman:"still",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}
Object.prototype.neha = function(){
    console.log(`neha is present in all objects`)
}
Array.prototype.heyneha=function(){
    console.log(`hey neha hello `)
}
// heroPower.neha()
// myHero.neha()
myHero.heyneha()
// heroPower.heyneha()


//inheritance
const user={
    username:"chai"
}
const teacher = {
    makevideo:true
}
const teacherSupport={
    isavailable:false
}
const TAsupport={

    makeassignment:"js notes",
    fullTime:true,
    __proto__:teacherSupport
}
teacher.__proto__= user

//modern syntax

Object.setPrototypeOf(teacherSupport,teacher)

let anotheruser= "neha"
String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`)
    console.log(`true length is ${this.trim().length}`)
}
anotheruser.trueLength()

