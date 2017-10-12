var prefPoints = 3; // points for preferred subject
var subPoints = 5; // points for subject
var OQpoints = 1; // other question points

function loadFirstQuestion() {
  for (i = 0; i < questionCats.length; i++) {
    responses[questionCats[i]] = '';
  }
  responses.subject = '';
  responses.cite = '';
  
  var chunck = '<div class="box"><p>';

  chunck += firstQuestion.question + "</p><p>";
  for (var i = 0; i < firstQuestion.responses.length; i++) {
    chunck +=
      '<button onclick="setMainArea(' +
      i +
      ')">' +
      firstQuestion.responses[i] +
      "</button>";
  } // close loop
  chunck += "</p></div>";
  questionArea.innerHTML = chunck;
  resultsArea.innerHTML = "";
} // close 1st question function

function loadQuestions(chunck) {
  for (var q = 0; q < Questions.length; q++) {
    chunck += '<div class="box">';
    chunck += '<p>' + Questions[q].question + '</p><p>';
    for (var i = 0; i < Questions[q].responses.length; i++) {
      chunck += '<button ';
      if (responses[Questions[q].id] == Questions[q].responses[i]) {
          chunck += 'class="selected" ';
      }
      chunck += 'onclick="setQ(Questions,' +  q +  ',' +  i + ')">' +  Questions[q].responses[i] + '</button>';
    } // close i loop
    chunck += "</p>";
    chunck += '</div>';
  } // close q loop
  
  chunck += '<div class="box"><button onclick="scoreIt()" class="scorebtn">Score It!</button> ';
  chunck += '<button onclick="loadFirstQuestion()" class="scorebtn">Reset</button></div>';
  questionArea.innerHTML = chunck;
} // close question function

function loadSecondQuestions(set, setStr) {
  var chunck = "";
  for (var q = 0; q < set.length; q++) {
    chunck += '<div class="box">';
    chunck += "<p>" + set[q].question + "</p><p>";
    // document.getElementById('test').innerHTML = chunck;
    for (var i = 0; i < set[q].responses.length; i++) {
      chunck += '<button ';
      if (responses[set[q].id] == set[q].responses[i]) {
          chunck += 'class="selected" ';
      }
      chunck += 'onclick="setQ(' + setStr + "," + q + "," +  i + ')">' + set[q].responses[i] + "</button>";
      // document.getElementById('test').innerHTML = set;
    } // close i loop
    chunck += "</p>";
    chunck += '</div>';
  } // close q for
  loadQuestions(chunck);
} // close 2nd question function



function scoreIt() {
  // document.getElementById('test').innerHTML = tutors[0][questionCats[0]].indexOf(responses[questionCats[0]]);

  var chunck = "";
  var highScore = 0;
  var tutorIndex = 0;

  for (var t = 0; t < tutors.length; t++) {
    tutors[t].score = 0;
    if (tutors[t].main.indexOf(responses.main) > -1) {
      tutors[t].score += 1;
      if (tutors[t].subjects.indexOf(responses.subject) > -1) {
        tutors[t].score += subPoints;
      }

      if (tutors[t].prefsub.indexOf(responses.subject) > -1) {
        tutors[t].score += prefPoints;
      }
      if (responses.main == "writing") {
        if (tutors[t].cite.indexOf(responses.cite) > -1) {
          tutors[t].score += 10;
        }
      }
      for (var c = 0; c < questionCats.length; c++) {
        if (
          tutors[t][questionCats[c]].indexOf(responses[questionCats[c]]) > -1
        ) {
          tutors[t].score += OQpoints;
        } // close if
      } // close c for
    } // cose if main subject
  } // close t for

  // document.getElementById('test').innerHTML = tutors[0].score;

  for (t = 0; t < tutors.length; t++) {
    if (highScore < tutors[t].score) {
      highScore = tutors[t].score;
      tutorIndex = t;
    }
  }
  // document.getElementById("test").innerHTML =   tutors[tutorIndex].name + " " + highScore;
  chunck = '<div class="box"><h2>You should make an appointment with ' + tutors[tutorIndex].name +  "</h2>";
  chunck += "<p>" + tutors[tutorIndex].bio + ' Visit <a href="https://usm.mywconline.com" target="_blank">';
  chunck += 'usm.mywconline.com</a>';
  chunck += ' to make an appointment with ' + tutors[tutorIndex].name + ".</p></div>";
  resultsArea.innerHTML = chunck;
} // close score it function
  
 function secondSetGo() {

   if (responses.main == "writing") {

    loadSecondQuestions(writingQuestions, "writingQuestions");

  } else if (responses.main == "math") {
    loadSecondQuestions(mathQuestions, "mathQuestions");
  } else if (responses.main == "stats") {
    loadSecondQuestions(statsQuestions, "statsQuestions");
  } else if (responses.main == "speaking") {
    loadSecondQuestions(speakingQuestions, "speakingQuestions");
  } else if (responses.main == "study skills") {
    loadSecondQuestions(studyQuestions, "studyQuestions");
  }else {
                      
    //questionArea.innerHTML = '';
    responses.subject = responses.main;
    loadQuestions("");
    
    //document.getElementById("test").innerHTML = responses.main;
  }

 }
    
 function setQ(set, q, i) {
  var thingie = set[q].id;
  responses[set[q].id] = set[q].responses[i];
  // test code
  var testThing = 'main: ' + responses.main + ', ';
  testThing += 'subject: ' + responses.subject + ', ';
  if (responses.main == 'writing') {
    testThing += 'citation: ' + responses.cite + ', ';
  }
  testThing += 'morning: ' + responses.morning + ', ';
  testThing += 'turtle: ' + responses.turtle + ', ';
  testThing += 'artist: ' + responses.artist + ', ';
  testThing += 'pony: ' + responses.pony + ', ';
  testThing += 'titan: ' + responses.titan;
  document.getElementById("test2").innerHTML =  testThing;
  secondSetGo();
    //end test code 
}

function setMainArea(i) {
  responses.main = firstQuestion.responses[i];

  secondSetGo();
}

loadFirstQuestion();
