window.onload = function() {
  console.log("app.js loaded");

  var buttons = document.getElementsByTagName('button')

  var timers = {}

  for (var i = 0; i < buttons.length; i += 1) {

    timers[i] = buttons[i].className

    buttons[i].addEventListener('click', function(e) {
      console.log(e.target.className);
      console.log(Date.now() / 1000);
    })

  }
  console.log(timers);
}
