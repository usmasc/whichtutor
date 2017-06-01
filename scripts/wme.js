// JSON example
var candidates = [ {
  "name": "Ellie Phanta",
  "party": "Republican",
  "stances" : [1,1]
  },
  {
  "name": "Jack Bass",
  "party": "Democrat",
  "stances" : [1,1]
  },
  {
  "name": "Paul Stanton",
  "party": "Libertarian",
  "stances" : [5,5]
  }
 ];

var Questions = [ 
  {
  "Issue" : "Force",
  "Question" : "Should goods and services be provided by force?",
  "Responses" : [
    ["Absolutely",1],
    ["Yes", 2],
    ["Maybe", 3],
    ["No", 4],
    ["Never", 5]]
},
   {
  "Issue" : "Roads",
  "Question" : "Without government, Who will build the roads?",
  "Responses" : [
    ["No one at all",1],
    ["Shady people you can't trust", 2],
    ["Someone might maybe possibly", 3],
    ["Construction companies", 4],
    ["Where we're going, we won't need roads.", 5]]
}            
];

var Imports = [["Could not care less",1],["Don't care",2],["Might care",3],["Care",4],["Care a lot",5]];

var responses = [];
var importance = [];
var results = [];
var perc = 50;

for (i = 0; i < Questions.length; i++) {
  responses.push(3);
  importance.push(3);
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
  chunk += '<p><button onclick="compareToCandidates()">Calculate</button></p>';
  document.getElementById("questionArea").innerHTML = chunk;
  document.getElementById("test3").innerHTML = results;
};

function tally(questionNumber,response) {
  //qId = 'q' + questionNumber;
  responses[questionNumber] = response;
  document.getElementById("test2").innerHTML = responses;
  document.getElementById("test").innerHTML = 'Response Recorded';
};

function tallyImports(questionNumber,response) {
  importance[questionNumber] = response;
  document.getElementById("test2").innerHTML = importance;
  document.getElementById("test").innerHTML = 'Response Recorded';
};

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
  
function calcDiff(c,q) {
  var maxD = maxDiff(q); // Maximum possible difference
  var dif = Math.abs(responses[q] - candidates[c].stances[q]); // difference between candidate score and your score 
  var wDif = (maxD-dif)*importance[q]; // Difference weighted based on importance
  perc = 100 - (Math.round(dif / maxD * 10) * 10);
  //document.getElementById("test").innerHTML = perc;
  results[c] += wDif;
};
  
function compareToCandidates() {
  results = [];
  for (j = 0; j < candidates.length; j++) {
    results.push(0);
  }
  
  var resultsStr = '<table><tr><th>Candidates</th>';
  for (i = 0; i < Questions.length; i++) {
    resultsStr += '<th>' + Questions[i].Issue + '</th>';    
  }
  resultsStr += '</tr>';
  
  for (i = 0; i < candidates.length; i++) {
    resultsStr += '<tr><td>' + candidates[i].name + '</td>';
    for (j = 0; j < Questions.length; j++) {
      calcDiff(i,j);
      resultsStr += '<td>' + perc.toString() + '%</td>';  
    }
    resultsStr += '</tr>';
  }
  resultsStr += '</table>';
  document.getElementById("results").innerHTML = resultsStr;
  document.getElementById("test3").innerHTML = results;
};

loadQuestions();
