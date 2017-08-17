var tutors = [ {
  "name": "Scott",
	"main": ["math","stats"],
  "subjects": ["math","stats","Calculus","Algebra","Business Calculus","business stats"],
	"prefsub":["Business Calculus","business stats"],
  "citations": ["APA"],
  "morning": "bacon",
	"score": 0
  },
	{
  "name": "Casey",
	"main": ["science"],
  "subjects": ["Chemistry"],
	"prefsub":["Chemistry"],
  "citations": ["APA"],
  "morning": "morning run",
	"score": 0
  }
 ];

var questionArea = document.getElementById('questionArea');

var responses = {
	'main': '',
	'subject': '',
	'cite': '',
	'morning': ''
}

var firstQuestion =
	{
		"id":"main",
  	"question" : "What do you need help with?",
  	"responses" : ["writing","math","speaking","science","Spanish"]
		};
			
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

var speakingQuestions = [
	{
		"id":"subject",
		"question" : "What subject do you need help with?",
		"responses" : ["English","History","Science","Geography","Science","Psychology",]
	}
];


	
	var mathQuestions [
	{
			"id":"subject",
			"cat": "math",
			"question" : "What subject do you need help with?",
			"responses" : ["Algebra","Calculus","Trigonometry","other"]
	}
	];

var scienceQuestions [
{
		"id":"subject",
		"cat": "science",
		"question" : "What subject do you need help with?",
		"responses" : ["Chemistry","Biology","Geography","Psychology","other"]
}
];

var Questions = [ 
	{
		"id":"morning",
  	"question" : "Your favorite part of your morning routine",
  	"responses" : ["coffee","morning run","bacon","hot showers"]
	}
];

function loadFirstQuestion() {
	var chunck = '<p>';
	chunck += firstQuestion.question + '</p><p>';
	for (var i = 0; i < firstQuestion.responses.length; i++) {
		chunck += '<button onclick="setMainArea(' + i + ')>' + firstQuestion.responses[i] + '</button>';
	}
	chunck += '</p>';
	questionArea.innerHTML = chunck;
}

function loadQuestions() {
	for(var q = 0; q < Questions.length; q++) {
		chunck += '<p>' + Questions.question + '</p><p>';
		for (var i = 0; i < sQuestions.responses.length; i++) {
			chunck += '<button onclick="setQ(Questions,' + q + ',' + i + ')>' + Questions.responses[i] + '</button>';
		}
		chunck += '</p>';
	}
	questionArea.innerHTML = chunck;
}



function loadSecondQuestions(set) {
	chunck = '';
	for(var q = 0; q < set.length; q++) {
		chunck += '<p>' + set[q].question + '</p><p>';
		for (var i = 0; i < set[q].responses.length; i++) {
			chunck += '<button onclick="setQ(' + set + ',' + q + ',' + i + ')>' + set[q].responses[i] + '</button>';
		}
		chunck += '</p>';
	}
	loadQuestions();
}


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

function setMainArea(i) {
	responses.main = firstQuestion.responses[i];
	if (responses.main == 'writing') {
		loadWritingQuestions();
	} else if (responses.main == 'math') {
		loadSecondQuestions(mathQuestions);
	} else if (responses.main == 'science') {
		loadScecondQuestions(scienceQuestions);
	} else if (responses.main == 'speaking') {
		loadSecondQuestions(speakingQuestions);
	} else {
		questionArea.innerHTML = '';
		loadQuestions();
}

loadFirstQuestion();
