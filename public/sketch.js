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

var song = function (p) {
  
    var songmp3;
    var sliderVol;
    var sliderRate;
    var sliderPan;
    var button;

    p.preload = () => {
      songmp3 = p.loadSound("song.mp3");
    }
  
    p.setup = () => { //Run once
      p.createCanvas(400, 400);
      sliderVol = p.createSlider(0, 1, 0.5, 0.01);
      sliderRate = p.createSlider(0.1, 1.5, 1, 0.01);
      sliderPan = p.createSlider(-1, 1, 0, 0.01);
      button = p.createButton("PLAY/PAUSE");
      button.mousePressed(p.togglePlaying);
    }
  
    p.togglePlaying = () => {
      !songmp3.isPlaying()
      ? songmp3.play()
      : songmp3.stop()
    }

    p.draw = () =>  { //Run in a loop
      p.background(255 - sliderVol.value() * 255 );
      songmp3.setVolume(sliderVol.value());
      songmp3.pan(sliderPan.value());
      songmp3.rate(sliderRate.value());
    }
  }
  
  var myp5 = new p5(song);
