let a = document.getElementById("exa");
a.style.cssText = "border:hidden;width:200px;height:200px;background:blue";

let colors = ["red", "blue", "green"];
console.log(colors);

a.addEventListener("click", randomColors);
function randomColors() {
  var x = colors[Math.floor(Math.random() * colors.length)];
  console.log(x);
  a.style.background = x;
}
