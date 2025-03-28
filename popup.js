document.getElementById("findTossum").addEventListener("click", () => {
    console.log("Find Tossum button clicked");
    chrome.tabs.executeScript({ file: "content.js" });
  });
  