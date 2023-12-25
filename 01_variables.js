const accountId=144553
let accountEmail = "devu@gmail.com"
var accountPass = "1223314"
accountCity = "Jaipur"

//accountId = 2 // not allowed

accountEmail = "devyani@gmail.com"
accountPass = "212121"
accountCity = "Prayagraj"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope.
*/



console.table([accountId,accountEmail,accountPass, accountCity])