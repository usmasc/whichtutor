// array of additional question catergories
var questionCats = ["morning", "turtle", "artist", "pony", "titan"];

// additional questions
var Questions = [
  {
    id: "morning",
    question: "Your favorite part of your morning routine",
    responses: ["coffee", "morning run", "bacon", "hot tea"]
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
  main: "",
  subject: "",
  cite: "",
  morning: "",
  turtle: "",
  artist: "",
  pony: "",
  titan: ""
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
    "Research methods",
    "study skills"
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
      "Psychology",
      "Biology",
      "Political Science",
      "other"
    ]
  },
    {
    id: "cite",
    question: "What is the citation style?",
    responses: [
      "APA",
      "MLA",
      "CSE",
      "Turabian",
      "other"
    ]
  }
];


var studyQuestions = [
  {
    id: "subject",
    question: "What subject do you need help with?",
    responses: [
      "English",
      "History",
      "Science",
      "Geography",
      "Psychology",
      "Biology",
      "Political Science",
      "other"
    ]
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
      "Intermediate Algebra",
      "College Algebra",
      "Linear Programming",
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
