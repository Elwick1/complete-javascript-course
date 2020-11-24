'use strict';

let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log('I can drive');

// const interface = 'Audio';
// const private = 534;
// gives strict mode reserved word error as may implement 
// into future feature of JS


/////////////////////////////////////// 
// Functions

// function logger() {
//   console.log('My name is Michael');
// }
// // calling / running / invoking function
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);
// const num = Number('23');

// the above code is an example of function decleration

///////////////////////////////////////
// Function Declarations vs. Expressions

// Function declaration //
// function calcAge1(birthYear) {
//     return 2020 - birthYear;
//   }
//   const age1 = calcAge1(1992);
//   // Function expression //
//   const calcAge2 = function (birthYear) {
//     return 2020 - birthYear;
//   }
//   const age2 = calcAge2(1992);
//   console.log(age1, age2);
  
///////////////////////////////////////
// Arrow functions

const calcAge3 = birthYear => 2037 - birthYear;
const age3 = calcAge3(1992);
console.log(age3);
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2020 - birthYear;
  const retirement = 65 - age;
  // return retirement;
  return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1992, 'Michael')); console.log(yearsUntilRetirement(1980, 'Bob'));
