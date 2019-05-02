// var value = 10;
// console.log(value + 2);
// console.log(value - 2);
// console.log(value * 2);
// console.log(value / 2);

// console.log(++value);

// var newValue = value++;
// console.log(newValue);

// var newValue = --value;

// var inputNumber = prompt("please give me a number");
// // console.log(inputNumber);
// if(inputNumber > 6){
//     console.log(inputNumber + " is greater than 6");
// } else {
//     console.log(inputNumber + " is less than 6");
// }

// var randomNumber = prompt("Please enter the number 6")
// if(randomNumber == 6){
//   console.log("well done, you listened");
// } else {
//   console.log("you put in the wrong number");
// }

// * multiplication
// / division

// +=
// -=
// *=
// /=

// >  greater than
// < less than
// >= greater than or equals
// <= less than or equals

// =
// == comparing 2 values together - equals to
// === comparing 2 values together - equals to and making sure they are the same type

// != does not equal
// !== does not equal or does not equal the same type


// var greaterNumber = prompt("Please enter the number greater than 6")
// if(greaterNumber >= 6){
//   console.log("well done, you listened");
// } else {
//   console.log("you put in the wrong number");
// }

// var lessNumber = prompt("Please enter the number less than 6")
// if(lessNumber <= 6){
//   console.log("well done, you listened");
// } else {
//   console.log("you put in the wrong number");
// }

// var sixNumber = prompt("Please enter the number 6")
// if(sixNumber == 6){
//   console.log("well done, you listened");
// } else {
//   console.log("you put in the wrong number");
// }

// ACTIVITY

// var underFive = prompt("Please enter your childs age")
// if(underFive <= 5){
//   console.log("Entry is free for your child");
// } else {
//   console.log("Entry is $3 for your child");
// }

// var gradeMark = prompt("Please enter your grade mark")
// if(gradeMark >= 49){
//   console.log("Congratulations you get an A grade");
// } else {
//   console.log("You got an F grade");
// }


// var gradeMark = prompt("Please enter your grade mark")
// if(gradeMark == 0){
//   console.log("Fail, try harder next time");
// } else if (gradeMark < 30){
//   console.log("Fail but good attempt");
// } else {
//   console.log("You got an F grade");
// }

// var gradeMark = prompt("Please enter your grade mark")
// if(gradeMark == 0){
//   console.log("You got a F");
// } else if (gradeMark < 30){
//   console.log("You got a C");
// } else if (gradeMark < 60){
//   console.log("You got a B");
// } else {
//   console.log("You got an A");
// }

// var gradeCalculator = prompt("Please enter your grade mark")
// if(gradeCalculator < 0){
//   console.log("Error! Number must be higher than 0");
// } else if (gradeCalculator > 100){
//   console.log("Error! Number must be lower than 100");
// } else if (gradeCalculator >= 90){
//   console.log("You got a A");
// } else if (gradeCalculator >= 80){
//   console.log("You got a B");
// } else if (gradeCalculator >= 50){
//  console.log("You got a C");
// } else {
//   console.log("You got an F");
// }

// var earnings = prompt("How much did you earn?")
// if(earnings > 100){
//   var tax = earnings * 0.10;
//   console.log("You have to pay $" + tax + " tax");
// } else {
//   var tax = earnings * 0.09;
//   console.log("You have to pay $" + tax + " tax");
// }


var person1 = prompt("What was the cost of your persons 1 meal?")
// turns string into a number
if(person1 < 100){
    var person1Service = person1 * 0.10;
    var person1Total = parseInt(person1) + person1Service;
} else {
  var person1Total = parseInt(person1);
}

var person2 = prompt("What was the cost of your persons 2 meal?")
// turns string into a number
if(person2 < 100){
    var person2Service = person2 * 0.10;
    var person2Total = parseInt(person2) + person2Service;
} else {
  var person2Total = parseInt(person2);
}

var person3 = prompt("What was the cost of your persons 3 meal?")
// turns string into a number
if(person3 < 100){
    var person3Service = person3 * 0.10;
    var person3Total = parseInt(person3) + person3Service;
} else {
  var person3Total = parseInt(person3);
}

console.log("Person 1 Spends $" + person1Total);
console.log("Person 2 Spends $" + person2Total);
console.log("Person 3 Spends $" + person3Total);
var total = person1Total + person2Total + person3Total;
console.log("The total cost is $"+total);


// SHORTER SCRIPT
//
// var person1 = parseInt(prompt("What was the cost of your persons 1 meal?"));
// if(person1 < 100){
//
// }
