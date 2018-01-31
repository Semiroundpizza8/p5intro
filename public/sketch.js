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

//----------------RE/SONG FUNCTION-----------------

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
//     song = p.loadSound('Gooey.mp3', p.loaded());
//     // song = p.loadSound('Paradise.mp3', p.loaded());
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
//     // p.background(colorAlg, colorAlg, 0);

//     let vol = amp.getLevel();
//     for (var i = 0; i < 12; i++) {
//       var orbitX = width / 2 + Math.sin(spinySpin + i+1 * p.random(1)) * 350;
//       var orbitY = height / 2 + Math.cos(spinySpin + i * p.random(1)) * 350;
//       // var orbitX = width / 2 + Math.sin(spinySpin + i+1) * 350;
//       // var orbitY = height / 2 + Math.cos(spinySpin + i+1) * 350;
//       p.stroke(20);
//       p.line(sunX, sunY, orbitX, orbitY);
//       p.stroke(255);
//       p.fill(10 * p.random(i));
//       p.ellipse(orbitX, orbitY, (vol/2) * width / 16, (vol/2) * height / 16);

//     }
//     p.fill(255);
//     p.ellipse(sunX, sunY, 20 + vol * 3 * width / 4, 20 + vol * 3 * height / 4);
//     song.setVolume(sliderVol.value());
//     song.pan(sliderPan.value());
//     song.rate(sliderRate.value());

//     x++;
//   }
// }

// var myp5 = new p5(songFunction);

