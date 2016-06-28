window.onload = function() {
  console.log("app.js loaded");
  var buttons = document.getElementsByTagName('button')

  for (var i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', function(e) {
      console.log(e.target.className);
    })
  }
}
