// // ----------------EXAMPLE FUNCTION-----------------
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
//     song = p.loadSound('Paradise.mp3', p.loaded());
//     // song = p.loadSound('song.mp3', p.loaded());
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
//     let spinySpin = x / Math.PI * 0.02;
//     let sunX = width / 2;
//     let sunY = height / 2;
//     p.background(colorAlg, colorAlg, 0);

//     let vol = amp.getLevel();
//     for (var i = 0; i < 12; i++) {
//       var orbitX = width / 2 + Math.sin(spinySpin + i+1 * p.random(1)) * 350;
//       var orbitY = height / 2 + Math.cos(spinySpin + i * p.random(1)) * 350;
//       // var orbitX = width / 2 + Math.sin(spinySpin + i+1) * 350;
//       // var orbitY = height / 2 + Math.cos(spinySpin + i+1) * 350;
//       p.stroke(0);
//       p.line(sunX, sunY, orbitX, orbitY);
//       p.stroke(255);
//       p.fill(10 * p.random(i));
//       p.ellipse(orbitX, orbitY, vol * width / 12, vol * height / 12);

//     }
//     p.fill(255);
//     p.ellipse(sunX, sunY, 20 + vol * width / 4, 20 + vol * height / 4);
//     song.setVolume(sliderVol.value());
//     song.pan(sliderPan.value());
//     song.rate(sliderRate.value());

//     x++;
//   }
// }

// var myp5 = new p5(songFunction);

//----------------MIC FUNCTION-----------------

// var audioFunc = (proc) => {
//   var mic;

//   proc.setup = () => {
//     proc.createCanvas(window.innerWidth, window.innerHeight)
//     mic = new p5.AudioIn();
//     mic.start();

//   }

//   proc.draw = () => {
//     proc.background(0);
//     var vol = mic.getLevel();
//     proc.ellipse(window.innerWidth/2, window.innerHeight/2, window.innerWidth, vol * 200);
//   }
// }

// var myp5 = new p5(audioFunc);

//----------------LERP FUNCTION-----------------

// var lerpFunc = (proc) => {
//   var mic;
//   var x = 0;
//   var y = 0;
//   var targetX = 300;
//   var targetY = 300

//   proc.setup = () => {
//     proc.createCanvas(600, 400)

//   }

//   proc.mousePressed = () => {
//     targetX = proc.mouseX;
//     targetY = proc.mouseY;
//   }

//   proc.mouseDragged = () => {
//     targetX = proc.mouseX;
//     targetY = proc.mouseY;
//   }


//   proc.draw = () => {

//     x = proc.lerp(x, targetX, proc.random(.1));
//     y = proc.lerp(y, targetY, proc.random(.1));

//   proc.background(51);
//   //   var vol = mic.getLevel();
//   //   proc.ellipse(window.innerWidth/2, window.innerHeight/2, window.innerWidth, vol * 200);
//   proc.fill(255, 0, 100, 150);
//   proc.ellipse(targetX, targetY, 64, 64);

//   proc.fill(100, 0, 200, 150);
//   proc.ellipse(x, y, 64, 64);

//   }
// }

// var myp5 = new p5(lerpFunc);

//----------------VISUALIZATION FUNCTION-----------------

// var audioFunc = (proc) => {
//   var song;
//   var button;
//   let amp;
//   var width, height;
//   var volHistory = [];

//   proc.preload = () => {
//     song = proc.loadSound('Paradise.mp3');
//   }

//   proc.setup = () => {
//     width = window.innerWidth;
//     height = window.innerHeight - 100;
//     proc.createCanvas(width, height);
//     button = proc.createButton('toggle');
//     button.mousePressed(proc.toggleSong);
//     song.play();
//     amp = new p5.Amplitude();
//   }

//   proc.toggleSong = () => {
//     song.isPlaying()
//       ? song.pause()
//       : song.play()

//   }
//   proc.draw = () => {
//     song.setVolume(0.2);
//     proc.background(0);
//     var vol = amp.getLevel() * 3;
//     volHistory.push(vol);
//     proc.translate(0, -height/2 + current);
//     proc.stroke(255);
//     proc.noFill();
//     proc.beginShape();
//     for (var i = 0; i < volHistory.length - 50; i++) {
//       var y = proc.map(volHistory[i], 0, 1, height, 0);
//       proc.vertex(i, y);
//     }
//     proc.endShape();
//     // proc.ellipse(window.innerWidth / 2, (window.innerHeight / 2), window.innerWidth, vol * 200);

