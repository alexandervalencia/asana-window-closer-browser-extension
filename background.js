browser.runtime.onMessage.addListener(function (message, sender) {
  if (message.closeTab) browser.tabs.remove(sender.tab.id);
});
