//
// STRINGS, NUMBERS, BOOLEANS
//

// Exercises to become familiar with data types.
//

// 01. Declare a variable and assign a string as a value. Make sure the string is at least 6 characters long. Print the variable to the console.

var varOne = "apples.";
console.log(varOne);
//

// 02. Access the 2nd and 6th elements of the string. Print the elements to the console. Make sure you have selected the right index numbers

console.log(varOne[1]);
// p

console.log(varOne[5]);
// s

// 03. Declare a variable called name and assign a string as a value.

var name = "Regina George, (because she's so fetch!)";

// 04. Declare a variable called age and assign a number as a value.

var age = 32;

// 05. Declare a variable called year and assign a number as a value.

var year = 2020;

// 06. Print the following: "name is age in year", using your declared variables.

console.log(name + " is " + age + " in " + year + ".");
// Regina George, because she's so fetch! is 18 in 2000.

// 07. Declare a variable called isMarried and assign a boolean value.

var isMarried = true;

// 08. Print the following "name is married: true/false", using your declared variables.

console.log(name + " is married: " + isMarried + ".");

// 09. Declare a variable called programmingLanguage and assign the string "JavaScript". Declare a variable called isFun and give it a value of true. Print "JavaScript is fun: true" to the console, using your declared variables.

var programmingLanguage = "JavaScript";
var isFun = true;

console.log(programmingLanguage + " is fun:" + isFun + "!!!");

// 10 .Print the J and S of JavaScript from the variable programmingLanguage to the console.

console.log([programmingLanguage[0]] + " " + [programmingLanguage[4]]);

// 11. Print the length of the string "JavaScript" to the console.

console.log(
  "The length of the stringJavaScript is " + [programmingLanguage.length]
);
// 10
