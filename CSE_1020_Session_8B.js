/* ********************************* */
/* CSE 1020 Session 8B */

// The Fortune Teller
let jobTtle = "Web Developer";
let geographicLocation = "Singapore";
let partner = "Emily";
let numKids = 4;
/* console.log('You will be ' + jobTtle + ' in ' + geographicLocation + ' and married to ' + partner + ' with ' + numKids + ' kids.'); */

// The Age Calculator
let birthYear = 2002;
let futureYear = 2030;
let futureAge = futureYear - birthYear;
/* console.log('You will be either ' + futureAge + ' or ' + (futureAge - 1) + ' in ' + futureYear); */

// The Lifetime Supply Calculator
let currentAge = 29;
let maxAge = 100;
let amountPerDay = 34;
let totalEat = (amountPerDay * 365) * (maxAge - currentAge);
/* console.log('You will need ' + totalEat + ' to last you until the ripe old age of ' + maxAge); */

// The Geometrizer
let radius = 5; 
let area = 3.14 * radius ** 2;
let circumference = 2 * 3.14 * radius;
/* console.log('The circumference is ' + circumference.toFixed(2));
console.log('The area is ' + area.toFixed(2)); */

// The Temperature Converter
let tempDegree = 69;
let fahrenheit = (tempDegree * (9 / 5) + 32).toFixed(2);
let celsius = ((fahrenheit - 32) * (5 / 9)).toFixed(2);
/* console.log(tempDegree.toFixed(2) + '°C' + ' is ' + fahrenheit + '°F');
console.log(fahrenheit + '°F' + ' is ' + celsius + '°C'); */