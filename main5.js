document.getElementById("firstparagraph").style.cssText =
  "border :2px black solid  ; margin:1em; padding:.5em; width:50%";
document.getElementById("secondparagraph").style.cssText =
  "border :2px black solid  ; margin:1em; padding:.5em; width:50%";
document.getElementById("thirdparagraph").style.cssText =
  "border :2px black solid  ; margin:1em; padding:.5em; width:50%";
let w = document.querySelector("#showm");
let y = document.querySelector("#hidden");

function change1() {
  document.getElementById("para1").style.display = "none";
}
function change2() {
  document.getElementById("para2").style.display = "none";
}
function change3() {
  document.getElementById("para3").style.display = "none";
}
function change4() {
  document.getElementById("para1").style.display = "block";
}
function change5() {
  document.getElementById("para2").style.display = "block";
}
function change6() {
  document.getElementById("para3").style.display = "block";
}
