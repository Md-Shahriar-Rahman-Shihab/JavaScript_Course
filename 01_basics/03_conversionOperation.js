//Type 1
console.log("Number Conversion - Type 1:");

let score = "33"

console.log(typeof score); //string
console.log(typeof (score)); // string [method format]

let valueInNumber = Number(score)
console.log(valueInNumber);
console.log(typeof valueInNumber);

//Type 2
console.log("Number Conversion - Type 2:");

let score1 = "33abc"
console.log(typeof score1) //string
let valueInNumber1 = Number(score1)
console.log(typeof valueInNumber1); //number
console.log(valueInNumber1); //NaN [Not a Number]

//Type 3
console.log("Number Conversion - Type 3:");

let score2 = null
console.log(typeof score2) //object
let valueInNumber2 = Number(score2)
console.log(typeof valueInNumber2); //number
console.log(valueInNumber2); //0

//Type 4
console.log("Number Conversion - Type 4:");

let score3 = undefined
console.log(typeof score3) //undefined
let valueInNumber3 = Number(score3)
console.log(typeof valueInNumber3); //number
console.log(valueInNumber3); //NaN

//Type 5
console.log("Number Conversion - Type 5:");

let score4 = true
console.log(typeof score4) //boolean
let valueInNumber4 = Number(score4)
console.log(typeof valueInNumber4); //number
console.log(valueInNumber4); //1  [ true=1 , false= 2 ]

//Type 6
console.log("Number Conversion - Type 6:");

let score5 = "Shihab"
console.log(typeof score5) //string
let valueInNumber5 = Number(score5)
console.log(typeof valueInNumber5); //number
console.log(valueInNumber5); //NaN

//Type 7
console.log("Bolean Conversion - Type 1:");

let isLoggedIn = 1
console.log(typeof isLoggedIn) //number
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(typeof booleanIsLoggedIn); //boolean
console.log(booleanIsLoggedIn); //true

//Type 8
console.log("Bolean Conversion - Type 2:");

let isLoggedIn1 = 0
console.log(typeof isLoggedIn1) //number
let booleanIsLoggedIn1 = Boolean(isLoggedIn1)
console.log(typeof booleanIsLoggedIn1); //boolean
console.log(booleanIsLoggedIn1); //true

//Type 8
console.log("Bolean Conversion - Type 3:");

let isLoggedIn2 = ""
console.log(typeof isLoggedIn2) //string
let booleanIsLoggedIn2 = Boolean(isLoggedIn2)
console.log(typeof booleanIsLoggedIn2); //boolean
console.log(booleanIsLoggedIn2); //false

//Type 9
console.log("Bolean Conversion - Type 4:");

let isLoggedIn3 = "Shihab"
console.log(typeof isLoggedIn3) //string
let booleanIsLoggedIn3 = Boolean(isLoggedIn3)
console.log(typeof booleanIsLoggedIn3); //boolean
console.log(booleanIsLoggedIn3); //true

//Type 10
console.log("Bolean Conversion - Type 5:");

let isLoggedIn4 = 4568
console.log(typeof isLoggedIn4) //number
let booleanIsLoggedIn4 = Boolean(isLoggedIn4)
console.log(typeof booleanIsLoggedIn4); //boolean
console.log(booleanIsLoggedIn4); //true

//Type 11
console.log("String Conversion - Type 1:");

let someNumber = 33
console.log(typeof someNumber) //number
let inString = String(someNumber)
console.log(typeof inString); //string
console.log(inString); //false

//Type 12
console.log("String Conversion - Type 2:");

let someNumber1 = null
console.log(typeof someNumber1) //object
let inString1 = String(someNumber1)
console.log(typeof inString1); //string
console.log(inString1); //null

//Type 12
console.log("String Conversion - Type 3:");

let someNumber2 = undefined
console.log(typeof someNumber2) //undefined
let inString2 = String(someNumber2)
console.log(typeof inString2); //string
console.log(inString2); //undefined


//*******************************************************Operations****************************************************** */

let value = 3;
let negValue = -3;
console.log(negValue); //-3

console.log(2 + 2);
console.log(2 - 2);
console.log(2 * 2);
console.log(8 ** 120);
console.log(2 / 3);
console.log(2 % 3);

let str1 = "Hello"
let str2 = " Shihab"
let str3 = str1 + str2 //concatanation
console.log(str3);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
console.log("1+2" + 2);

console.log(3 + 4 * 5 % 3); // use () Why so mystery code?

console.log(true);
console.log(+true);
console.log(-true);
// console.log(true+); //error
console.log(false);
console.log(+false);
console.log(-false);
// console.log(false+); //error
console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;
console.log(num1);
console.log(num2);
console.log(num3);

// increment (++) 
// [The increment (++) operator increments (adds one to) its operand and returns the value before or after the increment, depending on where the operator is placed.]

let gameCounter = 100;
gameCounter++; //postfix
console.log(gameCounter); //101

let gameCounter2 = 100;
++gameCounter2; //prefix
console.log(gameCounter2); //101

let x = 3;
const y = x++; //The value of y get x value then the value of  x is increment so x=4, y= 3

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3" 

let a = 3;
const b = ++a; //before, increment the value of a , then the value of  a is assinge to b so a =4 b =4

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"


// decrement (--)
//[The decrement (--) operator decrements (subtracts one from) its operand and returns the value before or after the decrement, depending on where the operator is placed.]

let x1 = 3;
const y1 = x--;

console.log(`x:${x1}, y:${y1}`);
// Expected output: "x1:2, y1:3"

let a1 = 3;
const b1 = --a;

console.log(`a:${a1}, b:${b1}`);
// Expected output: "a1:2, b1:2"





