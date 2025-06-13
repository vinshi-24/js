let score ="33abc"
//console.log(typeof score);

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);

//"33"=>33
//"33abc"=>NaN
//true=>1;false=>0

let isLoggedIn = "svk"
let isLoggedInBoolean = Boolean(isLoggedIn)
// console.log(isLoggedInBoolean);

//1=>true;0=>false
//""=>false
//"svk"=>true

let testNumber=33
let testNumberString = String(testNumber)
// console.log(testNumberString);
// console.log(typeof testNumberString);

//**********************operations**********

let value = 3
let negValue = - value
// console.log(negValue);

let str1 = "Hi"
let str2 = " Shivleela"
let str3 = str1+str2
// console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+1+2);
// console.log(1+2+"2");

// console.log(true);
let num1,num2,num3
num1=num2=num3=2+2 //do not prefer this kind of code it should be easily understandable

let gameCounter = 100
// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.
let x = 3;
const y = x++;
// console.table([x,y]);

let x2 = 3n;
const y2 = x2++;
// console.table([x,y]);

// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.
let x1 = 3;
const y1 = ++x1;
console.table([x1,y1]);

let x3 = 3n;
const y3 = ++x3;
console.table([x3,y3]);


