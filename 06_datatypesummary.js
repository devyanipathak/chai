//Two types of datatypes: primitive and non-primitive.
//based on how data can be stored and accessed.

//Primitive
//7 types of primitive: String, Number, Boolean, null, undefined, Symbol, BigInt.

//Javascript is a dynamically typed language.
//Dynamically typed : the data type of variables is determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123');

// console.log(id === anotherId);

// const bigNumber = 3424252432468932474n//write n at the end of any number and that number will be considered as big int.

// console.log(typeof bigNumber);

// //Reference/Non-primitive

// //Array, Objects, Functions
// //array
// const heros = ["shaktiman", "nagraj", "doga"]
// //object
// let myObj = {
//     name: "Devu",
//     age: 32,
// }
// //function
// const myFunction = function(){
//     console.log("hello duniya")
// }
//https://262.ecma-international.org/5.1/#sec-11.4.3

/* ********************************* */
// Stack (Primitive), Heap (Non-Primitive)
//Stack me variable declare krne pr copy milta hai, 
//Heap me memory define krne pr reference milta hai.
//Stack copy milega
let myyoutubename = "Devyani Pathak"
let anothername = myyoutubename
anothername = "Devu"
console.log(myyoutubename);//Devyani Pathak
console.log(anothername);//Devu

//Non-Primitive (Heap) original reference milega
let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne;
userTwo.email = "devu@google.com"

console.log(userOne.email);
console.log(userTwo.email);