let a = document.querySelector(".box1");
a.style.cssText =
  "background:black;border:hidden;width:20px;height:20px;margin:.5em;color:white";
let b = document.querySelector(".box2");
b.style.cssText =
  "background:#000034;border:hidden;width:20px;height:20px;margin:.5em";
let c = document.querySelector(".box3");
c.style.cssText =
  "background:#000068;border:hidden;width:20px;height:20px;margin:.5em";
let d = document.querySelector(".box4");
d.style.cssText =
  "background:#9B0067;border:hidden;width:20px;height:20px;margin:.5em";
let e = document.querySelector(".box5");
e.style.cssText =
  "background:#00CE00;border:hidden;width:20px;height:20px;margin:.5em";
let f = document.querySelector(".box6");
f.style.cssText =
  "background:#00CE23;border:hidden;width:20px;height:20px;margin:.5em";
let g = document.querySelector(".box7");
g.style.cssText =
  "background:#00CCCD;border:hidden;width:20px;height:20px;margin:.5em";
let h = document.querySelector(".box8");
h.style.cssText =
  "background:#00CBFF;border:hidden;width:20px;height:20px;margin:.5em";
let i = document.querySelector(".box9");
i.style.cssText =
  "background:#FF6525;border:hidden;width:20px;height:20px;margin:.5em";
let j = document.querySelector(".box10");
j.style.cssText =
  "background:#FF5FFF;border:hidden;width:20px;height:20px;margin:.5em";
let bigBox = document.querySelector(".color");
bigBox.style.cssText =
  "border:solid 1px;width:200px;height:40px;margin:.5em;text-align:center";
// let hexColor = document.querySelector("#hex");
// let favColor = document.querySelector("#favcolor");
// a.addEventListener("click", color1);
// console.log(favColor);
// let beshir = favColor.value;
a.addEventListener("click", color1);
function color1() {
  bigBox.innerHTML = "rgb(0, 0, 0)";
  bigBox.style.cssText =
    "background:#00CE00;border:hidden;width:200px;height:40px;margin:.5em;color:white;text-align:center;padding-top:20px";
}
b.addEventListener("click", color2);
function color2() {
  bigBox.innerHTML = "rgb(0, 0, 52)";
  bigBox.style.cssText =
    "background:rgb(0, 0, 52);border:hidden;width:200px;height:40px;margin:.5em;color:white;text-align:center;padding-top:20px";
}
c.addEventListener("click", color3);
function color3() {
  bigBox.innerHTML = "rgb(0, 0, 104)";
  bigBox.style.cssText =
    "background:rgb(0, 0, 104);border:hidden;width:200px;height:40px;margin:.5em;color:white;text-align:center;padding-top:20px";
}
d.addEventListener("click", color4);
function color4() {
  bigBox.innerHTML = "rgb(155, 0, 103)";
  bigBox.style.cssText =
    "background:rgb(155, 0, 103);border:hidden;width:200px;height:40px;margin:.5em;color:white;text-align:center;padding-top:20px";
}
e.addEventListener("click", color5);
function color5() {
  bigBox.innerHTML = "rgb(0, 206, 0)";
  bigBox.style.cssText =
    "background:rgb(0, 206, 0);border:hidden;width:200px;height:40px;margin:.5em;color:white;text-align:center;padding-top:20px";
}
f.addEventListener("click", color6);
function color6() {
  bigBox.innerHTML = "rgb(0, 206, 35)";
  bigBox.style.cssText =
    "background:rgb(0, 206, 35);border:hidden;width:200px;height:40px;margin:.5em;color:white;text-align:center;padding-top:20px";
}
g.addEventListener("click", color7);
function color7() {
  bigBox.innerHTML = "rgb(0, 204, 205)";
  bigBox.style.cssText =
    "background:rgb(0, 204, 205);border:hidden;width:200px;height:40px;margin:.5em;color:white;text-align:center;padding-top:20px";
}
h.addEventListener("click", color8);
function color8() {
  bigBox.innerHTML = "rgb(0, 203, 255)";
  bigBox.style.cssText =
    "background:rgb(0, 203, 255);border:hidden;width:200px;height:40px;margin:.5em;color:white;text-align:center;padding-top:20px";
}
i.addEventListener("click", color9);
function color9() {
  bigBox.innerHTML = "rgb(255, 101, 37)";
  bigBox.style.cssText =
    "background:rgb(255, 101, 37);border:hidden;width:200px;height:40px;margin:.5em;color:white;text-align:center;padding-top:20px";
}
j.addEventListener("click", color10);
function color10() {
  bigBox.innerHTML = "rgb(255, 95, 255)";
  bigBox.style.cssText =
    "background:rgb(255, 95, 255);border:hidden;width:200px;height:40px;margin:.5em;color:white;text-align:center;padding-top:20px";
}
