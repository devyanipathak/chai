// let a = 10
// const b = 20
// var c = 30
let a = 300 // This global declaration is going to save us.
//var c = 300
//if var is declared two times anywhere then there will be no error shown and last value will be the final value of that variable.

if(true){
    let a = 10
    const b = 20
   // console.log("inner: ", a);//It will print block scope.
   // var c = 30 
} //scope

//console.log(a);//It will print global scope. And if declared in block it will not be available.
//console.log(b);//not available
//console.log(c);//available

function one(){
    const username = "hitesh"
    function two(){
        const website = "youtube"
    //    console.log(username);// it will work
    }
    //console.log(website); // cannot access website nested function outside it's scope.
    two()
}
one()

if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
       // console.log(username + website);
    }
    //console.log(website);//out of scope
}
//console.log(username);//out of scope


//++++++++++++++++++++++++++++interesting ++++++++++++++++++++

console.log(addone(5)) // no error
function addone(value){
    return value + 1
}


addTwo(5) //error because declared by holding in variable.
let addTwo = function(num){
    return num + 2
}
