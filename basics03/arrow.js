// arrow functionss : this keyword refer current context 

const user = {
    username : "nehasingh",
    price : 333,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website..`)
        // console.log(this)
    }

}
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     console.log(this)
// }
// chai()

// function chai(){
//     let user = "nehasingh"//this is not working here beacuse this only work objects
//     console.log(this.user)
// }
// chai()


//arrow function
// const chai = () => {
//     let user = "nehasingh"
//     console.log(this)
// }
// chai()

// const addTwo = (num1,num2) =>{
//     return num1+num2
// }
// console.log(addTwo(2,3))

//implicite return 
// const addTwo = (num1,num2) => (num1+num2)
const addTwo = (num1,num2) => ({user:"nehasingh"})//always rap objects into paranthesis in arrow function
console.log(addTwo(2,3));