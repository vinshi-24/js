const user = {
    username :"shivleela",
    price:"999",
    welcomeMessage(){
        console.log(`${this.username} ,welcome to website `);//this refers to current context
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
console.log(this)

// function chai(){
//     let username ="Shivleela"
//     console.log(this.username);
    
// }
// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "shivleela"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2//explicit return should have return keyword and written within flower brackets
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 ) //implicit return no need to use return keyword 

const addTwo = (num1, num2) => ({username: "shivleela"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()