const accountId = 144553
let accountEmail = "shihab@google.com"
var accountPassword = "12345"
accountCity = "Dhaka"

// accountId = 34563 // not allowed 
console.log(accountId);

let accountState;

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

accountEmail = "shahriar@gmail.com"
accountPassword = "567964"
accountCity = "Thakurgaon"
accountState = "Rangpur"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

{
    /* Prefer not to use var because of issue in block scope and functional scope */
}