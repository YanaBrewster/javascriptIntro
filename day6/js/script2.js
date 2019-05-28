// console.log("js is working");
//
// // 2. Create a script which calculates how old someone is based on their birth year
// Redo task #1 but based on birth year

var yearBorn = parseInt(prompt("Please enter the year you were born to see if you are old enough to buy alcohol"));
  if(yearBorn < 2001 ){
  document.getElementById('alcYear'). innerHTML = "<h4>You can buy alcohol!</h4>"
  } else {
  document.getElementById('alcYear'). innerHTML = "<h4>You can't buy alcohol!</h4>"
  }
