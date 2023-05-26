chrome.runtime.onInstalled.addListener(() => {

  //create context menu
  chrome.contextMenus.create({
      id: "1",
      title: "Authz link", 
      contexts: ["selection"], 
  })
});

//listener for context menu
chrome.contextMenus.onClicked.addListener(function(info, tab){
  //the URL that will be added to based on the selection
  baseURL = "http://en.wikipedia.org/wiki/";
  newURL = `https://role-authz.godaddy.com/authorize?websiteId=${info.selectionText}&subdomain=marketing.hub&path=website/${info.selectionText}`;
  //create the new URL in the user's browser
  chrome.tabs.create({ url: newURL });
})
