// Task 9
// Create a script which is going to act as a calculator. You should be asked for 3 prompts which will then output the end calculation. It should be able to do all 4 mathematical options

var num1 = parseInt(prompt("What is the first number input?"));
var num2 = parseInt(prompt("What is the second number input?"));

var maths = prompt("Choose  +, -, /(divide by), *(x)");

console.log(num1);
console.log(num2);
console.log(maths);

var total;

if (maths === "+"){
  total = num1 + num2;
  document.getElementById("total").innerHTML += " " +num1 + maths + num2+ " = " + total + " "
} else if (maths === "-"){
  total = num1 - num2;
  document.getElementById("total").innerHTML += " " +num1 + maths + num2+ " = " + total + " "
} else if (maths === "*"){
  total = num1 * num2;
  document.getElementById("total").innerHTML += " " +num1 + maths + num2+ " = " + total + " "
} else if (maths === "/"){
  total = num1 / num2;
  document.getElementById("total").innerHTML += " " +num1 + maths + num2+ " = " + total + " "
} else{
  document.getElementById("total").innerHTML += "Invalid input, refresh and try again"
}