//     if (volHistory.length > width) {
//       volHistory.splice(0, 1);
//     }

//     proc.stroke(255, 0, 0);
//     proc.line(volHistory.length -50, 0, volHistory.length -50, height);
//   }

// }

// var myp5 = new p5(audioFunc);

//----------------VISUALIZATION FUNCTION 2-----------------

// var audioFunc = (proc) => {
//   var song;
//   var button;
//   let amp;
//   var width, height;
//   var volHistory = [];

//   proc.preload = () => {
//     song = proc.loadSound('Paradise.mp3');
//   }

//   proc.setup = () => {
//     width = window.innerWidth;
//     height = window.innerHeight - 100;
//     proc.createCanvas(width, height);
//     button = proc.createButton('toggle');
//     button.mousePressed(proc.toggleSong);
//     song.play();
//     amp = new p5.Amplitude();
//   }

//   proc.toggleSong = () => {
//     song.isPlaying()
//       ? song.pause()
//       : song.play()

//   }
//   proc.draw = () => {
//     song.setVolume(0.2);
//     proc.angleMode(proc.DEGREES);
//     proc.background(0);
//     var vol = amp.getLevel() * 3;
//     volHistory.push(vol);
//     proc.stroke(255);
//     proc.noFill();

//     proc.translate(width/2, height/2);
//     proc.beginShape();
//     for (var i = 0; i < 360; i++) {
//       var r = proc.map(volHistory[i], 0, 1, 10, 100);
//       var x = r * proc.cos(i);
//       var y = r * proc.sin(i);
//       proc.vertex(x, y);
//     }
//     proc.endShape();
//     // proc.ellipse(window.innerWidth / 2, (window.innerHeight / 2), window.innerWidth, vol * 200);

//     if (volHistory.length > 360) {
//       volHistory.splice(0, 1);
//     }

//   }

// }

// var myp5 = new p5(audioFunc);

//----------------FREQUENCY FUNCTION-----------------

var audioFunc = (proc) => {
  var song;
  var button;
  let fft;
  var width, height;
  var volHistory = [];
  var w;

  proc.preload = () => {
    // song = proc.loadSound('song.mp3');
    song = proc.loadSound('Paradise.mp3');
    // song = proc.loadSound('Gooey.mp3');
  }

  proc.setup = () => {
    width = window.innerWidth;
    height = window.innerHeight - 100;
    proc.createCanvas(width, height);
    button = proc.createButton('toggle');
    button.mousePressed(proc.toggleSong);
    song.play();
    // song.jump(proc.random(song.duration()))
    fft = new p5.FFT(0.9, 64);
    w = width / 64;
    proc.colorMode(proc.HSB);
  }

  proc.toggleSong = () => {
    song.isPlaying()
      ? song.pause()
      : song.play()

  }
  proc.draw = () => {
    song.setVolume(0.2);
    proc.angleMode(proc.DEGREES);
    proc.background(0);
    var spectrum = fft.analyze();
    console.log(spectrum);
    // volHistory.push(vol);
    beginShape();
    for (var i = 0; i < spectrum.length; i++) {
      var angle = proc.map(i, 0, spectrum.length, 0, 360);
      var amp = spectrum[i];
      var r = map(amp, 0, 256, 40, 200);
      var x = r * cos(angle);
      var y = r * sin(angle);
      proc.fill(i, 255, 255);
      proc.noStroke();
      proc.vertex(x, y)
      // var y = proc.map(amp, 0, 255, height, 0);
      // proc.rect(i * w, y, w - 2, height - y);
    }
    endShape();
    proc.stroke(255);
    proc.noFill();

    proc.translate(width/2, height/2);
    // proc.beginShape();
    // for (var i = 0; i < 360; i++) {
    //   var r = proc.map(volHistory[i], 0, 1, 10, 100);
    //   var x = r * proc.cos(i);
    //   var y = r * proc.sin(i);
    //   proc.vertex(x, y);
    // }
    // proc.endShape();
    // proc.ellipse(window.innerWidth / 2, (window.innerHeight / 2), window.innerWidth, vol * 200);

    if (volHistory.length > 360) {
      volHistory.splice(0, 1);
    }

  }

}

var myp5 = new p5(audioFunc);
