document.addEventListener("DOMContentLoaded", function () {
  console.log("content.js loaded");
  let elements = document.querySelectorAll(".tossum");
  console.log(`Found ${elements.length} elements with class 'tossum'`);
  if (elements.length > 0) {
    alert(`Found ${elements.length} elements with class 'tossum'!`);
  }
});