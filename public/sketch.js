// var s = function (p) {

//   var x = 0

//   p.setup = function() { //Run once
//     p.createCanvas(window.innerWidth, window.innerHeight);
//     p.line(12, 25, 70, 90)
//   }

//   p.draw = function() { //Run in a loop
//     if (p.mouseIsPressed) {
//       p.fill(0);
//     } else {
//       p.fill(255);
//     }
//     p.ellipse(Math.sin(x) * 150 + 200, Math.cos(x) * 150 + 200, 20, 20);
//     x = x + 10
//     // ellipse(mouseX, mouseY, 80, 80);
//   }
// }

// var myp5 = new p5(s);

var songFunction = function (p) {
  
    var song;
    var sliderVol;
    var sliderRate;
    var sliderPan;
    var button;
    var jumpButton;

    p.preload = () => {
      song = p.loadSound("song.mp3");
    }
  
    p.setup = () => { //Run once
      p.createCanvas(400, 400);
      sliderVol = p.createSlider(0, 1, 0.5, 0.01);
      sliderRate = p.createSlider(0.1, 1.5, 1, 0.01);
      sliderPan = p.createSlider(-1, 1, 0, 0.01);
      button = p.createButton("PLAY/PAUSE");
      button.mousePressed(p.togglePlaying);
      jumpButton = p.createButton("jump");
      jumpButton.mousePressed(p.jumpSong);

      song.addCue(3, p.makeCircle);
    }
  
    p.makeCircle = () => {
      song.pause();
    }

    p.jumpSong = () => {
      var len = song.duration();
      song.jump(len / 2);
    }

    p.togglePlaying = () => {
      !song.isPlaying()
      ? song.play()
      : song.stop()
    }

    p.draw = () =>  { //Run in a loop
      let colorAlg = song.currentTime()*4 * 255 / song.duration();
      p.background(colorAlg, colorAlg, 0);
      song.setVolume(sliderVol.value());
      song.pan(sliderPan.value());
      song.rate(sliderRate.value());
    }
  }
  
  var myp5 = new p5(songFunction);
