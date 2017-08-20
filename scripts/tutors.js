var tutors = [ 
	{
		"name": "Scott",
		"main": ["math","stats"],
		"subjects": ["math","stats","Calculus","Algebra","Business Calculus","business stats"],
		"prefsub":["Business Calculus","business stats"],
		"citations": ["APA"],
		"morning": ["bacon"],
		"score": 0
  },
	{
		"name": "Casey",
		"main": ["science"],
		"subjects": ["Chemistry"],
		"prefsub":["Chemistry"],
		"citations": [],
		"morning": ["morning run"],
		"score": 0
  }
];

// array of additional question catergories
var questionCats = ['morning'];

// additional questions
var Questions = [ 
	{
		"id":"morning",
  	"question" : "Your favorite part of your morning routine",
  	"responses" : ["coffee","morning run","bacon","hot showers"]
	}
];


var questionArea = document.getElementById('questionArea');
var resultsArea = document.getElementById('results');



// object to store responses
var responses = {
	'main': '',
	'subject': '',
	'cite': '',
	'morning': ''
}

// first question to determine main domain
var firstQuestion =
	{
		"id":"main",
  	"question" : "What do you need help with?",
  	"responses" : ["writing","math","speaking","science","Spanish"]
	};

// questions for writing domain
var writingQuestions = [
	{
		"id":"subject",
		"question" : "What subject do you need help with?",
		"responses" : ["English","History","Science","Geography","Science","Psychology",]
	},
	{
		"id":"citation",
		"question": "What citation style are you using?",
		"responses": ["APA","MLA","Chicago","Turabian","other"]
	}
];

// questions for speech domain
var speakingQuestions = [
	{
		"id":"subject",
		"question" : "What subject do you need help with?",
		"responses" : ["English","History","Science","Geography","Science","Psychology","other"]
	}
];


	// questions for math domain
	var mathQuestions [
	{
			"id":"subject",
			"cat": "math",
			"question" : "What subject do you need help with?",
			"responses" : ["Algebra","Calculus","Trigonometry","other"]
	}
	];
// questions for science domain
var scienceQuestions [
{
		"id":"subject",
		"cat": "science",
		"question" : "What subject do you need help with?",
		"responses" : ["Chemistry","Biology","Geography","Psychology","other"]
}
];



function loadFirstQuestion() {
	var chunck = '<p>';
	chunck += firstQuestion.question + '</p><p>';
	for (var i = 0; i < firstQuestion.responses.length; i++) {
		chunck += '<button onclick="setMainArea(' + i + ')>' + firstQuestion.responses[i] + '</button>';
	} // close loop
	chunck += '</p>';
	questionArea.innerHTML = chunck;
} // close 1st question function

function loadQuestions(chunck) {
	for(var q = 0; q < Questions.length; q++) {
		chunck += '<p>' + Questions.question + '</p><p>';
		for (var i = 0; i < Questions.responses.length; i++) {
			chunck += '<button onclick="setQ(Questions,' + q + ',' + i + ')>' + Questions.responses[i] + '</button>';
		} // close i loop
		chunck += '</p>';
	} // close q loop
	questionArea.innerHTML = chunck;
} // close question function



function loadSecondQuestions(set) {
	var chunck = '';
	for(var q = 0; q < set.length; q++) {
		chunck += '<p>' + set[q].question + '</p><p>';
		for (var i = 0; i < set[q].responses.length; i++) {
			chunck += '<button onclick="setQ(' + set + ',' + q + ',' + i + ')>' + set[q].responses[i] + '</button>';
		} // close i for
		chunck += '</p>';
	} // close q for
	loadQuestions(chunck);
} // close 2nd question function


function maxDiff(QuestionNumber) {
  qa = Questions[QuestionNumber].Responses;
  var max = 0;
  var test = 0;
  for (i = 1; i < qa.length; i++) {
    for (j = 0; j < i; j++) {
      test = Math.abs(qa[i][1] - qa[j][1]);
      if  (test > max) {
        max = test;
      }
    }
  }
  return max;
};
  
function sumArray(arr) {
	sum = 0;
	for (i = 0; i < arr.length; i++) {
	  sum += arr[i];
	}
	return sum;
}

function setQ(set,q,i) {
	responses.set[q].id = set[q].responses[i];
}

function scoreIt() {
	var highScore = 0;
	var tutorIndex = 0;
	var chunck = '';
	for (var t = 0; t < tutors.length; t++) {
		if (tutors[t].main.indexOf(responses.main) > -1) {
			if (tutors[t].subject.indexOf(responses.subject) > -1) {
				tutors[t].score += 10;
			}
			if (tutors[t].prefsub.indexOf(responses.subject) > -1) {
				tutors[t].score += 20;
			}
			if (tutors[t].cite.indexOf(responses.cite) > -1) {
				tutors[t].score += 10;
			}
			for (var c = 0; c < otherCats.length; c++) {
				if (tutors[t].otherCats[c].indexOf(responses.otherCats[c]) > -1) {
					tutors[t].score += 1;
				} // close if
			} // close c for
		} // cose if main subject
	} // close t for

	for (var t = 0; t < tutors.length; t++) {
		if (highScore < tutors[t].score) {
			highScore = tutors[t].score;
			tutorIndex = t;
		}
	}
	chunck = 'You should make an appointment with ' + tutors[t].name;
	resultsArea.innerHTML = chunck;
} // close score it function

function setMainArea(i) {
	responses.main = firstQuestion.responses[i];
	if (responses.main == 'writing') {
		loadSecondQuestions(writingQuestions);
	} else if (responses.main == 'math') {
		loadSecondQuestions(mathQuestions);
	} else if (responses.main == 'science') {
		loadScecondQuestions(scienceQuestions);
	} else if (responses.main == 'speaking') {
		loadSecondQuestions(speakingQuestions);
	} else {
		questionArea.innerHTML = '';
		loadQuestions('');
}

loadFirstQuestion();
