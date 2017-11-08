//----------------EXAMPLE FUNCTION-----------------
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


//----------------SONG FUNCTION-----------------
// var songFunction = function (p) {

//   var song;
//   var sliderVol;
//   var sliderRate;
//   var sliderPan;
//   var button;
//   var jumpButton;
//   var amp;
//   var width;
//   var height;
//   var x = 0;

//   p.setup = () => { //Run once
//     width = window.innerWidth;
//     height = window.innerWidth;
//     p.createCanvas(width, height);
//     song = p.loadSound("song.mp3", p.loaded());
//     amp = new p5.Amplitude();
//     console.log(amp);
//   }

//   p.jumpSong = () => {
//     var len = song.duration();
//     song.jump(len / 2);
//   }

//   p.togglePlaying = () => {
//     !song.isPlaying()
//       ? song.play()
//       : song.stop()
//   }

//   p.loaded = () => {
//     sliderVol = p.createSlider(0, 1, 0.5, 0.01);
//     sliderRate = p.createSlider(0.1, 1.5, 1, 0.01);
//     sliderPan = p.createSlider(-1, 1, 0, 0.01);
//     button = p.createButton("PLAY/PAUSE");
//     button.mousePressed(p.togglePlaying);
//     jumpButton = p.createButton("jump");
//     jumpButton.mousePressed(p.jumpSong);
//   }

//   p.draw = () => { //Run in a loop
//     let colorAlg = song.currentTime() * 4 * 255 / song.duration();
//     p.background(colorAlg, colorAlg, 0);

//     let vol = amp.getLevel();
//     p.color(255)
//     p.stroke(255);
//     p.ellipse(width/2, height/2, vol * width, vol * height);
//     p.color(240)
//     p.ellipse(width/2 + Math.sin(x/Math.PI*.02) * 150, height/2 + Math.cos(x/Math.PI*.02) * 150, vol * width / 2, vol * height / 2);
//     song.setVolume(sliderVol.value());
//     song.pan(sliderPan.value());
//     song.rate(sliderRate.value());

//     x++;
//   }
// }

// var myp5 = new p5(songFunction);

//----------------VISUALIZATION FUNCTION-----------------

var audioFunc = (proc) => {
  var mic;

  proc.setup = () => {
    proc.createCanvas(window.innerWidth, window.innerHeight)
    mic = new p5.AudioIn();
    mic.start();

  }

  proc.draw = () => {
    proc.background(0);
    var vol = mic.getLevel();
    proc.ellipse(window.innerWidth/2, window.innerHeight/2, window.innerWidth, vol * 200);
  }
}

var myp5 = new p5(audioFunc);