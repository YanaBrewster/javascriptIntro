// Task 8
// Create a script that asks for x amount of people. And then asks for their ages and finds the oldest and youngest age. As well as the average age

var ages = [];

for (var i = 0; i < ages.length; i++) {
    if(ages[i] > oldestAge){
        oldestAge = ages[i];
    }
    if(ages[i] < youngestAge){
        youngestAge = ages[i];
    }
    totalAge = totalAge + ages[i];
}

  var numOfPeople = parseInt(prompt('How many people?'));
    for (var i = 0; i < numOfPeople; i++) {
    var age = parseInt(prompt('How old is person ' + (i+1) + '?'));
    ages.push(age);
}

var oldestAge = 0;
var youngestAge = [0];
var totalAge = 0;
for (var i = 0; i < ages.length; i++) {
  if(ages[i] < oldestAge){
    oldestAge = ages[i];
  }
  if(ages[i] > youngestAge){
    youngestAge = ages[i];
  }
  totalAge = totalAge + ages[i];
}

var avg = totalAge / ages.length;

document.getElementById("oldAge").innerHTML += " " + oldestAge + " "
document.getElementById("youngAge").innerHTML += " " + youngestAge + " "
document.getElementById("averageAge").innerHTML += "<p>" + avg + "</p>"
