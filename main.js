

function myFunction() {
  var first = document.getElementById("firstScreen");
  var second = document.getElementById("secondScreen");
  if (first.style.display === "none") {
    second.style.display = "none"
    first.style.display = "block";
  }
  else {
    second.style.display = "block"
    first.style.display = "none";
  }
}
