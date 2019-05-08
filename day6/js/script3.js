// console.log("js is working");

// 3.
// Create a to do list from a prompt


function addToList(){
  var listItem = prompt("Add a task to your to do list");
  if (listItem.length > 0){
      document.getElementById("list").innerHTML += "<li>" + listItem + "</li>";
      console.log(listItem);
    } else {
      console.log("please make sure you input a value");
    }
}
