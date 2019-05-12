// SHOPPING LIST
console.log("JS is working");

function addToList(){
  // console.log("adding to list");
  var newItem = prompt("What item are you wanting to add to the list");
  if(newItem.length> 0){
      document.getElementById("list").innerHTML += "<li>" + newItem + "</li>";
      items.push(newItem);
      console.log(items);
  } else {
      console.log("please make sure you input a value");
  }
}
