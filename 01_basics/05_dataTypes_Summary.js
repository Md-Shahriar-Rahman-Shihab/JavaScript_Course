//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100 //number
const scoreValue = 100.3 // number
const isLoggedIn = false //boolean
const outsideTemp = null //object
let userEmail; // undefined





const id = Symbol('123') //symbol [unique]
const anotherId = Symbol('123')

console.log(id === anotherId); //false

const bigNumber = 3456543576654356754n
console.log(typeof bigNumber); //bigint


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Iron man", "Super man", "Shihab"];
let myObj = {
    name: "Shahriar",
    age: 25,
}

const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof heros); //object
console.log(typeof myObj); //object
console.log(typeof myFunction); //function object



// https://262.ecma-international.org/5.1/#sec-11.4.3


//*****************************************Stack & Heap Memory ****************************************/

//Stack [Primitive] - call by value
let myYoutubeName = "Shihab";
let anotherName = myYoutubeName;
anotherName = "Shahriar"

console.log(myYoutubeName);
console.log(anotherName);
 
//Heap [Non Primitive] - call by reference

let userOne = {
    email: "user@google.com",
    bkash: "01711122233"
}

let userTwo = userOne;

userTwo.email = "shihab@google.com"

console.log(userOne);
console.log(userTwo);






/**
        Type            Passed By               real value change?

    number, string	    call by value	        No❌
    object, array	    call by reference	    No✅



    *****Primitives (number, string, boolean, null, undefined, symbol, bigint) ➝ passed by value

    *****Objects (arrays, functions, objects) ➝ passed by reference to the value (more precisely, the reference itself is passed by value — you can    mutate the object but not reassign the reference)
 */


