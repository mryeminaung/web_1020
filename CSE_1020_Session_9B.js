/* ********************************* */
/* CSE 1020 Session 9B */

// What number's bigger?
function greaterNum(n1, n2) {
    return n1 > n2? n1: n2;
}
let n1 = 5;
let n2 = 10;
// console.log("The greater number of " + n1 + " and " + n2 + " is " + greaterNum(n1, n2) + ".")

// The World Translator
function helloWorld(languageCode) {
    switch (languageCode) {
        case "es":
            console.log("Hola Mundo");
            break;
        case "fr":
            console.log("Bonjour le monde");
            break;
        default:
            console.log("Hello, World");
    }
}
/* helloWorld("es");
helloWorld("fr");
helloWorld("en"); */

// The Grade Assigner
function assignGrade(score) {
	let grade;

	if (score >= 90 && score <= 100) grade = 'A';
	else if (score >= 80 && score < 90) grade = 'B';
	else if (score >= 60 && score < 80) grade = 'C';
	else if (score >= 40 && score < 60) grade = 'D';
	else if (score < 40) grade = 'F';
	else grade = 'Invalid score!';

	return grade;
}
/* console.log(assignGrade(90));
console.log(assignGrade(80));
console.log(assignGrade(70));
console.log(assignGrade(50));
console.log(assignGrade(30)); */

// The Pluralizer
function pluralize(noun, number) {
    if(number > 1) {
        if(noun == "sheep" || noun == "geese")
            console.log(number + " " + noun);
        else
            console.log(number + " " + noun + "s");
    } else if(number === 1)
        console.log(number + " " + noun);
}

/* pluralize("cat", 5);
pluralize("dog", 1);
pluralize("sheep", 2);
pluralize("geese", 4); */
