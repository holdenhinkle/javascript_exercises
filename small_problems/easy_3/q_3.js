var currentYear = new Date().getFullYear();
var age = Number(prompt("What is your age?"));
var retirementAge = Number(prompt("At what age would you like to retire?"));
var yearsUntilRetirementAge = retirementAge - age;

console.log(`It's ${currentYear}. You will retire in ${currentYear + yearsUntilRetirementAge}.`);
console.log(`You have only ${yearsUntilRetirementAge} years of work to go!`);