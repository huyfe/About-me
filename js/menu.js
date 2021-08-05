function myFunction() {
  var x = document.getElementById("myLinks-mobile");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function myFunctionDesktop() {
  var x = document.getElementById("myLinks");
  var y = document.getElementById("box-header-icon");
  var z = document.getElementById("box-header-phone");


  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "block";
    z.style.display = "block";
  } else {
    x.style.display = "block";
    y.style.display = "none";
    z.style.display = "none";
  }
}