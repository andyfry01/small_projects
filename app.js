window.onload = function() {
  console.log("app.js loaded");
  var buttons = document.getElementsByTagName('button')
  console.log(buttons);


  for (var i = 0; i < buttons.length; i += 1) {
    // console.log(buttons[button])
    buttons[i].addEventListener('click', function(e) {
      console.log(e);
    })

  }
}
