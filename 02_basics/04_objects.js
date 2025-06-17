//const tinderUser = new Object() //singleton object
const tinderUser = {}
// console.log(tinderUser);
tinderUser.id =22
tinderUser.name ="sandy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser ={
    email :"sandy@gmail.com",
    fullname:{
        userfullname:{
            firstname:"shivleela",
            lastname:"kaji"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);
const obj1 = {1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
//const obj3 = Object.assign({},obj1,obj2)
//console.log(obj3);
const obj3 ={...obj1,...obj2}
console.log(obj3);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(Object.hasOwnProperty('isLoggedIn'))

//Destructuring object
const course = {
    name:"js",
    price:"100",
    courseInstructor:"hitesh"
}
const {courseInstructor:instructor} = course
console.log(instructor);
