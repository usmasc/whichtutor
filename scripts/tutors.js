var prefPoints = 5; // points for preferred subject
var subPoints = 10; // points for subject
var OQpoints = 1; // other question points

var tutors = [
  {
    name: "Adam",
    main: ["Geography", "speaking", "writing"],
    subjects: ["Geography"],
    prefsub: ["Geography"],
    cite: [],
    morning: [],
    turtle: [],
    artist: [],
    pony: ['Apple Jack'],
    titan: [],
    score: 0,
    bio: "Adam is a Geography major. He tutors Geography, speaking, and writing. He also likes to code. He's a Veteran. He's involved with GTU and Southern Connection. Adam prefers that you hit reply and not reply all when you reply to emails."  
  },
  {
    name: "Aleysh",
    main: ["Chemistry"],
    subjects: ["Chemistry", "CHEM 100", "CHEM 104"],
    prefsub: ["Chemistry"],
    cite: [],
    morning: [],
    turtle: [],
    artist: [],
    pony: [],
    titan: [],
    score: 0,
    bio: "Aleysh is a Chemistry tutor. She is also involved in Sigma Mu: Science and Math Club"
  },
  {
    name: "Casey",
    main: ["Chemistry"],
    subjects: ["Chemistry", "CHEM 100", "CHEM 104"],
    prefsub: [],
    cite: [],
    morning: ["morning run"],
    turtle: ['Michelangelo'],
    artist: [],
    pony: ['Pinkie Pie'],
    titan: [],
    score: 0,
    bio: "Casey is Casey. Once you get to know him, you'll understand."
  },
  {
    name: "Dane",
    main: ["math", "writing"],
    subjects: ["math", "Calculus","Algebra", "Intermediate Algebra", "College Algebra", "Business Calculus"],
    prefsub: [],
    cite: [],
    morning: [],
    turtle: [],
    artist: [],
    pony: [],
    titan: [],
    score: 0,
    bio: "Dane is a Chemical Engineer who is going back to school to learn Computer Science. He wants to learn all the things!"
  },
  {
    name: "Elizabeth",
    main: ["math"],
    subjects: ["math", "Algebra", "Intermediate Algebra", "College Algebra", "Business Calculus"],
    prefsub: ["Intermediate Algebra", "College Algebra", "Business Calculus"],
    cite: [],
    morning: ["hot tea"],
    turtle: ["Michelangelo"],
    artist: ["Raphael"],
    pony: ["Fluttershy"],
    titan: ["Starfire"],
    score: 0,
    bio: "Elizabeth is a marketing major who enjoys tutoring Intermediate Algebra, College Algebra, and Brief Applied Calculus (Business Calculus)."
  },
  {
    name: "Grace",
    main: ["Chemistry"],
    subjects: ["Chemistry", "CHEM 100", "CHEM 104"],
    prefsub: ["Chemistry"],
    cite: [],
    morning: [],
    turtle: [],
    artist: [],
    pony: [],
    titan: [],
    score: 0,
    bio: "Grace tutors chemistry."
  },
  {
    name: "Heather",
    main: ["Bilogy"],
    subjects: ["Bilogy"],
    prefsub: ["Bilogy"],
    cite: [],
    morning: ['coffee'],
    turtle: ['Michelangelo'],
    artist: ['Leonardo'],
    pony: ['Twilight Sparkle'],
    titan: ["Robin"],
    score: 0,
    bio: "Heather can't wait to help you learn."
  },
  {
    name: "Jonathan",
    main: ["writing", "Spanish"],
    subjects: ["speaking", "writing", "Spanish"],
    prefsub: [],
    cite: [],
    morning: [],
    turtle: [],
    artist: [],
    pony: [],
    titan: [],
    score: 0,
    bio: "Jonathan tutors in speaking, writing, and Spanish"
  },
  {
    name: "Leah",
    main: ["speaking", "writing"],
    subjects: ["English", "Education"],
    prefsub: [],
    cite: ["MLA"],
    morning: [],
    turtle: [],
    artist: [],
    pony: [],
    titan: [],
    score: 0,
    bio: "Leah is a studying to be a high school English teacher."
  },
  {
    name: "Samantha",
    main: ["Chemistry"],
    subjects: ["Chemistry", "CHEM 100", "CHEM 104","General Chemistry"],
    prefsub: ["Chemistry"],
    cite: [],
    morning: ["coffee"],
    turtle: ["Leonardo"],
    artist: ["Michelangelo"],
    pony: ["Rarity"],
    titan: ["Raven"],
    score: 0,
    bio: "Samantha is a Chemistry tutor."
  },
  {
    name: "Saurabh",
    main: ["stats", "SPSS", "Research methods"],
    subjects: ["stats", "SPSS", "Research methods"],
    prefsub: ["stats", "SPSS", "Research methods"],
    cite: [],
    morning: [],
    turtle: [],
    artist: [],
    pony: [],
    titan: [],
    score: 0,
    bio: "Saurabh is just awesome."
  },
  {
    name: "Scott",
    main: ["math", "stats"],
    subjects: [
      "math",
      "stats",
      "Calculus",
      "Algebra",
      "Intermediate Algebra", "College Algebra",
      "Business Calculus",
      "business stats"
    ],
    prefsub: ["Business Calculus", "business stats"],
    citations: ["APA"],
    morning: ["bacon"],
    turtle: ["Donatello"],
    artist: ["Leonardo"],
    pony: ["Rainbow Dash"],
    titan: ["Raven"],
    score: 0,
    bio: "Scott is an Air Force Veteran. He wants to teach math and a little bit of programming too. He made this quiz."
  },
  {
    name: "Teneala",
    main: ["math", "Spanish", "Computer Science"],
    subjects: ["math", "Calculus", "Algebra", "Business Calculus", "Spanish"],
    prefsub: [],
    cite: [],
    morning: [],
    turtle: [],
    artist: [],
    pony: [],
    titan: [],
    score: 0,
    bio: "Teneala is majoring in Computer Science with a double minor in Spanish and Math as part of her plot for world domination. We're not kidding."
  },
  {
    name: "Veronica",
    main: ["math"],
    subjects: ["math", "Calculus", "Algebra", "Business Calculus"],
    prefsub: [],
    cite: [],
    morning: [],
    turtle: [],
    artist: [],
    pony: [],
    titan: [],
    score: 0,
    bio: "Veronica is a Veteran. She is now majoring in Geography. She was an accounting major, but Geography is awesome. So there!"
  },
  {
    name: "Zachary Ransom",
    main: ["speaking", "writing", "Psychology"],
    subjects: ["speaking", "writing", "Psychology","Academic Research"],
    prefsub: ["Psychology"],
    cite: ["APA"],
    morning: ['coffee','bacon'],
    turtle: ['Raphael'],
    artist: ['Michelangelo'],
    pony: ['Twilight Sparkle'],
    titan: ['Cyborg'],
    score: 0,
    bio: "<p>Zachary Ransom is currently a Senior majoring in Psychology.  His focus within the field of psychology is currently focused on Applied Behavioral Analysis with the intent of pursuing a Ph.D. in School Psychology.  In accordance with these goals, he is currently a clinical intern and conducting the research for his senior thesis at USM's Autism Project.</p><p>A desire to serve his community led him to become a paramedic and now serves as his inspiration to push forward with his current academic pursuits.   This also serves as his inspiration to be a tutor.  He takes pride in being able to offer my assistance in helping his fellow students fulfill their academic potential and achieve success.  His strategy for tutoring centers around this concept.  His main goal is to help those that he tutors realize what strategies work well for them and to then help them hone those talents.</p>"
  },
  {
    name: "Zachary Stewart",
    main: ["speaking", "writing"],
    subjects: ["speaking", "writing", "Political Science", "History"],
    prefsub: ["Political Science"],
    cite: [],
    morning: [],
    turtle: [],
    artist: [],
    pony: [],
    titan: [],
    score: 0,
    bio: ""
  }
];

