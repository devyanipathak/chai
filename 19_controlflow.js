//if
const isUserLoggedIn = true
//if(isUserLoggedInd){}
// if( 2 === "2"){
//     console.log("yes");
// }else console.log("no")         //No

// if( 2 == "2"){
//     console.log("yes");
// }else console.log("no")          //yes.
//comparison operator:
// <, >, <=, >=, ==, !=, ===
// const score = 300
// if(score >  100){
//     const power = "fly"
//     console.log(`user power : ${power}`);
// }


//const balance = 1000

//if(balance > 500)console.log("test"),console.log("test2");
//this is not readible not a good practice.

const userLoggedIn = true
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;
if(userLoggedIn && debitCard && 2 == 2){
    console.log("Allow to buy course");
}
if(loggedInFromGoogle || loggedInFromEmail)console.log("user logged in");