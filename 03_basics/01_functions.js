function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
}
//sayMyName()

// function addTwoNums(num1,num2) {
//     console.log(num1+num2)
// }
// addTwoNums(1,2)
function addTwoNums(num1,num2) {
    let result = num1+num2;
    return result
}
const result = addTwoNums(1,2)
console.log("Result:",result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("shivleela"))
// console.log(loginUserMessage("shivleela"))

function calculateCartPrice(...num1)//rest or spread operator
{
    return num1
}
// console.log(calculateCartPrice(10,20,30));
const user = {
    username: "shivleela",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const newArray = [10,20,30,40]
function getSecondValue(getArray){
return getArray[1]
}
console.log(getSecondValue(newArray));

