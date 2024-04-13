// immedeitely invoked function expresssions (IIFE)

(function chai(){
    console.log(`DB connected`)
})();

//global pollution ko hatane ke liye iife ka use kiya jata h..

( function aurcode (){
    //named IIfe
    console.log(`DB connected sucessfuly`)

})();

( function aurcode (name){
    console.log(`DB connected sucessfuly ${name}`)

})("nehasingh")

