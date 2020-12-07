var counts1 = 0;
var counts2 = 0;
onEvent("buttonEx1", "click", function( ) {
  setScreen("screen2");
  playSound("assets/Exercise1.mp3", false);
  setImageURL("image1", "assets/Start.jpg");
  setTimeout(function() {
    setImageURL("image1", "assets/Exercise1Phase1.jpg");
  }, 5000);
  setTimeout(function() {
    setImageURL("image1", "assets/Exercise1Phase2.jpg");
  }, 7000);
  setTimeout(function() {
    setImageURL("image1", "assets/Exercise1Phase3.jpg");
  }, 9000);
  setTimeout(function() {
    setImageURL("image1", "assets/Exercise1Phase4.jpg");
  }, 12000);
  setTimeout(function() {
    setImageURL("image1", "assets/Exercise1Phase5.jpg");
  }, 13000);
  setTimeout(function() {
    setImageURL("image1", "assets/Exercise1Phase6.jpg");
  }, 14000);
  setTimeout(function() {
    setImageURL("image1", "assets/Exercise1Phase7.jpg");
  }, 15000);
  setTimeout(function() {
    setImageURL("image1", "assets/Start.jpg");
  }, 16000);
  setTimeout(function() {
    playSound("assets/Let's-do-if-for-30-seconds.mp3", false);
    setImageURL("image1", "assets/Exercise1.gif");
    timedLoop(1000, function() {
      counts1 = counts1+1;
      setText("labelCount", counts1);
      if (counts1==30) {
        stopTimedLoop();
        setText("labelCount", "Good Job");
        playSound("assets/GoodJob.mp3", false);
        setImageURL("image1", "assets/Start.jpg");
      }
    });
  }, 20000);
});
onEvent("buttonBack", "click", function( ) {
  counts1 = 0;
  setScreen("screen1");
  stopSound("assets/Exercise1.mp3");
  setText("labelCount", "");
  stopSound("assets/Let's-do-if-for-30-seconds.mp3");
  stopSound("assets/GoodJob.mp3");
  stopTimedLoop();
});
onEvent("buttonEx2", "click", function( ) {
  setScreen("screen2");
  playSound("assets/Exercise2.mp3", false);
  setImageURL("image1", "assets/Start.jpg");
  setTimeout(function() {
    setImageURL("image1", "assets/Exercise2Phase1.jpg");
  }, 1000);
  setTimeout(function() {
    setImageURL("image1", "assets/Exercise2Phase2.jpg");
  }, 6000);
  setTimeout(function() {
    setImageURL("image1", "assets/Exercise2Phase3.jpg");
  }, 16000);
  setTimeout(function() {
    setImageURL("image1", "assets/Start.jpg");
  }, 18000);
  setTimeout(function() {
    playSound("assets/Let's-do-if-for-30-seconds.mp3", false);
  }, 22000);
  setTimeout(function() {
    setImageURL("image1", "assets/Exercise2.gif");
  }, 22000);
  setTimeout(function() {
    timedLoop(1000, function() {
      setText("labelCount", counts2);
      counts2 = counts2 + 1;
      if (counts2 == 30) {
        stopTimedLoop();
        setText("labelCount", "Good Job!");
        playSound("assets/GoodJob.mp3", false);
        setImageURL("image1", "assets/GREAT-JOBBBB!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!.gif");
      }
    });
  }, 22000);
});
