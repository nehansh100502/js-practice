class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`Username: ${this.username}`)
    }
    static createId(){
        return `123`
    }
}
const neha = new user(`hema`)
// console.log(neha.createId());

class Teacher extends user{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const iPhone= new Teacher(`iphone`,`i@phone.com`)
console.log(iPhone.logMe());

//static : A static method (or static function) is a method defined as a member of an object but is accessible directly 
// from an API object's constructor, rather than from an object instance created via the constructor.