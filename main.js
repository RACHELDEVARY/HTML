// var p         = document.querySelector('p');
// var index     = 0;
// var sentences = [
//   "Ticking away the moments that make up a dull day",
//   "You fritter and waste the hours in an offhand way. ",
//   "Kicking around on a piece of ground in your home town ",
//   "Waiting for someone or something to show you the way. "
// ];

// function toggleText() {
//   p.innerHTML = sentences[index];
//   index = (index + 1) % sentences.length;
// }

// window.addEventListener('click', toggleText);
let page1 = "block";
let page2 = "none";

// function toggleText() {
//   p.innerHTML = sentences[index];
//   index = (index + 1) % sentences.length;
// }


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