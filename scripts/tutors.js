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
		"main": ["Chemistry"],
		"subjects": ["Chemistry","CHEM 100","CHEM 104"],
		"prefsub":[],
		"cite": [],
		"morning": ["morning run"],
		"score": 0
  },
  {
		"name": "Adam",
		"main": ["Geography",'speaking','writing'],
		"subjects": ["Geography"],
		"prefsub":["Geography"],
		"cite": [],
		"morning": [],
		"score": 0
  },
  {
		"name": "Aleysh",
		"main": ['Chemistry'],
		"subjects": ['Chemistry',"CHEM 100","CHEM 104"],
		"prefsub":['Chemistry'],
		"cite": [],
		"morning": [],
		"score": 0
  },	
  {
		"name": "Dane",
		"main": ["math","writing"],
		"subjects": ["math","Calculus","Algebra","Business Calculus"],
		"prefsub":[],
		"cite": [],
		"morning": ["bacon"],
		"score": 0
  },
  {
		"name": "Grace",
		"main": ['Chemistry'],
		"subjects": ['Chemistry',"CHEM 100","CHEM 104"],
		"prefsub":['Chemistry'],
		"cite": [],
		"morning": [],
		"score": 0
  },	
  {
		"name": "Heather",
		"main": ['Bilogy'],
		"subjects": ['Bilogy'],
		"prefsub":['Bilogy'],
		"cite": [],
		"morning": [],
		"score": 0
  },
  {
		"name": "Saurabh",
		"main": ["stats",'SPSS','Research methods'],
		"subjects": ["stats",'SPSS','Research methods'],
		"prefsub":["stats",'SPSS','Research methods'],
		"cite": [],
		"morning": [],
		"score": 0
  },
 {
		"name": "Teneala",
		"main": ["math","Spanish","Computer Science"],
		"subjects": ["math","Calculus","Algebra","Business Calculus","Spanish"],
		"prefsub":[],
		"cite": [],
		"morning": [],
		"score": 0
  },
  {
		"name": "Zachary Stewart",
		"main": ["speaking","writing"],
		"subjects": ["speaking","writing","Political Science","History"],
		"prefsub":["Political Science"],
		"cite": [],
		"morning": [],
		"score": 0
  },
  {
		"name": "Elizabeth",
		"main": ["math"],
		"subjects": ["math","Calculus","Algebra","Business Calculus"],
		"prefsub":[],
		"cite": [],
		"morning": [],
		"score": 0
  },
  {
		"name": "Samantha",
		"main": ['Chemistry'],
		"subjects": ['Chemistry',"CHEM 100","CHEM 104"],
		"prefsub":['Chemistry'],
		"cite": [],
		"morning": [],
		"score": 0
  },
  {
		"name": "Veronica",
		"main": ["math"],
		"subjects": ["math","Calculus","Algebra","Business Calculus"],
		"prefsub":[],
		"cite": [],
		"morning": [],
		"score": 0
  },
  {
		"name": "Zachary Ransom",
		"main": ["speaking","writing","Psychology"],
		"subjects": ["speaking","writing","Psychology"],
		"prefsub":["Psychology"],
		"cite": ['APA'],
		"morning": [],
		"score": 0
  },
  {
		"name": "Jonathan",
		"main": ["writing","Spanish"],
		"subjects": ["speaking","writing","Spanish"],
		"prefsub":[],
		"cite": [],
		"morning": [],
		"score": 0
  },
    {
		"name": "Leah",
		"main": ["speaking","writing"],
		"subjects": ["English","Education"],
		"prefsub":[],
		"cite": ['MLA'],
		"morning": [],
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
  	"responses" : ["coffee","morning run","bacon"]
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
};

// first question to determine main domain
var firstQuestion =
	{
		"id":"main",
  	"question" : "What do you need help with?",
  	"responses" : ["writing", "math", "speaking", "Spanish", "Chemistry", "Biology","Computer Science", "stats", "Geography","Psychology","Research methods"]
	};