// array of additional question catergories
var questionCats = ["morning", "turtle", "artist", "pony", "titan"];

// additional questions
var Questions = [
  {
    id: "morning",
    question: "Your favorite part of your morning routine",
    responses: ["coffee", "morning run", "bacon","hot tea"]
  },
  {
    id: "turtle",
    question: "Pick a Ninja Turtle:",
    responses: ["Donatello", "Leonardo", "Michelangelo", "Raphael"]
  },
  {
    id: "artist",
    question: "Pick a Renaissance artist:",
    responses: ["Donatello", "Leonardo", "Michelangelo", "Raphael"]
  },
  {
    id: "pony",
    question: "Pick a pony:",
    responses: [
      "Apple Jack",
      "Fluttershy",
      "Pinkie Pie",
      "Rainbow Dash",
      "Rarity",
      "Twilight Sparkle"
    ]
  },
  {
    id: "titan",
    question: "Pick a Teen Titan:",
    responses: ["Beast Boy", "Cyborg", "Raven", "Robin", "Starfire"]
  }
];

var questionArea = document.getElementById("questionArea");
var resultsArea = document.getElementById("results");

// object to store responses
var responses = {
  'main': "",
  'subject': "",
  'cite': "",
  'morning': "",
  'turtle': "",
  'artist': "",
  'pony': "",
  'titan': ""
};

// first question to determine main domain
var firstQuestion = {
  id: "main",
  question: "What do you need help with?",
  responses: [
    "writing",
    "math",
    "speaking",
    "Spanish",
    "Chemistry",
    "Biology",
    "Computer Science",
    "stats",
    "Geography",
    "Psychology",
    "Research methods"
  ]
};

