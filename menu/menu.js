
function functionRetract() {
  if (document.getElementById("menu").className === "burgerMenu") {
    document.getElementById("menu").className += " responsive";
  } else {
    document.getElementById("menu").className = "burgerMenu";
  }
}
