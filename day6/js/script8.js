// Task 8
// Create a script that asks for x amount of people. And then asks for their ages and finds the oldest and youngest age. As well as the average age


var aAgePerson = [];

  var iAge = parseInt(prompt('How many people?'));
    for (var i = 0; i < iAge; i++) {
    var aAgePerson = parseInt(prompt('How old is person ' + (i+1) + '?'));
    iAge.push(aAgePerson);
}

var oldestAge = 0;
var youngestAge = 0;
var totalAge = 0;
for (var i = 0; i < aAgePerson.length; i++) {
  if(aAgePerson[i] > oldestAge){
    oldestAge = aAgePerson[i];
  }
  if(aAgePerson[i] > youngestAge){
    youngestAge = aAgePerson[i];
  }
  totalAge = aAgePerson[i];
}

var avg = totalAge / aAgePerson.length;

document.getElementById("averageAge").innerHTML += "<p>" + avg + "</p>"
