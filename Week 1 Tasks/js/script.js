
// Coffees are $3.50 each, but if you order more than 10, you get a 15% discount.
// Write a program that asks for the quantity and correctly calculates the total after discount

// var coffeePrice = 3.50;
// var order = parseInt(prompt("How many coffees are you ordering?"));
// var total;
// if (order >= 10){
//   total = coffeePrice * order;
//   var discount = total * 0.15;
//   total = total - discount;
// } else {
//   total = coffeePrice * order;
// }
// console.log(total);

// Muffins are $2.35 each, but buy 10 or more they’re $2.10 each,
// but buy 25 or more and they’re $1.90 each.
// Accept quantity as an input, output the unit price and the total.

// var muffins = parseInt(prompt("how many muffins are your ordering?"));
// var muffinsPrice;
// if (muffins < 10){
//   muffinsPrice = 2.35;
// } else if(muffins < 25){
//   muffinsPrice = 2.10;
// } else {
//   muffinsPrice = 1.90;
// }
// var total = muffins * muffinsPrice;
// console.log(total);

// Steak dinners are $25.60 each, for every 2 full price steaks you get a third for free, (you will aways get the third)
// Get the quantity as input, and output the total price, and the number of free steaks!
// *Bonus:*
// Mushroom sauce is an extra $2, but the free steaks don’t get free sauce.
// Get the number of mushroom sauce servings as another input, and adjust the total.


var numberOfSteaks = parseInt(prompt("How many steaks are you ordering"));
var steakPrice = 25.60;
var numberOfFree;
var totalNumberOfSteaks;
var totalPrice;
// if(numberOfSteaks == 0){}
if (numberOfSteaks % 3 === 0) {
  numberOfFree = numberOfSteaks / 3;
  totalNumberOfSteaks = numberOfSteaks;
} else {
  var remainder = numberOfSteaks % 3;
  var numberOfPaid = numberOfSteaks - remainder;
  totalNumberOfSteaks = numberOfSteaks;
  numberOfFree = numberOfPaid / 3;
  if(remainder === 2){
    console.log("You get a free steak no matter what");
    totalNumberOfSteaks++;
    numberOfFree++;
  }
  console.log(remainder);
}
totalPrice = (totalNumberOfSteaks - numberOfFree) * steakPrice;

console.log("you have recieved " + totalNumberOfSteaks + " steaks");
console.log("You get " + numberOfFree + " free steaks");
console.log("Your total price is $" +totalPrice);
