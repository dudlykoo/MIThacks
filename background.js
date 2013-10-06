chrome.app.runtime.onLaunched.addListener(function() {


  chrome.app.window.create('sandboxed.html', {
    'bounds': {
      'width': 400,
      'height': 400,
      'left': 400,
      'top': 0
    }
  });
});