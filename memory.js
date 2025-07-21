// Stack
// it uses in primitive datatype
// always it gives you a copy not original 

//Heap 
//it uses in non-primitive datatypes
// it always gives you original for changes 

let myYoutubename = "AsDesigns"

let anothername = myYoutubename
anothername = "abhijittrend"

console.log(myYoutubename)
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email="Hitesh@google.com"

console.log(userOne.email)
console.log(userTwo.email);

