//In 2015 ES6 brought arrow function and many other features
//This tells about current context.
const user = {
    username : "hitesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);//current context here is
        //console.log(this);
    }
    //this -> current context(inside some scope..) 
}
// user.welcomeMessage()
// user.username = "sam"//context has changed to sam.
// user.welcomeMessage()
// console.log(this); // this is refering to empty object

// function chai(){
//     let username = "hitesh"
//     console.log(this);
// }
//chai()//undefined on this.username.

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
// }
// chai()

//Arrow function.
// const chai = () => {
//     let username = "hitesh"
//     console.log(this);
// }
// chai();//shows {}

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }
// console.log(addTwo(3, 4));


// const addTwo = (num1, num2) => (num1 + num2) //implicit return
// // if we use curly braces we need return statement.
// //if we have paranthesis we do not need return statement/ explicit return
// console.log(addTwo(3,4));


//to return object we need to wrap it into paranthesis
const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(3,4));
