// const name = "Devu"
// const repoCount = 50

// console.log(name + repoCount + " Value");//outdated syntax
// //string interpolation or template string uses backtick.
// console.log(`Hello my namme is ${name} and my repo count is ${repoCount}`);

// const gameName = new String('devyaniidh');

//Here gameName is not an array but an object.The statement above shows key value pairs.
// console.log(gameName[0]);
// //to access prototype.
// console.log(gameName.__proto__);

// //to access length
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('e'));

//to slice
// const newString = gameName.substring(0,4)
// console.log(newString);

// const anotherString = gameName.slice(-10,4)
// console.log(anotherString);

// const newStringOne = "   Devu Pathak  ";
// console.log(newStringOne);

// //trim() will trim unwanted space in newString
// console.log(newStringOne.trim());
// const url = "https://hitesh.com/hitesh%20choudhary"

// //to replace some text in a url we will use url.replace.
// console.log(url.replace('%20','-'));

// //to check if we have something included in the string.
// console.log(newStringOne.includes('Pathak'))

const gameName = new String('Devyani-Pathak-com')
//to convert this string into array and split them in parts based on dashes.
console.log(gameName.split('-'));