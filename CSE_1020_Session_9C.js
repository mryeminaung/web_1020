/* ********************************* */
/* CSE 1020 Session 9C */

// The even/odd reporter
function evenOddReporter() {
	for (let i = 0; i <= 20; i++) {
		if (i % 2 == 0) console.log(i + ' is even');
		else if (i % 2 == 1) console.log(i + ' is odd');
	}
}
// evenOddReporter();

// Multiplication Tables
function multiplicationTable() {
	for (let i = 1; i <= 10; i++) {
		let result = '';
		for (let j = 1; j <= 10; j++) {
			result += j + ' * ' + i + ' = ' + (i * j);
            if(j < 9) result += ', ';
            else result += ' ';
		}
		console.log(result + '\n');
	}
}
// multiplicationTable();

// The Grade Assigner
function assignGrade() {
	for (let i = 60; i <= 100; i++) {
		let score = i;
		if (score >= 90 && score <= 100) grade = 'A';
		else if (score >= 80 && score < 90) grade = 'B';
		else if (score >= 60 && score < 80) grade = 'C';
		else if (score >= 40 && score < 60) grade = 'D';
		else if (score < 40) grade = 'F';
		else grade = 'Invalid score!';
		console.log('For ' + score + ', you got a ' + grade + '.');
	}
}
// assignGrade();