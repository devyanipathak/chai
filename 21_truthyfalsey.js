const userEmail = ""
// "patah@gmail.com
// if(userEmail){
//     console.log("got user email");
// }else console.log("Don't have user email")
// if userEmail is an empty strin then it will execute else block else if block.


//falsy values
// false, 0, -0, BigInt (0n), "", null, undefined, NaN

//true values
//"0", 'false', " ", [](empty array), {} (empty object), function(){} (empty function)

//to check if an array is empty.
// if(userEmail.length === 0){
//     console.log("Array is empty");
// }

 //to check if object is empty.
//  const emptyobj = {}
//  if(Object.keys(emptyobj).length === 0){
//     console.log("object is empty");
//  }

//Some true statements.
// (false == 0), (false == ''), (0 == '')
 
//Nullish Coalescing Operator (??): null undefined
let val1;
//val1 = 5 ?? 10  //5
//val1 = null ?? 10  //10
//val1 = 10 ?? null //10
//val1 = undefined ?? 15  //15
// val1 = null ?? 10 ?? 20 // 10
// console.log(val1);

//Ternary operator
//condition ? true: false;
const iceTea = 100
iceTea <= 80?console.log("less than 80"): console.log("more than 80")