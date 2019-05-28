// Task 10
// Create a password checker from a prompt which will check to see is a password is strong enough. Min 5 characters, max 20, 1 number -->
validatePassword();

function validatePassword(){
var password = prompt("Enter your password");
var valid = false;
var numInit = false;
var dblnum = false;

if (password.length < 5) {
  console.log("Your password needs to be at least 5 characters");
}
else if (password.length > 20) {
  console.log("Your password needs to be less than 20 characters");
}
else {
  for (var i = 0; i < password.length; i++) {
   if (numInit === true) {
     console.log("There is a number");
     dblnum = true;
     break;
   }
   if (parseInt(password[i])){
      numInit = true;
   }
  }
  if (numInit === false){
    console.log("include a number");
  } else if (dblnum === false) {
    valid = true;
  }
}

if (valid === true){
  console.log("your password is set");
} else{
  validatePassword();
}

}
