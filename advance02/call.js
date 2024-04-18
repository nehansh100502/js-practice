function Setuser(username){
    this.username=username
    console.log("called")
}
function CreateUser(username,email,password){
    Setuser.call(this.username)

    this.email=email
    this.password=password
}
const chai= new CreateUser("neha","neha@gmail.com","3333")
console.log(chai)