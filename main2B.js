let a = document.getElementById("exa");
a.style.cssText = "border:hidden;width:200px;height:200px;background:blue";
let x = Math.floor(math.random() * 3);
colors = [red, blue, green];
let count = x;
a.style.backgroundColor = colors[Math.floor(math.random() * 3)];
a.addEventListener("click", changeColor);
function changeColor() {
  if (count === 0) {
    a.style.backgroundColor = "blue";
    count++;
  } else if (count === 1) {
    a.style.backgroundColor = "green";
    count++;
  } else if (count === 2) {
    a.style.backgroundColor = "red";
    count = 0;
  }
}
