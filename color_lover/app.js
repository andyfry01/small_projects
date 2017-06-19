window.onload = function(){

  var wrap = document.querySelector(".wrap")
  var wordContainer = document.getElementById('word-container')
  var colors = []

  // functions

  // grabs some random colors from the colour lovers API and generates word bubbles based on those.
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
  // getColors();


  // generates random RGB colors client side and in turn generates random word bubbles
  var genColors = function(){
    var colorArr = [];

    $.ajax({
      method: 'GET',
      url: "http://randomword.setgetgo.com/get.php",
    }).done(function(data){

      console.log("rand word is", data);

      var dataLen = data.length * 3
      for (var i = 0; i < dataLen; i++) {

        var randRGB = Math.floor(Math.random() * 255 + 1)
        colorArr.push(randRGB);

        if (colorArr.length == 3) {
          console.log(colorArr);

          var word = document.createElement('div')
          word.className = "letter"
          var index = Math.ceil((i / 3) - 1)
          if (index == - 0) {
            index = 0
          }
          console.log("letter index", index);
          word.innerText = data[index]
          word.style.backgroundColor = "rgb(" + colorArr[0] + "," + colorArr[1] + "," + colorArr[2] + ")"
          wordContainer.appendChild(word)
          colorArr = []

        }

      }


    })
  }
  genColors();
}





// var randWord = document.createElement('div')
// randWord.innerText = response
// firstDiv.style.backgroundColor = "#" + color;
// wrap.appendChild(firstDiv);
// firstDiv.appendChild(randWord);
