export default class BrowserHistory {
  constructor() {
    this.tabIdToPreviousUrl = {};
  }

  setUrlByTabId(tabId, url) {
    this.tabIdToPreviousUrl[tabId] = url;
  }

  getUrlByTabId(tabId) {
    return this.tabIdToPreviousUrl[tabId];
  }

  delete(tabId) {
    delete this.tabIdToPreviousUrl[tabId];
  }
}
