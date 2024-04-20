const User = {
    
    _email:"neha@gmail.com",
    _password:"1222",

    get email(){
    return this._email.toUpperCase();
    },
    set email(value){
        this._email= value;
    },
}

const tea = Object.create(User);
console.log(tea.email);