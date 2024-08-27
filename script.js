

var a = document.getElementById("noOfTimesDiv");
var b = document.getElementById("durationSetDiv");

function noOfTimesDisplay() {

  document.getElementById("times").value = "";
  document.getElementById("time").value = "";
  document.getElementById("demo").innerHTML = "";
  document.getElementById("demo1").innerHTML = "";
  document.getElementById("demo2").innerHTML = "";
  document.getElementById("demo3").innerHTML = "";
  document.getElementById("demo4").innerHTML = "";
  document.getElementById("demo5").innerHTML = "";
  document.getElementById("secondsPassed").innerHTML = "";

  var a = document.getElementById("noOfTimesDiv");
  var b = document.getElementById("durationSetDiv");
  if (a.style.display === "block") {
    a.style.display = "none";
    b.style.display = "none";

  } else {
    a.style.display = "block";
    b.style.display = "none";
  }

}


function durationSetDisplay() {

  document.getElementById("times").value = "";
  document.getElementById("time").value = "";
  document.getElementById("demo").innerHTML = "";
  document.getElementById("demo1").innerHTML = "";
  document.getElementById("demo2").innerHTML = "";
  document.getElementById("demo3").innerHTML = "";
  document.getElementById("demo4").innerHTML = "";
  document.getElementById("demo5").innerHTML = "";
  document.getElementById("secondsPassed").innerHTML = "";


  var a = document.getElementById("noOfTimesDiv");
  var b = document.getElementById("durationSetDiv");
  if (b.style.display === "block") {

    b.style.display = "none";
    a.style.display = "none";



  } else {
    b.style.display = "block";
    a.style.display = "none";

  }
}





var aud = document.getElementById("myAudio");

function myFunction() {


  var x = document.getElementById("times").value;
  document.getElementById("demo").innerHTML = "Recitation is set to " + x + " times.";

  var a = 0;

  aud.onended = function() {
    a = a + 1;

    if (a == x) {
      document.getElementById("times").value = "";
      document.getElementById("demo2").innerHTML = x + " time(s) completed."

    }

    if (a < x) {
      aud.play();
      document.getElementById("demo1").innerHTML = 'Count : ' + (1 + a);
    }


  };




};




function timesPlay() {
  document.getElementById("demo2").innerHTML = "";
  document.getElementById("demo3").innerHTML = "";
  var x = document.getElementById("times").value;
  if (x > 0) {
    aud.play();
  }



};











function timeFunction() {

  document.getElementById("demo3").innerHTML = "";

  var t = document.getElementById("time").value;
  document.getElementById("demo4").innerHTML = "Recitation is set to end in " + t + " minute(s).  ";


};



function timeStart() {

  var t = document.getElementById("time").value;


  if (t > 0) {
    aud.play();
  };
  var c = 0;

  aud.onended = function() {
    c = c + 1;
    aud.play();
    document.getElementById("demo5").innerHTML = 'Count : ' + (1 + c);

  };


  q = t * 60

  var timeleft = q;

  var downloadTimer = setInterval(function() {
    if (timeleft <= 0) {

    } else {

    }
    timeleft -= 1;
  }, 1000);



};




function continuePlay() {
  var t = document.getElementById("time").value;
  if (t > 0) {
    aud.play();

  };

  var x = document.getElementById("times").value;
  if (x > 0) {
    aud.play();
  }


};




var t = document.getElementById("time").value;
q = t * 60

var Seconds = q;

var myVar = "";

function startTimer() {
  timeStart();
  myVar = setInterval(start, 1000);
  Seconds = q;
}


function resumeTimer() {
  continuePlay();
  myVar = setInterval(start, 1000);
}

function start() {
  var t = document.getElementById("time").value;
  Seconds--;
  document.getElementById("secondsPassed").innerHTML = "Time Left (secs.) : " + Seconds;
  if (Seconds <= 0) {
    stopTimer();
    document.getElementById("secondsPassed").innerHTML = t + " minute(s) reached";
  } else {
  }
}

function stopTimer() {
  aud.pause();
  clearInterval(myVar)

}










function myToggleV() {

  var v = document.getElementById("toggleV");
  if (v.style.display === "block") {

    v.style.display = "none";
    document.getElementById("btnToggleV").innerHTML = "Pause";
    continuePlay();

  } else {

    aud.pause();
    document.getElementById("btnToggleV").innerHTML = "Resume";
    v.style.display = "block";

  }

}



function myToggleU() {

  var u = document.getElementById("toggleU");
  if (u.style.display === "block") {

    u.style.display = "none";
    document.getElementById("btnToggleU").innerHTML = "Pause";
    resumeTimer();

  } else {

    stopTimer();
    document.getElementById("btnToggleU").innerHTML = "Resume";
    u.style.display = "block";

  }

}






