const name = "Shivleela"
const repoCount = 12
// console.log(name+repoCount); outdated style to concatenate strings

console.log(`hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('shivleela-vk')
console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('l'));

const newString = gameName.substring(0,4)
console.log(newString);

const slicedString = gameName.slice(-9,5)
console.log(slicedString);

const anotherString = "  Vinaykumar  "
console.log(anotherString);

console.log(anotherString.trim());
const url = "https://shivleela%20kaji"
console.log(url.replace('%20','-'));
console.log(url.includes('n'));

//split function converts string into array
const text = "Hello, world!";
const result = text.split(", ");
console.log(result); // Output: ["Hello", "world!"]