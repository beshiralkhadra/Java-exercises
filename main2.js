let a = document.getElementById("exa");
let count = 0;
a.style.cssText = "background:blue; width:200px;height:200px;border:hidden";
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
