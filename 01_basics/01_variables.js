const accountId=12345
let accountEmail = "shiv@google.com"
var accountPassword="54321"
accountCity="Bengaluru"
let accountState
// accountId = 23 //not allowed
accountEmail ="sk@google.com"
accountPassword = "7890"
accountCity = "Jaipur"
console.log(accountId);
/*
Prefer not to use var because of issue in block scope and function scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])