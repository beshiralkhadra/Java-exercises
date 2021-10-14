let a = document.querySelector("#password");

let b = document.querySelector("#cPassword");
let z = document.querySelector(".msg1");
let y = document.querySelector(".msg2");
let o = document.getElementById("btn");
o.style.cssText = "visibility:hidden";

a.addEventListener("keyup", invalidPassword);
function invalidPassword() {
  let c = a.value;
  let f = c.length;

  if (f <= 6) {
    z.innerHTML = "too short";
  } else if (f > 6) {
    z.innerHTML = "correct password";
  }
}
b.addEventListener("keyup", invalidRepeatPassword);
function invalidRepeatPassword() {
  let c = a.value;
  let f = c.length;
  let w = b.value;

  if (w != c || f <= 6) {
    y.innerHTML = "too short";
  } else if (w == c && f > 6) {
    y.innerHTML = "correct password";
    o.style.cssText = "visibility:block";
  }
}
