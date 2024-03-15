 function sayMyName(){
    console.log("D")
    console.log("E")
    console.log("V")
    console.log("Y")
    console.log("A")
    console.log("N")
    console.log("I")
    
}
//sayMyName();
// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);//simply add two numbers. 
// }
function addTwoNumber(number1, number2){
        // let result = number1 + number2
        // return(result);
        return (number1 + number2)
    }
const result = addTwoNumber(3, 5)
//console.log(`result: ${result}`);

// function loginUserMessage(username){
//     return `${username} just logged in`
// }
//console.log(loginUserMessage("Devyani"))

//when we pass empty string it will be
//console.log(loginUserMessage(""));

//when we don't pass anything it will return undefined.
//console.log(loginUserMessage());
//To eliminate this condition we will use if else condition.
function loginUserMessage(username /*="sam" //this is default user to avoid undefined, it can be override. */){
    if(!username /*=== undefined*/){//two different methods for checking username.
        console.log("Please enter a username")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())
//...item is rest operator and spread according to situation here it is rest.
//function calculatCartPrice(...num1){}
function calculatCartPrice(val1, val2,...num1){
    //rest operator puts values in an array 
    return num1
}
//console.log(calculatCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}
function handleObject(anyObject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.prices}`);
}

// handleObject (user)
// handleObject({
//     username: "sam",
//     price: 399
// })

const myNewArray = [200, 400, 100, 600]
function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([200, 400, 500, 1000]));