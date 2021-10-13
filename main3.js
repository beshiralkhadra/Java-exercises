let a = document.querySelector("select");
let b = document.getElementById("img");
a.style.cssText = "margin:1em";

a.addEventListener("change", changeFlag);

function changeFlag() {
  let choice = a.value;
  if (choice === "jordan") {
    b.style.cssText = `background:url("jordan.png");width:300px;height:200px; background-size: cover;`;
  } else if (choice === "us") {
    b.style.cssText = `background:url("us.jpg");width:300px;height:200px; background-size: cover;`;
  } else if (choice === "uk") {
    b.style.cssText = `background:url("uk.png");width:300px;height:200px; background-size: cover;`;
  }
}
