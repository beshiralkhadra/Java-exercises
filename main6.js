let c = document.querySelector("#btn");
let audio = document.querySelector("div");
let fName = document.querySelector("#fname");
fName.style.cssText = "margin-left:1em;margin-top:1em";
audio.style.cssText = "margin:1em;border:solid 1px;width:80%";
c.addEventListener("click", addSongs);
function addSongs() {
  let b = document.createElement("p");

  let e = document.createTextNode("new song");
  b.appendChild(e);
  audio.appendChild(b);
}
addSongs();
