const accountId = 144553
let accountEmail = "Aditya@gmial.com"
var accountpassword = "12345"
accountcity = "Delhi"
let accountstate;

//accountId = 2 // not allowed

accountEmail = "hc@gmail.com"
accountpassword = "56778"
accountcity = "jaipur"

console.log(accountId);


/*
prefer not to use var 
beacuase in issue in block scope and functional scope
*/

console.table([accountId , accountEmail , accountpassword , accountcity])
console.log(accountstate)
