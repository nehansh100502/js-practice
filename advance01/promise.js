const promiseOne = new Promise(function(resolve,reject){
    //DO an async task
    //DB calls , cryptography , network 
    setTimeout(function(){
        console.log(`Async task is complete ..`)
        resolve()
    }, 1000)
})
promiseOne.then(function(){
    console.log(`promise consumed ..`)
})

new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log(`Asyncs task 2..`)
        resolve()
    }, 1000)
}).then(function(){
    console.log(`async task 2 resolved ..`)
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:"nehasingh",email:"nehasingh12345@gmail.com"})
    }, 1000)
})
promiseThree.then(function(user){
    console.log(user)
})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName:"nehasingh",email:"nehasingh12345@gmail.com"})
        }else{
            reject(`Error : Something went wrong..` )
        }
    }, 1000)
})
promiseFour
.then((user)=>{
    console.log(user);
    return user.userName
}).then((userName)=>{
    console.log(userName)
}).catch(function(error){
    console.log(error);
}).finally(() => console.log(`either reject or resolved `))

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if (!error){
            resolve({userName:"js",email:"nehasingh12345@gmail.com"})
        }else{
            reject(`Error: js went wrong`)
        }
    }, 1000)
});

async function consumePromiseFive(){
   try {
     const response = await promiseFive
     console.log(response);
   } catch (error) {
    console.log(error)
   }
}
consumePromiseFive()

async function getAllUsers(){
    try {
        const response = await fetch ("")
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(`E : `,error)
    }
}