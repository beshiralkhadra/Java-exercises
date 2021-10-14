let c = document.querySelector("#btn");
let audio = document.querySelector("div");
let fName = document.querySelector("#fname");
fName.style.cssText = "margin-left:1em;margin-top:1em";

c.addEventListener("click", addSongs);
function addSongs() {
  let b = document.createElement("ul");
  let z = document.createElement("li");
  b.appendChild(z);

  let e = document.createTextNode("new song");

  z.appendChild(e);
  audio.appendChild(b);
  audio.style.cssText =
    "margin-left:1em;margin-bottom:.5em;margin-top:.5em;border:solid 1px;padding:.5em;width:50%;background:#ECECEC";
}
addSongs();
