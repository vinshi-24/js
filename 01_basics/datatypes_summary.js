//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "shivleela",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof isLoggedIn);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//stack memory(primitive types uses stack memory) gives the copy of the value
// heap memory(non-primitive types uses heap memory) gives the reference(original value) of the value 
let youtubeName = "shivleela"
let anotherName = youtubeName
anotherName = "shivleelaybl"
console.log(youtubeName);
console.log(anotherName);

let userOne = {
    email:"shivleela@gmail.com",
    upi:"shivleela@ybl"
}

let userTwo = userOne
userTwo.email = "user@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);

