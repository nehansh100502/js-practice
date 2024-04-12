// scope 
// var c =300
let a = 300
if(true){
    let a = 10
    // const b = 20
    var c = 30
    // console.log(`Inner: ${a}`)
}
// console.log(a);
// console.log(b)
// console.log(c)

//nested Scope

function one(){
    const user = "nehasingh"
    function two(){
        const web = "youtube"
        console.log(user)
    }
    // console.log(web)
    two()
}
// one()

if (true){
    const user = "nehasingh"
    if (user === "nehasingh"){
        const web = "instagram"
        console.log(user+web)
    }
    // console.log(web)
    }
// console.log(web)

//++++++++++++++++++++     Interesting     ++++++++++++++++++++++++++++++++++++++++++++++++++
// step1
function addOne(num){
    return num+1
}
console.log(addOne(3))

//step2: hoisting
// addTwo(5)//wrong
const addTwo = function(num){
    return num+2
}
console.log(addTwo(5))