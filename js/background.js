chrome.action.onClicked.addListener(function() {
  chrome.windows.create({
    'url': 'popup/popup.html', 
    'type': 'popup',
    'width': 550,
    'height': 600,
    'top': 100
  }, function(window) {
  });
});