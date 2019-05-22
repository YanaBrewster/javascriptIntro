// Task 5:
// Create an odd and even number checker

function oddEvenNumber() {
  var numInput = parseInt(prompt("input a number"));
  if ((numInput % 2) == 0) {
    console.log("is an even number");
    document.getElementById("oddEvenNumberResult").innerHTML += "<p>" + numInput + " is an even number</p>";
  } else{
    console.log("is an odd number");
    document.getElementById("oddEvenNumberResult").innerHTML += "<p>" + numInput + " is not an even number</p>";
  }

}
