//singleton
//Object.create 

//object literals
const mySym = Symbol("key1")
const JsUser = {
    name:"Shivleela",
    age:22,
    [mySym]:"mykey1",
    location:"Bidar",
    email:"shivleela@hotmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}
//console.log(JsUser.name);//not preferable to acces the object
// console.log(JsUser["name"]);
// console.log(JsUser[mySym]);
JsUser.email = "shivleelakaji@google.com"
//Object.freeze(JsUser)//Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
JsUser.email = "svk@gmail.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}
JsUser.greetingTwo = function(){
    console.log(`hello js user ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