// questions for writing domain
var writingQuestions = [
	{
		"id":"subject",
		"question" : "What subject do you need help with?",
		"responses" : ["English","History","Science","Geography","Science","Psychology","other"]
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
var mathQuestions = [
	{
		"id":"subject",
		"cat": "math",
		"question" : "What subject do you need help with?",
		"responses" : ["Algebra","Calculus","Trigonometry","Business Calculus","business stats","other"]
	}
];
// questions for science domain
var scienceQuestions = [
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
		chunck += '<button onclick="setMainArea(' + i + ')">' +  firstQuestion.responses[i] + '</button>';
	} // close loop
	chunck += '</p>';
	questionArea.innerHTML = chunck;
} // close 1st question function

function loadQuestions(chunck) {
	for(var q = 0; q < Questions.length; q++) {
		chunck += '<p>' + Questions[q].question + '</p><p>';
		for (var i = 0; i < Questions[q].responses.length; i++) {
			chunck += '<button onclick="setQ(Questions,' + q + ',' + i + ')">' + Questions[q].responses[i] + '</button>';
		} // close i loop
		chunck += '</p>';
	} // close q loop
  chunck += '<p><button onclick="scoreIt()">Score It!</button> ';
	chunck += '<button onclick="loadFirstQuestion()">Reset</button></p>';
	questionArea.innerHTML = chunck;
} // close question function



function loadSecondQuestions(set, setStr) {
	var chunck = '';
	for(var q = 0; q < set.length; q++) {

		chunck += '<p>' + set[q].question + '</p><p>';
         // document.getElementById('test').innerHTML = chunck;
		for (var i = 0; i < set[q].responses.length; i++) {
			chunck += '<button onclick="setQ(' + setStr + ',' + q + ',' + i + ')">' + set[q].responses[i] + '</button>';
     // document.getElementById('test').innerHTML = set;
		} // close i for
		chunck += '</p>';
	} // close q for
	loadQuestions(chunck);
} // close 2nd question function

function setQ(set,q,i) {
  var thingie = set[q].id;
	responses[set[q].id] = set[q].responses[i];
  document.getElementById('test').innerHTML = responses[set[q].id];
}

function scoreIt() {
  
 // document.getElementById('test').innerHTML = tutors[0][questionCats[0]].indexOf(responses[questionCats[0]]);
  
	var chunck = '';
	var highScore = 0;
	var tutorIndex = 0;
  
	for (var t = 0; t < tutors.length; t++) {
		tutors[t].score = 0;
		if (tutors[t].main.indexOf(responses.main) > -1) {
       tutors[t].score += 1;
			if (tutors[t]['subjects'].indexOf(responses['subject']) > -1) {
				tutors[t].score += 10;
			}
      
     
			if (tutors[t]['prefsub'].indexOf(responses['subject']) > -1) {
				tutors[t].score += 20;
			}
      if (responses.main == 'writing') {
        if (tutors[t]['cite'].indexOf(responses['cite']) > -1) {
          tutors[t].score += 10;
        }
			}
			for (var c = 0; c < questionCats.length; c++) {
				if (tutors[t][questionCats[c]].indexOf(responses[questionCats[c]]) > -1) {
					tutors[t].score += 1;
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
  document.getElementById('test').innerHTML = tutors[tutorIndex].name + ' ' + highScore;
	chunck = '<h1>You should make an appointment with ' + tutors[tutorIndex].name + '</h1>';
	resultsArea.innerHTML = chunck;
 

} // close score it function


function setMainArea(i) {
	responses.main = firstQuestion.responses[i];
  document.getElementById('test').innerHTML = responses.main;
	if (responses.main == 'writing') {
		loadSecondQuestions(writingQuestions, 'writingQuestions');
	} else if (responses.main == 'math') {
		loadSecondQuestions(mathQuestions, 'mathQuestions');
	} else if (responses.main == 'science') {
		loadScecondQuestions(scienceQuestions, 'scienceQuestions');
	} else if (responses.main == 'speaking') {
		loadSecondQuestions(speakingQuestions, 'speakingQuestions');
	} else {
		//questionArea.innerHTML = '';
		loadQuestions('');
  }
}

loadFirstQuestion();
