
// JSON example
var candidates = [ {
  "name": "Ellie Phanta",
  "party": "Republican",
  "stances" : [-2,-2]
  },
  {
  "name": "Jack Bass",
  "party": "Democrat",
  "stances" : [-2,-2]
  },
  {
  "name": "Paul Stanton",
  "party": "Libertarian",
  "stances" : [2,2]
  }
 ];

Questions = [ 
  {
  "Question" : "Should goods and services be provided by force?",
  "Responses" : [
    ["Absolutely",-2],
    ["Yes", -1],
    ["Maybe", 0],
    ["No", 1],
    ["Never", 2]]
},
   {
  "Question" : "Without government, Who will build the roads?",
  "Responses" : [
    ["No one at all",-2],
    ["Shady people you can't trust", -1],
    ["Someone might maybe possibly", 0],
    ["Construction companies", 1],
    ["Where we're going, we won't need roads.", 2]]
}            
];

Imports = [["Could not care less",1],["Don't care",2],["Might care",3],["Care",4],["Care a lot",5]];

responses = [];
importance = [];
results = [];

for (i = 0; i < Questions.length; i++) {
  responses.push(0);
  importance.push(0);
}

for (j = 0; j < candidates.length; j++) {
  results.push(responses);
}

function loadQuestions() {
  var chunk = '';
  for (i = 0; i < Questions.length; i++) {
    chunk += '<div id="q' + i + '>'; 
    chunk += '<p class="question">' + Questions[i].Question + '</p>';
    chunk += '<p class="answers">';
    for (j = 0; j < Questions[i].Responses.length; j++) {
     var qr = Questions[i].Responses[j];
     chunk += '<button onclick="tally(' + i + ',' + qr[1] + ')">' + qr[0] + '</button>';
    }
    chunk += '</p>';
    chunk += '<p class="importance">';
    for (k = 0; k < Imports.length; k++) {
     chunk += '<button onclick="tallyImports(' + i + ',' + Imports[k][1] + ')">' + Imports[k][0] + '</button>';
    }    
    chunk += '</p></div>';
  }
  chunk += '<p><button onclick="compareCandidates()">Calculate</button></p>';
  document.getElementById("questionArea").innerHTML = chunk;
};

function tally(questionNumber,response) {
  //qId = 'q' + questionNumber;
  responses[questionNumber] = response;
  document.getElementById("test").innerHTML = responses;
  //document.getElementById(qId).innerHTML = 'Response Recorded';
};

function tallyImports(questionNumber,response) {
  //qId = 'q' + questionNumber;
  importance[questionNumber] = response;
  document.getElementById("test2").innerHTML = importance;
  //document.getElementById(qId).innerHTML = 'Response Recorded';
};

function compareToCandidates() {
  for (i = 0; i < candidates.length; i++) {
    for (j = 0; j < Questions.length; j++) {
      max = 5*importance[j];
      results[i][j] = (max - Math.abs(responses[j] - candidates[i].stances[j]) * importance[j])/max;
    }
  }
  document.getElementById("test3").innerHTML = results;
};

loadQuestions();
