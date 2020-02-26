    var audio = document.getElementById("audio");
      var isPlaying = false;

      function change() {
        var element = document.getElementById("img");
        element.classList.toggle("change");
      }
      function aplay() {
        if (isPlaying) {
          audio.pause();
          isPlaying = false;
        } else {
          audio.play();
          isPlaying = true;
        }
      }

      
    
