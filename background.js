chrome.browserAction.onClicked.addListener((tab) => {
    console.log("Browser action clicked");
    chrome.tabs.executeScript(tab.id, { file: "content.js" });
  });