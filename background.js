chrome.runtime.onInstalled.addListener(() => {

  let env = [{ 
    "id": "prod",
    "url": "godaddy.com",
    "contexts": ["selection"],
    "title": "AuthZ PROD"
  },
  { 
    "id": "dev",
    "url": "dev-godaddy.com",
    "contexts": ["selection"],
    "title": "AuthZ DEV"
  },
  { 
    "id": "test",
    "url": "test-godaddy.com",
    "contexts": ["selection"],
    "title": "AuthZ TEST"
  }
];

for(let i = 0; i < env.length; i++) {
  console.log(env[i].id, env[i].title)
  chrome.contextMenus.create({
    id: env[i].id,
    title: env[i].title, 
    contexts: ["selection"], 
})};
});

//listener for context menu
chrome.contextMenus.onClicked.addListener(function(info, tab){
  let newUrl;
  console.log('CLICK', info.menuItemId)
  //the URL that will be added to based on the selection
  switch(info.menuItemId) {
    case 'prod':
      newUrl = `https://role-authz.godaddy.com/authorize?websiteId=${info.selectionText}&subdomain=marketing.hub&path=website/${info.selectionText}`
      break;
    case 'test':
      newUrl = `https://role-authz.test-godaddy.com/authorize?websiteId=${info.selectionText}&subdomain=marketing.hub&path=website/${info.selectionText}`
      break;
    case 'dev':
      newUrl = `https://role-authz.dev-godaddy.com/authorize?websiteId=${info.selectionText}&subdomain=marketing.hub&path=website/${info.selectionText}`
      break;
  }
  //create the new URL in the user's browser
  chrome.tabs.create({ url: newUrl });
})
