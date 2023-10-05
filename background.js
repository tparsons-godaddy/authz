chrome.contextMenus.create({
  id: 'thunderIntoWebsitesDev',
  title: 'Thunder into Website - Dev',
  contexts: ['selection'],
  'onclick': openDev()
});
​
chrome.contextMenus.create({
  id: 'thunderIntoWebsitesTest',
  title: 'Thunder into Website - Test',
  contexts: ['selection'],
  'onclick': openTest()
});
​
chrome.contextMenus.create({
  id: 'thunderIntoWebsitesProd',
  title: 'Thunder into Website - Prod',
  contexts: ['selection'],
  'onclick': openProd()
});
​
chrome.contextMenus.create({
  id: 'thunderSeparator',
  type: 'separator',
  contexts: ['selection']
});
​
function openDev(){
  return function(info, tab){
    let text = info.selectionText;
    let link = `https://role-authz.dev-godaddy.com/authorize?websiteId=${text}&subdomain=marketing.hub&path=website/${text}`;
    chrome.tabs.create ({ index: tab.index + 1, url: link, selected: true });
  }
};
​
function openTest(){
  return function(info, tab){
    let text = info.selectionText;
    let link = `https://role-authz.test-godaddy.com/authorize?websiteId=${text}&subdomain=marketing.hub&path=website/${text}`;
    chrome.tabs.create ({ index: tab.index + 1, url: link, selected: true });
  }
};
​
function openProd(){
  return function(info, tab){
    let text = info.selectionText;
    let link = `https://role-authz.godaddy.com/authorize?websiteId=${text}&subdomain=marketing.hub&path=website/${text}`;
    chrome.tabs.create ({ index: tab.index + 1, url: link, selected: true });
  }
};
