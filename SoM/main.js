function onYouTubeIframeAPIReady(obj) {
    for (i in config) {
        //if (i.hasOwnProperty(keystroke) {
        const obj = config[i]
        console.log(obj);
        $('#players').append('<div class="' + obj.loopInfo.keystroke + '"><div id="' + obj.loopInfo.keystroke + '"></div><div class="keystroke">'+obj.loopInfo.keystroke+'</div></div>')

        obj.player = new YT.Player(obj.loopInfo.keystroke, {
            width: 200,
            height: 100,
            videoId: obj.video.videoId
        });


        Mousetrap.bind(obj.loopInfo.keystroke, function() {

            if (obj.loopInfo.loop === true) {
                if (!obj.live.isLooping) {
                    queueLoop(obj);
                } else {
                    stopLoop(obj);
                }
            } else {
                queueHit(obj);
            }

        });
    }
}


function queueLoop(obj) {
    obj.live.isLooping = true;
    config[obj.loopInfo.keystroke].player.seekTo(obj.loopInfo.seekTime)
    config[obj.loopInfo.keystroke].player.playVideo();

    obj.live.interval = setInterval(function() {
        console.log(obj.loopInfo.keystroke)
        config[obj.loopInfo.keystroke].player.seekTo(obj.loopInfo.seekTime)
    }, obj.loopInfo.interval)
}

function stopLoop(obj) {
    clearInterval(obj.live.interval)
    config[obj.loopInfo.keystroke].player.pauseVideo();
    obj.live.isLooping = false
}

function queueHit(obj) {
    config[obj.loopInfo.keystroke].player.playVideo();
    obj.live.timeout = setTimeout(function() {
        config[obj.loopInfo.keystroke].player.pauseVideo();
        config[obj.loopInfo.keystroke].player.seekTo(obj.loopInfo.seekTime)
    }, obj.loopInfo.interval)
}



/// HERE BE FUNCTIONS


// Fxn for preloading videos at their start times for buffering

// setTimeout(function() {
//   for(i in config){
//     var obj = config[i];
//     console.log("in the set timeout",obj.loopInfo.keystroke);
//     obj.player.pauseVideo();
//     obj.player.seekTo(obj.loopInfo.seekTime);
//   }
// }, 2000)



//config['keystroke'].player.pauseVideo()
//config['keystroke'].player.playVideo()
//config['keystroke'].player.seekTo()

/*function loopParameters() {
  seektime
  interval
  loop: //boolean


}*/

/*

mousetrap handles keystroke event
matched to the appropriate object (keypress "T" matches a video object)
video is seeked to seektime, paused, and played
if loop is true, interval function reseeks and replays (until key is pressed again)
if not, timeout function stops play after interval time.


var config = {
  keystroke: {
    video: {
      width: 400,
      height: 300,
      videoId: 'lkwjere'
    },
    live: {
      interval: function() {},
      timeout: function() {},
      isLooping: boolean,

    },
    loopInfo: {
      seekTime: seconds,
      interval: seconds,
      loop: boolean,
      keystroke: keystroke
    }
  },

  keystroke_2: {
  ...
  }

}




*/
