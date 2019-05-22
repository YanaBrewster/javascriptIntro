// Task 7
// Create an script that calculates the average number from an array
// Numbers then can be added from prompt and new average given

var numberList2 = [201, 10, 176, 63, 104];

document.getElementById("arrayList").innerHTML += "<p>" + numberList2 + "</p>"

var total = 0;
for(var i = 0; i < numberList2.length; i++) {
    total += numberList2[i];
}

var avg = total / numberList2.length;

document.getElementById("averageNumber").innerHTML += "<p>" + avg + "</p>"

function addNumber() {
      var newNumber= parseInt(prompt('Add a new number'));
    numberList2.push(newNumber);
    console.log(newNumber);
    console.log(numberList2);
}
