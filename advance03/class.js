class User{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password

    }
    encryptPassword (){
        return `${this.password}abc`
    }
}
const  chai = new User("nehasingh","neha23@gmail.com","12345");
console.log(chai.encryptPassword())