// questions for writing domain
var writingQuestions = [
  {
    id: "subject",
    question: "What subject do you need help with?",
    responses: [
      "English",
      "History",
      "Science",
      "Geography",
      "Science",
      "Psychology",
      "other"
    ]
  },
  {
    id: "citation",
    question: "What citation style are you using?",
    responses: ["APA", "MLA", "Chicago", "Turabian", "other"]
  }
];

// questions for speech domain
var speakingQuestions = [
  {
    id: "subject",
    question: "What subject do you need help with?",
    responses: [
      "English",
      "History",
      "Science",
      "Geography",
      "Science",
      "Psychology",
      "other"
    ]
  }
];

// questions for math domain
var mathQuestions = [
  {
    id: "subject",
    cat: "math",
    question: "What subject do you need help with?",
    responses: [
      "Calculus",
      "Trigonometry",
      "Business Calculus",
      "business stats",
      "Intermediate Algebra", "College Algebra",
      "other"
    ]
  }
];

var statsQuestions = [
  {
    id: "subject",
    cat: "stats",
    question: "What subject do you need help with?",
    responses: ["prob and stats", "business stats", "SPSS"]
  }
];

// questions for science domain
var scienceQuestions = [
  {
    id: "subject",
    cat: "science",
    question: "What subject do you need help with?",
    responses: ["Chemistry", "Biology", "Geography", "Psychology", "other"]
  }
];

function loadFirstQuestion() {
  var chunck = "<p>";
  chunck += firstQuestion.question + "</p><p>";
  for (var i = 0; i < firstQuestion.responses.length; i++) {
    chunck +=
      '<button onclick="setMainArea(' +
      i +
      ')">' +
      firstQuestion.responses[i] +
      "</button>";
  } // close loop
  chunck += "</p>";
  questionArea.innerHTML = chunck;
  resultsArea.innerHTML = "";
} // close 1st question function

function loadQuestions(chunck) {
  for (var q = 0; q < Questions.length; q++) {
    chunck += "<p>" + Questions[q].question + "</p><p>";
    for (var i = 0; i < Questions[q].responses.length; i++) {
      chunck +=
        '<button onclick="setQ(Questions,' +
        q +
        "," +
        i +
        ')">' +
        Questions[q].responses[i] +
        "</button>";
    } // close i loop
    chunck += "</p>";
  } // close q loop
  chunck += '<p><button onclick="scoreIt()" class="scorebtn">Score It!</button> ';
  chunck += '<button onclick="loadFirstQuestion()" class="scorebtn">Reset</button></p>';
  questionArea.innerHTML = chunck;
} // close question function

function loadSecondQuestions(set, setStr) {
  var chunck = "";
  for (var q = 0; q < set.length; q++) {
    chunck += "<p>" + set[q].question + "</p><p>";
    // document.getElementById('test').innerHTML = chunck;
    for (var i = 0; i < set[q].responses.length; i++) {
      chunck +=
        '<button onclick="setQ(' +
        setStr +
        "," +
        q +
        "," +
        i +
        ')">' +
        set[q].responses[i] +
        "</button>";
      // document.getElementById('test').innerHTML = set;
    } // close i for
    chunck += "</p>";
  } // close q for
  loadQuestions(chunck);
} // close 2nd question function

function setQ(set, q, i) {
  var thingie = set[q].id;
  responses[set[q].id] = set[q].responses[i];
    /* test code
    var testThing = 'main: ' + responses.main + ', ';
    testThing += 'subject: ' + responses.subject + ', ';
    testThing += 'citation: ' + responses.cite + ', ';
    for (var i = 0; i < questionCat.length; i++) {
    testThing +=  questionCat[i] + ': ' + responses[questionCat[i]] + ', ';
    }
    document.getElementById("test").innerHTML =  testThing ;
    //end test code */
}

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
  chunck = "<h1>You should make an appointment with " + tutors[tutorIndex].name + "</h1>";
  chunck += "<p>" + tutors[tutorIndex].bio + "</p>";
  resultsArea.innerHTML = chunck;
} // close score it function

function setMainArea(i) {
  responses.main = firstQuestion.responses[i];
  document.getElementById("test").innerHTML = responses.main;
  if (responses.main == "writing") {
    loadSecondQuestions(writingQuestions, "writingQuestions");
  } else if (responses.main == "math") {
    loadSecondQuestions(mathQuestions, "mathQuestions");
  } else if (responses.main == "stats") {
    loadSecondQuestions(statsQuestions, "statsQuestions");
  } else if (responses.main == "speaking") {
    loadSecondQuestions(speakingQuestions, "speakingQuestions");
  } else {
    //questionArea.innerHTML = '';
    loadQuestions("");
  }
}

loadFirstQuestion();
