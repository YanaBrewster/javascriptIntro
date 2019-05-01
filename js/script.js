// console.log("Hello");
// console.log("Hello Again");
// alert("this is an alert");

// console.log( 1 + 2 );
//
// console.log("this is a string");
// console.log(10);
// console.log("10");

// console.log("string 1" + " string 2");

// var variable1 = "this is now a string";
// console.log(variable1);
// variable1 += "something else";
// console.log(variable1);


// var question = prompt("What is your name?");
// var secondQuestion = prompt("What is your favourite food?")
// var thirdQuestion = prompt("What is your second favourite food?")
// var fourthQuestion = prompt("What is your favourite animal?")
// var fifthQuestion = prompt("What is your dream job?")
// console.log(question);
// console.log(secondQuestion);
// console.log(thirdQuestion);
// console.log(fourthQuestion);
// console.log(fifthQuestion);
// console.log("Hello " +question+ " your favourite food is " +secondQuestion+ " and " +thirdQuestion+". You wish you had a pet " +fourthQuestion+ " and your dream is to be a " +fifthQuestion);


var question = prompt("What is your name?");
// document.write("<h2>What is your name?</h2>");
// document.write("<h3 class='red'>"+question+"</h3>");
document.getElementById("yourName").innerText = question;

// document.getElementById("pageContainer").innerHTML = "<h2>What is your name?</h2>";
// document.getElementById("pageContainer").innerHTML += "<h3>"+question+"</h3>";
// document.getElementById("heading").innerText = "Hello "+ question;


var secondQuestion = prompt("What is your favourite food?");
// document.write("<h2>What is your favourite food?</h2>");
// document.write("<h3 class='red'>"+secondQuestion+"</h3>");
document.getElementById("yourFood").innerText = secondQuestion;


var thirdQuestion = prompt("What is your favourite animal?")
// document.write("<h2>What is your favourite animal?</h2>");
// document.write("<h3 class='red'>"+thirdQuestion+"</h3>");
document.getElementById("yourAnimal").innerText = thirdQuestion;

var fourthQuestion = prompt("What is your dream job?")
// document.write("<h2>What is your dream job?</h2>");
// document.write("<h3 class='red'>"+fourthQuestion+"</h3>");
//
// document.write("<h2 class='blue'>Hello " +question+ "! Your favourite food is " +secondQuestion+ ". You wish you had a pet " +thirdQuestion+ " and your dream is to be a " +fourthQuestion);
document.getElementById("yourDreamJob").innerText = fourthQuestion;
