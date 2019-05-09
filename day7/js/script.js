// console.log("js has loaded");

function yourName() {
  // console.log("button has been clicked");
  var name = prompt("What is your name?");
  var age = prompt("What is your age?");
  console.log(name);
  welcome(name, age);
}

function guest() {
    // console.log("guest");
    var age = prompt("What is your age?");
    welcome("guest", age);
}

// passing the variable/value 'name' into the welcome function. x is now a variable. welcome is a global function so you can call it with yourName
function welcome(x, y) {
  console.log(x);
  console.log("Hello " + x + " you are " + y + " years old");
}

// USERNAME AND PASSWORD VALIDATION

function register(){
  var username = prompt("Please enter username");
  var usernameValid = validate(username, 4);
  console.log(usernameValid);
  if (usernameValid === false) {
    console.log("Your username is invalid");
    return;
  }
  var password = prompt("Please enter password");
  var passwordValid = validate(password, 6);
  if(passwordValid === false){
    console.log("Your password is invalid");
    return;
}

console.log("You are good to go and all registered");

}

function validate(value, minLength){
  if(value.length >= minLength){
    return true;
  } else {
    return false;
  }
}


// Object
var carType;
var carColour;
var carYear;

var car = {
  type: 'Honda',
  colour: 'red',
  year: 2009,
  warrant: false,
  owners: ['Sam', 'Jack', 'Jess']
}
console.log(car);
console.log(car.year);
console.log(car['year']);
car.year = 2019;
console.log(car.year);

car.km = 1000;
console.log(car);

var items = [
    {
      name: 'Apples',
      price: 2.50,
      inStock: true
    },
    {
      name: 'Oranges',
      price: 1.45,
      inStock: false
    },
    {
      name: 'Pears',
      price: 3.00,
      inStock: true
    }
]

for (var i = 0; i < items.length; i++) {
  console.log(items[i]);
  if(items[i].inStock === true){
    document.getElementById('list').innerHTML += '<li>' + items[i].name + ' - $' + items[i].price+'</li>';
  }
}

// TASK LIST

var days = [
  {
    day: 'Monday',
    tasks: ['cleaning']
  },
  {
    day: 'Tuesday',
    tasks: ['homework', 'something else', 'shopping'],
  },
  {
    day: 'Wednesday',
    tasks: ['work', 'gym'],
  },
  {
    day: 'Thursday',
    tasks: ['cleaning', 'go to pub']
  }
];

for (var i = 0; i < days.length; i++) {
  console.log(days[i].day);
  console.log(days[i].tasks);
    for (var a = 0; a < days[i].tasks.length; a++) {
      console.log(days[i].tasks[a]);
  }
  // .day is the key
  // document.getElementById('taskList').innerHTML += '<li>' + days[i].tasks'</li>';
}
