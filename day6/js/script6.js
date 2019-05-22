// Task 6
// Create an script that lists everyone in the class from a prompt, 1 prompt per name

var aclassStudent = [];


  var iclassSize = parseInt(prompt('Class size?'));
  for(var i = 0; i < iclassSize; i++) {
    var iclassStudent = prompt('Students name');
    aclassStudent.push(iclassStudent);
    document.getElementById("className").innerHTML += "<li>" + iclassStudent + "</li>";
  }
