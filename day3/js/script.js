// String
// Number
// undefined

// Boolean
// var variable1 = true;
// var variable2 = false;
//
// if(variable1 === true){
//    console.log("variable 1 is true");
// }  else {
//     console.log("variable 1 is false");
// }
//
// if(variable1){
//    console.log("variable 1 is true");
// }  else {
//     console.log("variable 1 is false");
// }
//
// if(variable2 === false){
//    console.log("variable 2 is false");
// }
//
// if (!variable2) {
//   console.log("variable 2 is false");
// }

// Array
// var itemList = ["Item 1" , "Item 2", "Item 3", "Item 4", "Item 5"];
// console.log(itemList);
// itemList.push("Item 6")
// console.log(itemList);
//
// itemList[2] = "This has been edited";
// console.log(itemList);

// itemList[itemList.length] = "Item 7";
// console.log(itemList);
// console.log(itemList.length);
// console.log(itemList [2]);
// var welcome = "Hello there";
// console.log(welcome.length);

$("").click(function(){

});

function showNav(){
    var menu = document.getElementById("list");
    if(menu.style.display === 'block'){
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}
console.log("hello");

$("#showNav").click(function(){
  if(clicked){
                $("#circle").css('background-color', 'red');
                clicked  = false;
            } else {
                $("#circle").css('background-color', 'blue');
                clicked  = true;
            }
});
