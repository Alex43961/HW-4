"use strict";
//let counter: boolean = true
//while (counter) {
//	let userAge: number | null = +prompt("What is your age ?")
//	if (userAge >= 1 && userAge < 12) {
//		alert("Kid")
//		counter = false
//	} else if (userAge >= 12 && userAge < 18) {
//		alert("Teenager")
//		counter = false
//	} else if (userAge >= 18 && userAge < 60) {
//		alert("Adult")
//		counter = false
//	} else if (userAge >= 60) {
//		alert("Old man")
//		counter = false
//	} else if (isNaN(userAge) || userAge === 0) {
//		alert("Something went wrong. Try again")
//	}
//}
//! 2
//let switcher: boolean = true;
//while (switcher) {
//	const userNumber: number | null = +prompt("Enter your number from 0 to 9");
//	switch (userNumber) {
//		case 0:
//			alert(")")
//			switcher = !confirm("Are you want to exit ?")
//			break;
//		case 1:
//			alert("!")
//			switcher = !confirm("Are you want to exit ?")
//			break;
//		case 2:
//			alert("@")
//			switcher = !confirm("Are you want to exit ?")
//			break;
//		case 3:
//			alert("#")
//			switcher = !confirm("Are you want to exit ?")
//			break;
//		case 4:
//			alert("$")
//			switcher = !confirm("Are you want to exit ?")
//			break;
//		case 5:
//			alert("%")
//			switcher = !confirm("Are you want to exit ?")
//			break;
//		case 6:
//			alert("^")
//			switcher = !confirm("Are you want to exit ?")
//			break;
//		case 7:
//			alert("&")
//			switcher = !confirm("Are you want to exit ?")
//			break;
//		case 8:
//			alert("*")
//			switcher = !confirm("Are you want to exit ?")
//			break;
//		case 9:
//			alert("(")
//			switcher = !confirm("Are you want to exit ?")
//			break;
//		default:
//			alert("Something went wrong. Try again.")
//			break;
//	}
//}
//!  3
//let numbers
//let counter: boolean = true
//while (counter) {
//	const userThreeDigitNumber: number | null = +prompt("Enter three-digit number")
//	let userNumberLength = userThreeDigitNumber.toString().length
//	if (userNumberLength != 3 || isNaN(userThreeDigitNumber)) {
//		console.log("Something went wrong. Try again.");
//	} else {
//		numbers = userThreeDigitNumber.toString()
//		counter = false
//	}
//}
//function containsDuplicate(numbers) {
//	let len = numbers.length;
//	for (let i = 0; i < len; i++) {
//		for (let k = i + 1; k < len; k++) {
//			if (numbers[i] === numbers[k]) {
//				return "There are coincidences"
//			}
//		}
//	}
//	return "There are no coincidences"
//}
//let result = containsDuplicate(numbers);
//console.log(result);
//! 4
//const userYear: boolean | null = +prompt("Enter any year")
//if(userYear % 400 == 0 || userYear % 4 == 0 && userYear % 100 != 0) {
//	console.log("It's leap year");	
//} else {
//	console.log("It's not leap year");
//}
//! 6
let isRunning = true;
while (isRunning) {
    const userCurrency = +prompt("How currency you want to get ?: 1)EUR 2)UAH 3)AZN");
    let userAmount;
    switch (userCurrency) {
        case 1:
            userAmount = +prompt("How many dollars you want to exchange ?");
            isRunning = alert("You get " + userAmount / 1.08 + " EUR");
            break;
        case 2:
            userAmount = +prompt("How many dollars you want to exchange ?");
            isRunning = alert("You get " + userAmount / 0.025 + " UAH");
            break;
        case 3:
            userAmount = +prompt("How many dollars you want to exchange ?");
            isRunning = alert("You get " + userAmount / 0.59 + " AZN");
            break;
        default:
            alert("Something went wrong. Try again.");
            break;
    }
}