var songFunction = function (p) {

  var song;
  var sliderVol;
  var sliderRate;
  var sliderPan;
  var button;
  var jumpButton;
  var amp;
  var width;
  var height;
  var x = 0;

  p.setup = () => { //Run once
    width = window.innerWidth;
    height = window.innerWidth;
    p.createCanvas(width, height);
    // song = p.loadSound('Gooey.mp3', p.loaded());
    // song = p.loadSound('Paradise.mp3', p.loaded());
    p.colorMode(p.HSB, 255);
    // song = p.loadSound('song.mp3', p.loaded());
    song = p.loadSound('Flori.mp3', p.loaded());
    amp = new p5.Amplitude();
    console.log(amp);
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

  p.loaded = () => {
    sliderVol = p.createSlider(0, 1, 0.5, 0.01);
    sliderRate = p.createSlider(0.1, 1.5, 1, 0.01);
    sliderPan = p.createSlider(-1, 1, 0, 0.01);
    button = p.createButton("PLAY/PAUSE");
    button.mousePressed(p.togglePlaying);
    jumpButton = p.createButton("jump");
    jumpButton.mousePressed(p.jumpSong);
  }

  p.draw = () => { //Run in a loop
    let colorAlg = song.currentTime() * 4 * 255 / song.duration();
    let spinySpin = x / Math.PI * 0.02;
    let sunX = width / 2;
    let sunY = height / 2;
    // p.background(colorAlg, colorAlg, 0);

    let vol = amp.getLevel();
    for (var i = 0; i < 12; i++) {
      var orbitX = width / 2 + Math.sin(spinySpin + i+1 * p.random(1)) * 350;
      var orbitY = height / 2 + Math.cos(spinySpin + i * p.random(1)) * 350;
      // var orbitX = width / 2 + Math.sin(spinySpin + i+1) * 350;
      // var orbitY = height / 2 + Math.cos(spinySpin + i+1) * 350;
      p.stroke(255);
      p.line(sunX, sunY, orbitX, orbitY);
      p.stroke(255);
      // p.fill(50, 10 + vol, 100);
      p.fill("#E5A173");
      // p.ellipse(orbitX, orbitY, (vol/2) * width / 16, (vol/2) * height / 16);

    }
    // p.fill('#FFEFBF');
    console.log(vol)
    p.fill((vol*500)%255, 240, 240 );
    // p.fill(150 - vol*750, 230 - vol*500, 250 - vol*1000);
    p.ellipse(sunX, sunY, 20 + vol * 3 * width, 20 + vol * 3 * height);
    song.setVolume(sliderVol.value());
    song.pan(sliderPan.value());
    song.rate(sliderRate.value());

    x++;
  }
}

var myp5 = new p5(songFunction);


//----------------RE//SONG FUNCTION-----------------

// var songFunction = function (p) {

//     var song;
//     var sliderVol;
//     var sliderRate;
//     var sliderPan;
//     var button;
//     var jumpButton;
//     var amp;
//     var width;
//     var height;
//     var x = 0;

//     p.setup = () => { //Run once
//       width = p.windowWidth;
//       height = p.windowHeight;
//       p.createCanvas(width, height);
//       // song = p.loadSound('Feel.mp3', p.loaded());
//       song = p.loadSound('Gooey.mp3', p.loaded());
//       // song = p.loadSound('Paradise.mp3', p.loaded());
//       // song = p.loadSound('song.mp3', p.loaded());
//       amp = new p5.Amplitude();
//       console.log(amp);
//     }

//     p.jumpSong = () => {
//       var len = song.duration();
//       song.jump(len / 2);
//     }

//     p.togglePlaying = () => {
//       !song.isPlaying()
//         ? song.play()
//         : song.stop()
//     }

//     p.loaded = () => {
//       sliderVol = p.createSlider(0, 1, 0.5, 0.01);
//       sliderRate = p.createSlider(0.1, 1.5, 1, 0.01);
//       sliderPan = p.createSlider(-1, 1, 0, 0.01);
//       button = p.createButton("PLAY/PAUSE");
//       button.mousePressed(p.togglePlaying);
//       jumpButton = p.createButton("jump");
//       jumpButton.mousePressed(p.jumpSong);
//     }

//     p.draw = () => { //Run in a loop
//       let colorAlg = song.currentTime() * 4 * 255 / song.duration();
//       let spinySpin = x / Math.PI * 0.02;
//       let sunX = width / 2;
//       let sunY = height / 2;
//       // p.background(colorAlg, colorAlg, 0);

//       let vol = amp.getLevel();
//       for (var i = 0; i < 8; i++) {
//         var orbitX = width / 2 + Math.sin(spinySpin + i+1 * p.random(1)) * 350;
//         var orbitY = height / 2 + Math.cos(spinySpin + i * p.random(1)) * 350;
//         // var orbitX = width / 2 + Math.sin(spinySpin + i+1) * 350;
//         // var orbitY = height / 2 + Math.cos(spinySpin + i+1) * 350;
//         p.stroke(0);
//         p.line(sunX, sunY, orbitX, orbitY);
//         p.stroke(255);
//         p.fill(10 * p.random(i));
//         p.ellipse(orbitX, orbitY, vol * width / 12, vol * width / 12);

//       }
//       p.fill(255);
//       p.ellipse(sunX, sunY, 10 + vol * 6 * width / 4, 10 + vol * 6 * width / 4);
//       // p.translate(p.width/2, p.height/2);
//       // p.rotate(x);
//       song.setVolume(sliderVol.value());
//       song.pan(sliderPan.value());
//       song.rate(sliderRate.value());

//       x++;
//     }
//   }

//   var myp5 = new p5(songFunction);

//----------------NOISE FUNCTION----------------- ***********************************************

// var s = function (p) {

//   var xOff = 0;
//   var xOff2 = 1000;
//   var triangleArr = [];


//   p.setup = function () { //Run once
//     p.createCanvas(p.windowWidth, p.windowHeight);
//     for (var i = 0; i < 10; i++) {
//       console.log(triangleArr);
//       triangleArr.push(new Triangle(p.windowWidth / 2 - 40 * i, p.windowHeight / 2 + 40 * i));
//       if (i !== 0) {
//         triangleArr.push(new Triangle(p.windowWidth / 2 + 40 * i, p.windowHeight / 2 + 40 * i));
//       }
//     }
//   }

//   p.draw = function () { //Run in a loop
//     p.background(51);
//     p.stroke(255, 255, 0);
//     p.noFill();
//     triangleArr[0].display();
//     triangleArr.forEach(triangle => triangle.display());
//     p.beginShape();

//     // for (var x = 0; x < p.width; x++) {
//     //   p.stroke(255);
//     //   p.vertex(x, p.random(p.height));
//     // }
//     p.endShape();
//   }

//   function Triangle(topx, topy, size) {

//     this.size = size;
//     this.top = [topx, topy];
//     this.left = [topx + 40, topy + 40];
//     this.right = [topx - 40, topy + 40];

//     this.display = function () {
//       p.beginShape();
//       p.vertex(this.top[0], this.top[1]);
//       p.vertex(this.left[0], this.left[1]);
//       p.vertex(this.right[0], this.right[1]);
//       p.vertex(this.top[0], this.top[1]);
//       p.endShape();
//     }

//   }
// }

// var myp5 = new p5(s);


//----------------MOVEMENT FUNCTION-----------------

// var s = function (p) {
//   let angle = 0;

//   p.setup = function() { //Run once
//     p.createCanvas(p.windowWidth, p.windowHeight);
//     p.angleMode(p.DEGREES);
//   }

//   p.draw = function() { //Run in a loop
//     // p.background(0);
//     p.fill(255);
//     p.translate(p.mouseX, p.mouseY);

//     p.rotate(angle)
//     p.rect(0, 0, 100, 50);
//     p.rect(100, 100, 50, 10);

//     angle = angle + 22;
//   }
// }

// var myp5 = new p5(s);


//----------------REFERENCE-----------------

// var ds;
// function setup() {
//   createCanvas(640, 360);
//   ds = new PenroseLSystem();
//   ds.simulate(4);
// }

// function draw() {
//   background(0);
//   ds.render();
// }

// //*
// function PenroseLSystem(){

//   this.steps = 0;
//   this.somestep = 0.1;
//   this.ruleW = "YF++ZF4-XF[-YF4-WF]++";
//   this.ruleX = "+YF--ZF[3-WF--XF]+";
//   this.ruleY = "-WF++XF[+++YF++ZF]-";
//   this.ruleZ = "--YF++++WF[+ZF++++XF]--XF";

//   this.axiom = "[X]++[X]++[X]++[X]++[X]";
//   this.rule = "F+F-F";
//   this.production = "";

//   this.startLength = 460.0;
//   this.theta = radians(36);  

//   this.generations = 0;


//   this.reset = function() {
//     this.production = this.axiom;
//     this.drawLength = this.startLength;
//     this.generations = 0;
//   }

//   this.reset();

//   this.getAge = function() {
//     return this.generations;
//   }

//   this.iterate = function(prod_,rule_) {
//     var newProduction = "";
//     for (var i = 0; i < prod_.length; i++) {
//       var step = this.production.charAt(i);
//       if (step == 'W') {
//         newProduction = newProduction + this.ruleW;
//       } 
//       else if (step == 'X') {
//         newProduction = newProduction + this.ruleX;
//       }
//       else if (step == 'Y') {
//         newProduction = newProduction + this.ruleY;
//       }  
//       else if (step == 'Z') {
//         newProduction = newProduction + this.ruleZ;
//       } 
//       else {
//         if (step != 'F') {
//           newProduction = newProduction + step;
//         }
//       }
//     }

//     this.drawLength = this.drawLength * 0.5;
//     this.generations++;
//     return newProduction;
//   }

//   this.simulate = function(gen) {
//     while (this.getAge() < gen) {
//       this.production = this.iterate(this.production, this.rule);
//     }
//   }

//   this.render = function() {
//     translate(width/2, height/2);
//     var pushes = 0;
//     var repeats = 1;
//     this.steps += 12;          
//     if (this.steps > this.production.length) {
//       this.steps = this.production.length;
//     }

//     for (var i = 0; i < this.steps; i++) {
//       var step = this.production.charAt(i);//TODO you were here
//       var stepCode = this.production.charCodeAt(i);
//       if (step == 'F') {
//         stroke(255, 60);
//         for (var j = 0; j < repeats; j++) {
//           line(0, 0, 0, -this.drawLength);
//           noFill();
//           translate(0, -this.drawLength);
//         }
//         repeats = 1;
//       } 
//       else if (step == '+') {
//         for (var j = 0; j < repeats; j++) {
//           rotate(this.theta);
//         }
//         repeats = 1;
//       } 
//       else if (step == '-') {
//         for (var j =0; j < repeats; j++) {
//           rotate(-this.theta);
//         }
//         repeats = 1;
//       } 
//       else if (step == '[') {
//         pushes++;            
//         //pushMatrix();
//         push();
//       } 
//       else if (step == ']') {
//         //popMatrix();
//         pop();
//         pushes--;
//       } 
//       else if ( (stepCode >= 48) && (stepCode <= 57) ) {
//         repeats = stepCode - 48;
//       }
//     }

//     // Unpush if we need too
//     while (pushes > 0) {
//       // popMatrix();
//       pop();
//       pushes--;
//     }
//   }


// }


//----------------MIC FUNCTION-----------------

// var audioFunc = (proc) => {
//   var song;
//   var amp;
//   proc.preload = () => {
//     song = proc.loadSound('Gooey.mp3');
//   }

//   proc.setup = () => {
//     proc.createCanvas(window.innerWidth, window.innerHeight);
//     amp = new p5.Amplitude();
//     song.play();
//   }

//   proc.draw = () => {
//     var vol = amp.getLevel();
//     // proc.ellipse(proc.width / 2, proc.height / 2, proc.width, vol * 200);
//     Ball(100, 100, 10, 10, 400);
//     for (var i = 0; i < Math.floor(vol * 70); i++) {
//       proc.ellipse(100 + i * 100, 500, vol * 200, vol * 200);
//     }
//   }
// }

// var myp5 = new p5(audioFunc);


// let bubble1;
// let bubble2;

// function setup() {
//   createCanvas(600, 400);
//   bubble1 = new Bubble(200, 200, 40);
//   bubble2 = new Bubble(400, 200, 20);
// }

// function draw() {
//   background(0);
//   bubble1.move();
//   bubble1.show();
//   bubble2.move();
//   bubble2.show();
// }

// class Bubble {
//   constructor(x, y, r) {
//     this.x = x;
//     this.y = y;
//     this.r = r;
//   }

//   move() {
//     this.x = this.x + random(-5, 5);
//     this.y = this.y + random(-5, 5);
//   }

//   show() {
//     stroke(255);
//     strokeWeight(4);
//     noFill();
//     ellipse(this.x, this.y, this.r * 2);
//   }
// }

// ----------------SOUND CIRCLES FUNCTION-----------------
// var s = function (p) {

//   var width = window.innerWidth;
//   var height = window.innerHeight;
//   var circleArr = [];

//   p.setup = function () { //Run once
//     p.createCanvas(width, height);
//     p.line(0, height / 2, width, height / 2);
//   }

//   p.draw = function () { //Run in a loop
//     if (p.mouseIsPressed) {
//       p.fill(0);
//     } else {
//       p.fill(255);
//     }
//     for (var i = 0; i < 10; i++) {
//       circleArr.push(new Circle(width / 2, height / 2, 40, Math.random(-1, 1), Math.random(-1, 1))
//     }
//     circleArr.forEach(circle => circle.update());
//   }


//   function Circle(x, y, radius, dx, dy) {

//     this.radius = radius;
//     this.x = x;
//     this.y = y;
//     this.dx = dx;
//     this.dy = dy;
//     this.update = function () {
//       this.x += this.dx;
//       this.y += this.dy;
//       this.display();
//     }

//     this.display = function () {
//       p.ellipse(this.x, this.y, this.radius, this.radius);
//     }
//   }
// }

// var myp5 = new p5(s);

// ----------------AGENT PAINT 1 FUNCTION-----------------
// var s = function (p) {

//   var width = window.innerWidth;
//   var height = window.innerHeight;
//   var Jims = [];

//   p.setup = function () { //Run once
//     p.createCanvas(width, height);
//     for (var i = 0; i < 1; i++) {
//       Jims.push(new Polly(p.random(width), p.random(height)))
//     }
//   }

//   p.draw = function () { //Run in a loop
//     // p.background(255);

//     let mouse = p.createVector(p.mouseX, p.mouseY);

//     p.fill(200);
//     p.stroke(p.random(50) + 150, p.random(50) + 150, p.random(50) + 150, 80);
//     p.strokeWeight(2);
//     // p.ellipse(mouse.x, mouse.y, 48, 48);
//     Jims.forEach(Jim => {
//       if (p.mouseIsPressed) {
//         p.line(Jim.location.x, Jim.location.y, p.mouseX, p.mouseY);
//       }
//       Jim.seek(mouse);
//       Jim.update();
//       Jim.display();
//     })
//   }


//   function Polly(x, y) {
//     this.acceleration = p.createVector(0, 0);
//     this.velocity = p.createVector(0, -2);
//     this.location = p.createVector(x, y);
//     this.r = 6;
//     this.maxSpeed = 4;
//     this.maxForce = 0.1;

//     this.update = function () {
//       // Manipulate Velocity
//       this.velocity.add(this.acceleration);
//       this.velocity.limit(this.maxSpeed);
//       // Update location using new velocity
//       this.location.add(this.velocity);
//       // Resets to 0 after update ends
//       this.acceleration.mult(0);
//     }

//     this.applyForce = function (force) {
//       // Adds force to the object
//       this.acceleration.add(force);
//     }

//     this.seek = function (target) {
//       // Idk wtf this is or if it works but we gon' find out
//       let desired = p5.Vector.sub(target, this.location);

//       // Normalizes it to max speed
//       desired.normalize();
//       desired.mult(this.maxSpeed);

//       var steer = p5.Vector.sub(desired, this.velocity);
//       steer.limit(this.maxforce);

//       this.applyForce(steer);
//     }

//     this.display = function () {
//       var feta = this.velocity.heading() + p.PI / 2;
//       p.fill(255, 200, 100);
//       p.stroke(0);
//       p.strokeWeight(1);
//       p.push();
//       p.translate(this.location.x, this.location.y);
//       p.rotate(feta);
//       // p.beginShape();
//       // p.vertex(0, -this.r * 2);
//       // p.vertex(-this.r, this.r * 2);
//       // p.vertex(this.r, this.r * 2);
//       // p.endShape(p.CLOSE);
//       p.pop();

//     }
//   }
// }

// var myp5 = new p5(s);

// ----------------STEERING FUNCTION-----------------
// var s = function (p) {

//   var colors = [
//     "#7B2A3B",
//     "#E57661",
//     "#F8C58C",
//     "#F8E7A2",
//     "#86DDB2"
//   ]
//   var width = window.innerWidth;
//   var height = window.innerHeight;
//   var Jims = [];

//   p.setup = function () { //Run once
//     p.createCanvas(width, height);
//     for (var i = 0; i < 2; i++) {
//       Jims.push(new Polly(p.random(width), p.random(height)))
//     }
//   }

//   p.draw = function () { //Run in a loop
//     // p.background(255);

//     let mouse = p.createVector(p.mouseX, p.mouseY);

//     p.fill(200);
//     p.stroke(p.random(50) + 150, p.random(50) + 150, p.random(50) + 150, 80);
//     p.strokeWeight(2);
//     // p.ellipse(mouse.x, mouse.y, 48, 48);
//     if (!p.mouseIsPressed) {
//       p.line(Jims[0].location.x, Jims[0].location.y, Jims[1].location.x, Jims[1].location.y);
//     }
//     Jims.forEach(Jim => {
//       //   if (p.mouseIsPressed) {
//       //     p.line(Jim.location.x, Jim.location.y, p.mouseX, p.mouseY);
//       //   }
//       if (p.mouseIsPressed) {
//         Jim.location.x = p.random(width);
//         Jim.location.y = p.random(height);
//       }
//       Jim.seek(mouse);
//       Jim.update();
//       Jim.display();
//     })
//   }


//   function Polly(x, y) {
//     this.acceleration = p.createVector(0, 0);
//     this.velocity = p.createVector(0, -2);
//     this.location = p.createVector(x, y);
//     this.r = 6;
//     this.maxSpeed = 4;
//     this.maxForce = 0.1;

//     this.update = function () {
//       // Manipulate Velocity
//       this.velocity.add(this.acceleration);
//       this.velocity.limit(this.maxSpeed);
//       // Update location using new velocity
//       this.location.add(this.velocity);
//       // Resets to 0 after update ends
//       this.acceleration.mult(0);
//     }

//     this.applyForce = function (force) {
//       // Adds force to the object
//       this.acceleration.add(force);
//     }

//     this.seek = function (target) {
//       // Idk wtf this is or if it works but we gon' find out
//       let desired = p5.Vector.sub(target, this.location);

//       // Normalizes it to max speed
//       desired.normalize();
//       desired.mult(this.maxSpeed);

//       var steer = p5.Vector.sub(desired, this.velocity);
//       steer.limit(this.maxforce);

//       this.applyForce(steer);
//     }

//     this.display = function () {
//       // var feta = this.velocity.heading() + p.PI / 2;
//       // p.strokeWeight(1);
//       // p.stroke(0);
//       // p.fill(colors[Math.floor(Math.random() * 5)]);
//       // p.ellipse(this.location.x, this.location.y, 10, 10);
//       // p.push();
//       // p.translate(this.location.x, this.location.y);
//       // p.rotate(feta);

//       // p.beginShape();
//       // p.vertex(0, -this.r * 2);
//       // p.vertex(-this.r, this.r * 2);
//       // p.vertex(this.r, this.r * 2);
//       // p.endShape(p.CLOSE);
//       p.pop();

//     }
//   }
// }

// var myp5 = new p5(s);

// var s = function (p) {

//   var colors = [
//     "#7B2A3B",
//     "#E57661",
//     "#F8C58C",
//     "#F8E7A2",
//     "#86DDB2"
//   ]
//   var width = window.innerWidth;
//   var height = window.innerHeight;
//   var Jims = [];

//   p.setup = function () { //Run once
//     p.createCanvas(width, height);
//     for (var i = 0; i < 1; i++) {
//       Jims.push(new Polly(width / 2, height / 2))
//     }
//   }

//   p.draw = function () { //Run in a loop
//     p.background(255);

//     let mouse = p.createVector(p.mouseX, p.mouseY);
//     // Draw a circle at mouse
//     p.fill(200);
//     p.stroke(0);
//     p.strokeWeight(2);
//     p.ellipse(mouse.x, mouse.y, 48, 48);

//     // Steer agents
//     Jims.forEach(Jim => {
//       if (p.mouseIsPressed) {
//         Jim.location.x = p.random(width);
//         Jim.location.y = p.random(height);
//       }
//       Jim.seek(mouse);
//       Jim.update();
//       Jim.display();
//     })
//   }


//   function Polly(x, y) {
//     this.location = p.createVector(x, y);
//     this.velocity = p.createVector(0, 0);
//     this.acceleration = p.createVector(0, 0);

//     this.r = 6;
//     this.maxSpeed = 4;
//     this.maxForce = 0.1;

//     this.update = function () {
//       // Manipulate Velocity
//       this.velocity.add(this.acceleration);
//       this.velocity.limit(this.maxSpeed);
//       // Update location using new velocity
//       this.location.add(this.velocity);
//       // Resets to 0 after update ends
//       this.acceleration.mult(0);
//     }

//     this.applyForce = function (force) {
//       // Adds force to the object
//       this.acceleration.add(force);
//     }

//     this.seek = function (target) {
//       // Idk wtf this is or if it works but we gon' find out
//       let desired = p5.Vector.sub(target, this.location);
//       let d = desired.mag();

//       if (d < 100) {
//         let m = p.map(d, 0, 100, 0, this.maxSpeed);
//         desired.setMag(m);
//       } else {
//         desired.setMag(this.maxSpeed);
//       }

//       var steer = p5.Vector.sub(desired, this.velocity);
//       steer.limit(this.maxforce);
//       this.applyForce(steer);
//     }

//     this.display = function () {
//       var feta = this.velocity.heading() + p.PI / 2;
//       p.strokeWeight(1);
//       p.stroke(0);
//       p.fill(66);

//       p.push();
//       p.translate(this.location.x, this.location.y);
//       p.rotate(feta);

//       p.beginShape();
//       p.vertex(0, -this.r * 2);
//       p.vertex(-this.r, this.r * 2);
//       p.vertex(this.r, this.r * 2);
//       p.endShape(p.CLOSE);
//       p.pop();

//     }
//   }
// }

// var myp5 = new p5(s);

// //----------------- Flow Field ------------------------

// var s = function (p) {

//   var colors = [
//     "#7B2A3B",
//     "#E57661",
//     "#F8C58C",
//     "#F8E7A2",
//     "#86DDB2"
//   ]
//   var width = window.innerWidth;
//   var height = window.innerHeight;
//   var Jims = [];

//   p.setup = function () { //Run once
//     p.createCanvas(width, height);
//     for (var i = 0; i < 1; i++) {
//       Jims.push(new Polly(width / 2, height / 2))
//     }
//   }

//   p.draw = function () { //Run in a loop
//     p.background(255);

//     let mouse = p.createVector(p.mouseX, p.mouseY);
//     // Draw a circle at mouse
//     p.fill(200);
//     p.stroke(0);
//     p.strokeWeight(2);
//     p.ellipse(mouse.x, mouse.y, 48, 48);

//     // Steer agents
//     Jims.forEach(Jim => {
//       if (p.mouseIsPressed) {
//         Jim.location.x = p.random(width);
//         Jim.location.y = p.random(height);
//       }
//       Jim.seek(mouse);
//       Jim.update();
//       Jim.display();
//     })
//   }


//   function Polly(x, y) {
//     this.location = p.createVector(x, y);
//     this.velocity = p.createVector(0, 0);
//     this.acceleration = p.createVector(0, 0);

//     this.r = 6;
//     this.maxSpeed = 4;
//     this.maxForce = 0.1;

//     this.update = function () {
//       // Manipulate Velocity
//       this.velocity.add(this.acceleration);
//       this.velocity.limit(this.maxSpeed);
//       // Update location using new velocity
//       this.location.add(this.velocity);
//       // Resets to 0 after update ends
//       this.acceleration.mult(0);
//     }

//     this.applyForce = function (force) {
//       // Adds force to the object
//       this.acceleration.add(force);
//     }

//     this.seek = function (target) {
//       // Idk wtf this is or if it works but we gon' find out
//       let desired = p5.Vector.sub(target, this.location);
//       let d = desired.mag();

//       if (d < 100) {
//         let m = p.map(d, 0, 100, 0, this.maxSpeed);
//         desired.setMag(m);
//       } else {
//         desired.setMag(this.maxSpeed);
//       }

//       var steer = p5.Vector.sub(desired, this.velocity);
//       steer.limit(this.maxforce);
//       this.applyForce(steer);
//     }

//     this.display = function () {
//       var feta = this.velocity.heading() + p.PI / 2;
//       p.strokeWeight(1);
//       p.stroke(0);
//       p.fill(66);

//       p.push();
//       p.translate(this.location.x, this.location.y);
//       p.rotate(feta);

//       p.beginShape();
//       p.vertex(0, -this.r * 2);
//       p.vertex(-this.r, this.r * 2);
//       p.vertex(this.r, this.r * 2);
//       p.endShape(p.CLOSE);
//       p.pop();

//     }
//   }

//   function FlowField(r) {
//     // Flowfield is a 2D array of vectors
//     this.field = [[]];
//     // How large each cell in FlowField should be
//     this.resolution = r;
//     // Col and Rows in FlowField
//     this.cols = width / this.resolution;
//     this.rows = height / this.resolution;

//     this.init = function () {
//       for (var i = 0; i < this.cols; i++) {
//         for (var j = 0; j < this.rows; j++) {
//           let feta = p.random(-p.PI / 4, p.PI / 4);
//           this.field[i][j] = p5.Vector.fromAngle(feta);
//         }
//       }
//     }
//   }
// }

// var myp5 = new p5(s);

