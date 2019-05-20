// Task 4
//
// Find the biggest element in an array of numbers
// Create a script that prompts for a new number and which then gets added to the above array and find the biggest number again.

var biggestNumber= 0;
var numberList = [201, 10, 176, 63, 104];
for (var i = 0; i < numberList.length; i++) {
  if (numberList[i] > biggestNumber) {
    biggestNumber = numberList[i]
  }
}
document.getElementById("numberedList").innerHTML += "<p>" + numberList + "</p>";
document.getElementById("num").innerHTML = + biggestNumber + "is the biggest number";

function addNumber(numberList) {
  var newNumber = prompt("Add a number");
  if(newNumber.length> 0){
      document.getElementById("newBiggestNumber").innerHTML = + newNumber;
      numberList.push(newNumber);

    document.getElementById("newBiggestNumber").innerHTML = + biggestNumber + "is the biggest number";
  } else {
    document.getElementById("newBiggestNumber").innerHTML = + newNumber + "is not the biggest number";
}

}
