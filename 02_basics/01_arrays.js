//array
//ways in which we can declare a array
const myArr = [0,1,2,3,4,5]

const myHeros =["shaktiman","Ironman"]

const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[1]);
//Array methods
// myArr.push(6)
//console.log(myArr);
// myArr.push(7) //inserts the elements in an array
// console.log(myArr);
//myArr.pop(); removes the last element of an array
//myArr.unshift(9) //adds element in the starting of an array
//myArr.shift() //removes the starting element of an array
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
const newArr = myArr.join()//adds all the elements of an array into a string
// console.log(myArr);
// console.log(newArr);
//slice and splice methods
console.log("A",myArr);

const myn1 = myArr.slice(1,3) //it does not manipulates the original array
console.log(myn1);

console.log("B",myArr);

const myn2 = myArr.splice(1,3)//it manipulates the original array
console.log(myn2);

console.log("C",myArr);


