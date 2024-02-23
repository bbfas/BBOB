chrome.action.onClicked.addListener(function() {
  chrome.windows.create({
    'url': 'popup/popup.html', 
    'type': 'popup',
    'width': 520,
    'height': 900,
    'top': 100
  }, function(window) {
  });
});