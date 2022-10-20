import BrowserHistory from './BrowserHistory.js';

const history = new BrowserHistory;

chrome.contextMenus.create({
  id: 'log',
  title: 'Go back and open in new tab',
  contexts: ['all']
});

chrome.tabs.onUpdated.addListener((tabId, event) => {
  if (event.status === 'loading') {
    history.setUrlByTabId(tabId, event.url);
  }
});

chrome.tabs.onRemoved.addListener((tabId) => {
  history.delete(tabId);
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.tabs.goBack();
  chrome.tabs.create({
    active: true,
    url: history.getUrlByTabId(tab.id),
  });
});
