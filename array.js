// Arrray

const myArr =[0,1 , 2 , 3 ,4 ,5]
//const myHeros =["Luffy","Zoro","Shnji"]

const myArr2 = new Array(1,3,5,7)

console.log(myArr[3]);

// Array methods
/*
myArr.push(6) //for add a new element in array
myArr.pop() //for remove a element in array
myArr.unshift(9) //for add a new element in starting 
myArr.shift()  //for remove a element in stating  
console.log(myArr.includes(9)); //it use for to question this element is avaliable or not
console.log(myArr.indexOf(3)); // it use for find index of array

const newArr = myArr.join() // it use to add all the  elemnts into a string  

console.log(myArr);
console.log(newArr);
*/

//Slice ,Splice

console.log("A", myArr);
console.log(myArr.indexOf(0));

const myNewArr = myArr.slice(1,3)

console.log(myNewArr)
console.log("B", myArr);

const myNewArr2 = myArr.splice(1,3)
console.log("c", myArr);
console.log(myNewArr2);
