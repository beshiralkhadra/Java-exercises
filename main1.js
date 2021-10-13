let exampleOne = document.getElementById("ex1");
document.querySelector("h1").style.cssText =
  "background:yellow;border: solid black 1.5px ; padding:1em ; width:30%;text-align:center";
function firstfun() {
  exampleOne.innerHTML = "Can I Help you ";
}
function secondfun() {
  exampleOne.innerHTML = "Hello world! ";
}
exampleOne.onmouseover = firstfun;
exampleOne.onmouseleave = secondfun;
