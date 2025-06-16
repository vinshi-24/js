const marvel_heros =["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]
//marvel_heros.push(dc_heros)//pushes array as the data meaning pushed array will be placed in one index
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// const all_heros = marvel_heros.concat(dc_heros)//concatenates both the array array with all individual elements
// console.log(all_heros);

const all_new_heros = [...marvel_heros,...dc_heros]//spread operator returns the array with individual elements
//console.log(all_new_heros);
const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_arr = another_arr.flat(Infinity)//returns one array with all the elements
// console.log(real_another_arr);
console.log(Array.isArray("shivleela"));
console.log(Array.from("shivleela"));//Creates an array from an iterable object.
console.log(Array.from({name:"shivleela"}));//

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));//returns new array with set of elements

