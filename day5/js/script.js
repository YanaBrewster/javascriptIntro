console.log("js is working");

// function onLoad() {
//   console.log("running onLoad function");
//   var hello = "hello there";
//   console.log(hello);
// }
//
// onLoad();

// *Task*
// Recreate the project we did on Tuesday where we render a list of tasks.
// The site should ask the user if there are any tasks that need to be done
// for each of the days of the week. Once it has gone through all of the days,
// it should then render out on the screen

document.write("<h1>My to do list</h1>");

var days = ["Monday","Tuesday","Wednesday"];
var tasks = [];

// for (var i = 0; i < days.length; i++) {
//   tasks.push([]);
// }
var start = prompt("do you want to add tasks for the week?");

document.write("<h2>Tasks</h2>");
document.write("<ul>");
  for (var i = 0; i < days.length; i++) {
    document.write("<li>" + days[i]); }

      document.write("<ul>");
        for (var a = 0; a < tasks[i].length; a++) {
          document.write("<li>" + tasks[i][a] + "</li>");
        }
      document.write("</ul>");

document.write("</ul>");




console.log(days);
console.log(tasks);
