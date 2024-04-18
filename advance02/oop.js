const user = {
    userName : "nehasingh",
    loginCount : 8,
    signIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database ");
        // console.log(`username ${this.userName}`);
        // console.log(this)
    }
}

// console.log(user.userName);
//console.log(getUserDetails());
// console.log(this);

//constructor 
function User (userName,loginCount,isLoggedIn){
    this.userName=userName;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn;

    this.greeting = function(){
        console.log(`username ${this.userName}`);
    }

    return this
}

const userOne = new User ("neha",14,2)
console.log(userOne.constructor)


