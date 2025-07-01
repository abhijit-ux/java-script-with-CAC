let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);


// string number can be change into number type ex- "33" = 33
// sting number with alphabate can change into differnt type but not number ex- "33abc" = NaN(Not an Number)
// true =1; false =0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// when we enter 1 it conver into true ex- 1 = true
// when we enter 0 it convert into false ex - 0 = false 
// when we enter "Empty" it convert into false ex - "" = false
// when we enter "something" init ,it converts into true ex- "abhi"= True

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log (typeof stringNumber)
