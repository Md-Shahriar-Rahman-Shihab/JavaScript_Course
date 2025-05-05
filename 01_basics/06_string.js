const name = "Shihab"
const repoCount = 17

console.log(name + " "+ repoCount+" value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}.`); //Template String

const gameName = new String("Shihab") //Object envoc

console.log(gameName[0]); //S
console.log(gameName.__proto__); //{}

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2)); //i
console.log(gameName.indexOf('a')); //4


//substring(start,end) end not enclude, negative value is not allow 
const gameName2 = new String('Shihab-SR')
const newSubString = gameName2.substring(0,4)
console.log(newSubString); //shih

//slice(start,end) end not enclude, negative value is  allow 
const anotherSliceStirng2 = gameName2.slice(0,3)
const anotherSliceStirng = gameName2.slice(-8,4)
console.log(anotherSliceStirng2); //shih
console.log(anotherSliceStirng); //hih

//trim() remove white spaces
const gameName3 = '     Shahriar    '
console.log(gameName3);
console.log(gameName3.trim());

//replace
const url = 'https://shihab.com/shihab%20shahriar';
console.log(url.replace('%20','-'));

//includes
console.log(url.includes('shihab')); //true
console.log(url.includes('ShihaB')); //false
console.log(url.includes('sundor')); //

//split() returns array
const gameName4 = new String("Shahriar Rahman Shihab")
console.log(gameName4.split(' '));

//at()
const sentence = "The quick brown fox jumps over the lazy dog.";
let index = 5;
console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of 5 returns the character u"
index = -4;
console.log(`An index of ${index} returns the character ${sentence.at(index)}`);
// Expected output: "An index of -4 returns the character d"












