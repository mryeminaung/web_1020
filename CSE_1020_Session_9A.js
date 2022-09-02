/* ********************************* */
/* CSE 1020 Session 9A */

// The Fortune Teller
function tellFortune(jobTtle, geographicLocation, partner, numKids) {
    console.log('You will be ' + jobTtle + ' in ' + geographicLocation + ' and married to ' + partner + ' with ' + numKids + ' kids.');
}

/* tellFortune("web developer", "US", "Emily", 2);
tellFortune("web designer", "UK", "Cherry", 3);
tellFortune("fullstack developer", "Singapore", "Jane", 1); */

// The Puppy Age Calculator
function calculateDogAge(puppyAge) {
    let dogYears = 7 * puppyAge;
    console.log("Your doggie is " + dogYears + " years old in dog years!");
}
/* calculateDogAge(2);
calculateDogAge(3.5);
calculateDogAge(6);
 */

// The Lifetime Supply Calculator
function calculateSupply(age, amountPerDay) {
    let maxAge = 100;
    let amountConsumed = (amountPerDay * 365) * (maxAge - age);
    console.log('You will need ' + amountConsumed + ' to last you until the ripe old age of ' + maxAge);
}
/* calculateSupply(29, 34);
calculateSupply(22, 28);
calculateSupply(33, 43); */