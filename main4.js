let a = document.querySelector(".fontFamily");
let b = document.querySelector("p");
a.style.cssText = "margin-right:1em";

b.style.cssText = "border:solid black 2px;padding:1em; width:50%";
a.addEventListener("change", changeFamily);
function changeFamily() {
  let choice = a.value;
  if (choice === "font1") {
    b.style.cssText =
      " font-family: Arial, Helvetica, sans-serif; border:solid 1px;padding:1em;width:50%";
  } else if (choice === "font2") {
    b.style.cssText =
      "font-family: 'Times New Roman', Times, serif;border:solid 1px;padding:1em;width:50%";
  }
}
let c = document.querySelector(".fontSize");
c.addEventListener("change", changeSize);
c.style.cssText = "margin-right:1em";
function changeSize() {
  let selectMe = c.value;
  if (selectMe === "size1") {
    b.style.cssText = "font-size:20px;border:solid 1px;padding:1em;width:50%";
  } else if (selectMe === "size2") {
    b.style.cssText = "font-size:40px;border:solid 1px;padding:1em;width:50%";
  }
}
let d = document.querySelector("#type1");
let e = document.querySelector("#type2");
let f = document.querySelector("#type3");
d.addEventListener("click", fontType1);
function fontType1() {
  b.style.cssText = "font-style: italic;border:solid 1px;padding:1em;width:50%";
}
e.addEventListener("click", fontType2);
function fontType2() {
  b.style.cssText = "font-weight: bold;border:solid 1px;padding:1em;width:50%";
}
f.addEventListener("click", fontType3);
function fontType3() {
  b.style.cssText =
    "text-decoration: underline;border:solid 1px;padding:1em;width:50%";
}
