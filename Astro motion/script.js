function barIcon() {
  console.log("hello");
  var x = document.getElementById("myLinks");
  var y = document.getElementById("nav-mo");

  if ((x.style.display = "none")) {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    y.style.display = "none";
  }
}
