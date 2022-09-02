/* ********************************* */
/* Extra Exercise */

function signOfProductNumbers(n1, n2, n3) {
	if (n1 * n2 * n3 < 0) alert('This sign is -.');
	else if (n1 * n2 * n3 > 0) alert('This sign is +.');
}
/* signOfProductNumbers(3, -7, 2);
signOfProductNumbers(-3, -7, 2);
signOfProductNumbers(-3, -7, -2); */

function largestNumber(a, b, c, d, e) {
	let arr = [a, b, c, d, e];
	let max = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > max) max = arr[i];
	}
	return max;
}
// alert(largestNumber(1, 2, 3, 4, 5));

function evenOdd() {
	for (let i = 0; i <= 20; i++) {
		if (i % 2 == 0) document.write(i + ' is even.<br>');
		else document.write(i + ' is odd.<br>');
	}
}
// evenOdd();

function fizzBuzz() {
	for (let i = 1; i <= 100; i++) {
		if (i % 3 == 0 && i % 5 == 0) document.write(i + ' FizzBuzz<br>');
		else if (i % 3 == 0) document.write(i + ' Fizz<br>');
		else if (i % 5 == 0) document.write(i + ' Buzz<br>');
	}
}
// fizzBuzz();

function sumDigit(n) {
	let sum = 0;
	let right = 0;
	while (n > 0) {
		right = n % 10;
		sum = sum + right ** 2;
		n = (n - right) / 10;
	}
	return sum;
}

function isHappy(n) {
	let sum = 0;

	do {
		sum = sumDigit(n);
		if (sum == 4) {
			return false;
		}
		n = sum;
	} while (!(sum == 1));
	return true;
}

function sumDigit(n) {
	let sum = 0;
	let right = 0;
	while (n > 0) {
		right = n % 10;
		sum = sum + right * right;
		n = (n - right) / 10;
	}
	return sum;
}

function happyNumbers(num) {
	let count = 0;
	let i = 1;

	while (!(count == num)) {
		if (isHappy(i)) {
			document.write('<h4>' + i + '</h4>');
			count += 1;
		}
		i++;
	}
}

/* let num = parseInt(prompt('Enter an integer : '));
happyNumbers(5);
happyNumbers(10);
happyNumbers(20); */