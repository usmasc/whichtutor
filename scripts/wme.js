
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

Questions = [ 
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

Imports = [["Could not care less",1],["Don't care",2],["Might care",3],["Care",4],["Care a lot",5]];

responses = [];
importance = [];
results = [];

for (i = 0; i < Questions.length; i++) {
  responses.push(3);
  importance.push(3);
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
  chunk += '<p><button onclick="compareToCandidates()">Calculate</button></p>';
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
  var resultsStr = '<table><tr><th>Candidates</th>';
  var max = 20;
  var diff = 0;
  var weightedDiff = 0;
  var diffDiff = 0;
  var percent = 0;
  
  for (i = 0; i < Questions.length; i++) {
    resultsStr += '<th>' + Questions[i].Issue + '</th>';
  }
  resultsStr += '</tr>';
  for (i = 0; i < candidates.length; i++) {
    resultsStr += '<td>' + candidates[i].name + '</td>';
    for (j = 0; j < Questions.length; j++) {
      max = 4*importance[j]; // Maximum possible weighted difference
      diff = Math.abs(responses[j] - candidates[i].stances[j]); // difference between candidate score and your score
      weightedDiff = diff*importance[j]; // Difference weighted based on importance
      diffDiff = max - weightedDiff; // Difference between the max and weightedDiff
      results[i][j] = diffDiff;
      percent = Math.floor(diffDiff/max*100);
      
      resultsStr += '<td>' + percent.toString() + '%</td>';
    }
    resultsStr += '</tr>';
  }
  resultsStr += '</table>';
  document.getElementById("results").innerHTML = resultsStr;
  document.getElementById("test3").innerHTML = results;
};

loadQuestions();
