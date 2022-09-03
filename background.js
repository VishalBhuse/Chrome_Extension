var baseURLs = {
  Wikipedia: "http://en.wikipedia.org/wiki/",
  Bing: "https://www.bing.com/search?q=",
  Google: "https://www.google.com/search?q=",
  Youtube: "https://www.youtube.com/results?search_query=",
};

chrome.runtime.onInstalled.addListener(() => {
  for (let key of Object.keys(baseURLs)) {
    chrome.contextMenus.create({
      id: key,
      title: key,
      type: "normal",
      contexts: ["selection"],
    });
  }

  chrome.contextMenus.onClicked.addListener(function (info, tab) {
    baseURL = baseURLs[info.menuItemId];
    var newURL = baseURL + info.selectionText;
    chrome.tabs.create({ url: newURL });
  });
});
