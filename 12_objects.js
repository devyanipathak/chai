// singleton : made through constructors.

//object literals 
//Object.create-----> constructor method ke through object bnta hai 

//Declaring symbol
const mySym = Symbol("key1")

//creation of object Through literals
const JsUser = {
    name: "Hitesh",//Here name, age, location, email, isLoggedIn,etc are also string
    "full name": "Devyani Pathak",
    //using symbol but datatype of mySym is still not symbol
    [mySym]: "mykey1",//To use mySym as a symbol syntax is to keep it in [].
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email)//not a correct method
// console.log(JsUser["email"])//enclose email in double quotes.
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])

//we can overrite values inside object just by =
// JsUser.email = "pathakdevyani19@gmail.com"
// console.log(JsUser)
// Object.freeze(JsUser);//To lock values. use freeze on object.
// JsUser.email = "dev@gmail.com"
// //console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
