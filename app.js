window.onload = function(){

  var wrap = document.querySelector(".wrap")
  var wordContainer = document.getElementById('word-container')
  var colors = []

  // functions
  var getColors = function(){

    $.ajax({
      url: "http://randomword.setgetgo.com/get.php"
    }).done(function(response){
      console.log(response);
      var randWord = response;
      console.log("randword is", randWord);

      $.ajax({
        url: "http://www.colourlovers.com/api/colors?format=json&jsonCallback=callback&numResults=100",
        dataType: 'JSONP',
        jsonpCallback: 'callback',
      }).done(function(data){
        console.log(data);
        console.log("randword is", randWord);

        for (var i=0; i < randWord.length; i++) {

          var randIndex = Math.floor(Math.random() * 100 + 1)
          var word = document.createElement('div')

          word.className = "letter"
          word.style.backgroundColor = "#" + data[randIndex]["hex"]
          word.innerText = randWord[i]
          wordContainer.appendChild(word)

        }
        if (randIndex == 100) {
          wrap.style.backgroundColor = "#" + data[randIndex - 1]["hex"]
        } else {
          wrap.style.backgroundColor = "#" + data[randIndex + 1]["hex"]
        }

      })
    });

  }
  getColors();

}





// var randWord = document.createElement('div')
// randWord.innerText = response
// firstDiv.style.backgroundColor = "#" + color;
// wrap.appendChild(firstDiv);
// firstDiv.appendChild(randWord);
