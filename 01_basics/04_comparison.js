console.log(2>1); //true
console.log(2>=1);//true
console.log(2<1); //false
console.log(2<=1); //false
console.log(2==1); //false
console.log(2!=1); //true


console.log("2">1); //true 
console.log("02">1); // true
console.log(2>"1"); //true
// js convert string to number then its perform comparison but every time its not sure or predict the correct result. so we remember that we perform comparison same data type. 

console.log(null>0); //false
console.log(null==0); // false 
console.log(null>=0); //true

/*
The different outputs of null == 0 and null >= 0 in JavaScript come down to how JavaScript handles type coercion and comparison operators.

1. null == 0 ➝ false
This uses the abstract equality operator (==), which performs type coercion, but only in specific ways:

When comparing null with a number (like 0), JavaScript does not convert null to a number.

Instead, null is only loosely equal to undefined, and not equal to any number.

So:
null == 0       // false
null == undefined  // true

2. null >= 0 ➝ true
This uses a relational comparison operator (>=), which follows different coercion rules:

When doing relational comparisons like >=, JavaScript converts null to a number.

Number(null) is 0, so:

null >= 0
=> 0 >= 0
=> true

*/


console.log(undefined==0);//false
console.log(undefined>0);//false
console.log(undefined<0);//false

// ===
console.log("2"==2); //true
console.log("2"===2)//false 
// === check datatypes also


/*
************************Abstract Equality (==) — Loose Equality*******************************

null == undefined	true	Special case in spec
null == 0	        false	No coercion from null to number
undefined == 0	    false	Same reason
"5" == 5	        true	String "5" is coerced to number 5
false == 0	        true	false coerces to 0
true == 1	        true	true coerces to 1
"" == 0	            true	"" coerces to 0
[] == 0	            true	[] → "" → 0
[1] == 1	        true	[1] → "1" → 1
{} == {}	        false	Different object references

************************Relational Operators (<, <=, >, >=)**************************************

All operands are converted to primitives (usually numbers), unless one is a string (then it does lexicographic comparison).

null is converted to 0

undefined becomes NaN

null >= 0	            true	null → 0, so 0 >= 0
null > 0	            false	0 > 0
undefined > 0	        false	NaN > 0 is always false
"2" > 1	                true	"2" → 2, so 2 > 1
"apple" > "banana"	    false	Lexicographic comparison


************************Strict Equality (===) — No Type Coercion**************************************

5 === "5"	            false	Different types (number vs string)
null === null	        true	Same type and value
undefined === null	    false	Different types

*/




