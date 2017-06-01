
// JSON example
var candidates = [ {
  "name": "Ellie Phanta",
  "party": "Republican",
  "stance1" : -2
  },
  {
  "name": "Jack Bass",
  "party": "Democrat",
  "stance1" : -2
  },
  {
  "name": "Paul Stanton",
  "party": "Libertarian",
  "stance1" : 2
  }
 ];

Questions = [ {
  "Question" : "Should goods and services be provided by force?",
  "Responses" : [
    ["Absolutely",-2],
    ["Yes", -1],
    ["Maybe", 0],
    ["No", 1],
    ["Never", 2]]
}
];

function loadQuestions() {
  var chunk = '';
  for (i = 0; i < Questions.length; i++) {
    chunk += '<p class="question">' + Questions[i].Question + '</p>';
    chunk += '<p class="answers">";
    for (j = 0; j < Questions[i].Responses.length; j++) {
     var qr = Questions[i].Responses[j];
     chunk += '<button onclick="tally(' + i + ',' + qr[1] + ')">' + qr[0] + '</button>';
    }
    document.getElementById("questionArea") = chunk;
    
  }
}
