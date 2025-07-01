const accountId =144553
let accountEmail = "hitesh@google.com"
var accountPassword ="123456"
accountCity = "Jaipur"
let accountState ;

// accountId = 2 //it can't change 

accountEmail = "hc@gogle.com"
accountPassword= "2121212"
accountCity = "Bangalur"


console.log(accountId);

/*
prefer not to use var 
becauseof issue block scope and functional scope
*/
console.table([accountId, accountEmail, accountPassword ,accountCity,accountState])