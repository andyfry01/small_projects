var cleverbot = require('cleverbot.io')
var API = require("./API")

var sammy = new cleverbot("rwDHjh2iWgvWVUph", API.KEY)
sammy.setNick("sammy")

sammy.create(function(err, session) {
  if (err) {
    console.log(err);
  }
})


var newQuestion = ""

sammy.ask("hey, are you working right now?", function(err, response){
  if (err) {
    console.log(err);
  } else {
    console.log("Sammy says:", response);
    newQuestion = response
  }
})

var susie = new cleverbot("rwDHjh2iWgvWVUph", API.KEY)
susie.setNick("susie")

susie.create(function(err, session){
  if (err) {
    console.log(err);
  }
})
susie.ask(newQuestion, function(err, response) {
  if (err) {
    console.log(err);
  } else {
    newQuestion = response
    console.log("Susie says:", response);
  }
})
