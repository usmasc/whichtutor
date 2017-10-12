var tutors = [
  {
    name: "Adam",
    main: ["Geography", "Speaking", "Writing"],
    subjects: ["Geography"],
    prefsub: ["Geography","Speaking"],
    cite: [],
    morning: ['morning run'],
    turtle: ['Raphael'],
    artist: ['Leonardo'],
    pony: ["Apple Jack"],
    titan: ['Cyborg'],
    score: 0,
    bio:
      "Adam is a Geography major. He tutors Geography, speaking, and writing. He also likes to code. He's a Veteran. He's involved with GTU, EcoEagles, SGA, and Southern Connection. Adam prefers that you hit reply and not reply all when you reply to emails."
  },
  {
    name: "Aleysh",
    main: ["Chemistry"],
    subjects: ["Chemistry", "CHEM 100", "CHEM 104"],
    prefsub: ["Chemistry"],
    cite: [],
    morning: [],
    turtle: ['Donatello'],
    artist: ['Leonardo'],
    pony: ['Apple Jack'],
    titan: ['Raven'],
    score: 0,
    bio:
      "Aleysh is a Chemistry tutor. She is also involved in Sigma Mu: Science and Math Club."
  },
  {
    name: "Casey",
    main: ["Chemistry"],
    subjects: ["Chemistry", "CHEM 100", "CHEM 104"],
    prefsub: [],
    cite: [],
    morning: ["morning run"],
    turtle: ["Michelangelo"],
    artist: ['Leonardo'],
    pony: ["Pinkie Pie"],
    titan: ['Beast Boy'],
    score: 0,
    bio: "Casey is Casey. Once you get to know him, you'll understand."
  },
  {
    name: "Dane",
    main: ["Math", "Writing","Chemistry"],
    subjects: [
      "Math",
      "Calculus",
      "Algebra",
      "Intermediate Algebra",
      "College Algebra",
      "Business Calculus",
      "Trigonometry",
      "Business Calculus",
      "Intermediate Algebra",
      "College Algebra",
      "Linear Programming",
      "Algebra",
      "Writing",
      "Chemistry"
    ],
    prefsub: [
      "Math",
      "Calculus",
      "Algebra",
      "Intermediate Algebra",
      "College Algebra",
      "Business Calculus",
      "Trigonometry",
      "Business Calculus",
      "Intermediate Algebra",
      "College Algebra",
      "Linear Programming",
      "Algebra",
      "Writing",
      "Chemistry"],
    cite: [],
    morning: ['bacon'],
    turtle: ['Raphael'],
    artist: ['Leonardo'],
    pony: ['Twilight Sparkle'],
    titan: ['Ravin'],
    score: 0,
    bio:
      'Dane is shockingly old compared to the rest of the tutors. He likes to call it "more experienced." Born and raised in Pennsylvania, went to college in Michigan and now pursuing a degree in computer science at Southern Miss, he is ready to address all your homework needs. Enjoys baked goods.'
  },
  {
    name: "Elizabeth",
    main: ["Math","study skills"],
    subjects: [
      "Math",
      "Algebra",
      "Intermediate Algebra",
      "College Algebra",
      "Business Calculus"
    ],
    prefsub: ["Intermediate Algebra", "College Algebra", "Business Calculus"],
    cite: [],
    morning: ["hot tea"],
    turtle: ["Michelangelo"],
    artist: ["Raphael"],
    pony: ["Fluttershy"],
    titan: ["Starfire"],
    score: 0,
    bio:
      "Elizabeth is a marketing major who enjoys tutoring Intermediate Algebra, College Algebra, and Brief Applied Calculus (Business Calculus)."
  },
  {
    name: "Grace",
    main: ["Chemistry"],
    subjects: ["Chemistry", "CHEM 100", "CHEM 104"],
    prefsub: ["Chemistry"],
    cite: [],
    morning: ["morning run"],
    turtle: ["Leonardo"],
    artist: ["Donatello"],
    pony: ["Twilight SParkle"],
    titan: ["Cyborg"],
    score: 0,
    bio: "Grace tutors chemistry. It's true. She does."
  },
  {
    name: "Heather",
    main: ["Biology"],
    subjects: ["Biology","General Biology"],
    prefsub: ["Biology","General Biology"],
    cite: [],
    morning: ["coffee"],
    turtle: ["Michelangelo"],
    artist: ["Leonardo"],
    pony: ["Twilight Sparkle"],
    titan: ["Robin"],
    score: 0,
    bio: "Heather can't wait to help you learn."
  },
  {
    name: "Autumn",
    main: ["Biology","Writing","study skills"],
    subjects: ["Biology","General Biology","Writing"],
    prefsub: ["Biology","Writing"],
    cite: ['CSE','MLA'],
    morning: ['coffee',"shower"],
    turtle: ['Michelangelo'],
    artist: ['Michelangelo','Raphael'],
    pony: ['Twilight Sparkle'],
    titan: ['Starfire'],
    score: 0,
    bio: "Autumn tutors writing, biology, and study skills. As an ocean lover and a shark advocate, she wants you to know that Jaws is propaganda. Autumn is an ESFJ on the Myers-Briggs."
  },
  {
    name: "Jonathan",
    main: ["Writing", "Spanish"],
    subjects: ["Speaking", "Writing", "Spanish"],
    prefsub: ["Writing","Spanish"],
    cite: ["MLA"],
    morning: ["coffee"],
    turtle: ["Donatello"],
    artist: ["Raphael"],
    pony: ["Apple Jack"],
    titan: ["Raven"],
    score: 0,
    bio: "Jonathan tutors in writing and Spanish. He is a Junior studying English With Licensure to teach. He enjoys reading books and talking about them. "
  },
  {
    name: "Leah",
    main: ["Speaking", "Writing"],
    subjects: ["English", "Education","Writing"],
    prefsub: ["Writing"],
    cite: ["MLA"],
    morning: ['hot tea','podcast'],
    turtle: ['Michelangelo'],
    artist: ['Michelangelo'],
    pony: ['Rainbow Dash'],
    titan: ['Raven'],
    score: 0,
    bio: "Leah is an English Education major who enjoys sleeping, podcasts, hangout out with friends, and shopping for pens."
  },
  {
    name: "Samantha",
    main: ["Chemistry"],
    subjects: ["Chemistry", "CHEM 100", "CHEM 104", "General Chemistry"],
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
    main: ["Stats", "SPSS", "Research methods"],
    subjects: ["Stats", "SPSS", "Research methods"],
    prefsub: ["Stats", "SPSS", "Research methods"],
    cite: [],
    morning: ['morning run'],
    turtle: ['Donatello'],
    artist: ['Rapheal'],
    pony: ['Fluttershy'],
    titan: ['Starfire'],
    score: 0,
    bio: "Saurabh is just awesome."
  },
  {
    name: "Scott",
    main: ["Math", "Stats"],
    subjects: [
      "Math",
      "Stats",
      "Calculus",
      "Algebra",
      "Intermediate Algebra",
      "College Algebra",
      "Business Calculus",
      "Business Stats"
    ],
    prefsub: ["Business Calculus", "Business Stats"],
    cite: ["APA"],
    morning: ["bacon"],
    turtle: ["Donatello"],
    artist: ["Leonardo"],
    pony: ["Rainbow Dash"],
    titan: ["Raven"],
    score: 0,
    bio:
      "Scott is an Air Force Veteran. He wants to teach Math and a little bit of programming too. He made this quiz."
  },
  {
    name: "Teneala",
    main: ["Math", "Spanish", "Computer Science"],
    subjects: ["Math", "Calculus", "Algebra", "Business Calculus","Trigonometry","Linear Programming", "Spanish"],
    prefsub: ["Math", "Calculus", "Algebra", "Business Calculus", "Trigonometry", "Spanish"],
    cite: [],
    morning: ["morning run"],
    turtle: ['Michelangelo'],
    artist: ['Donatello'],
    pony: ['Apple Jack'],
    titan: ['Robin'],
    score: 0,
    bio:
      "Teneala is majoring in Computer Science and Spanish with a minor in Math as part of her plot for world domination. We're not kidding."
  },
  {
    name: "Veronica",
    main: ["Math"],
    subjects: ["Math", "Calculus", "Algebra", "Business Calculus"],
    prefsub: [],
    cite: [],
    morning: [],
    turtle: ['Leonardo'],
    artist: ['Rapheal'],
    pony: ['Apple Jack'],
    titan: ['Robin'],
    score: 0,
    bio:
      "Veronica is a Veteran. She is now majoring in Geography. She was an accounting major, but Geography is awesome. So there!"
  },
  {
    name: "Zachary Ransom",
    main: ["Speaking", "Writing", "Psychology"],
    subjects: ["Speaking", "Writing", "Psychology", "Academic Research"],
    prefsub: ["Psychology"],
    cite: ["APA"],
    morning: ["coffee", "bacon"],
    turtle: ["Raphael"],
    artist: ["Michelangelo"],
    pony: ["Twilight Sparkle"],
    titan: ["Cyborg"],
    pooh: ["Tigger","Owl"],
    score: 0,
    bio:
      "<p>Zachary Ransom is currently a Senior majoring in Psychology.  His focus within the field of psychology is currently focused on Applied Behavioral Analysis with the intent of pursuing a Ph.D. in School Psychology.  In accordance with these goals, he is currently a clinical intern and conducting the research for his senior thesis at USM's Autism Project.</p><p>A desire to serve his community led him to become a paramedic and now serves as his inspiration to push forward with his current academic pursuits.   This also serves as his inspiration to be a tutor.  He takes pride in being able to offer assistance and help his fellow students fulfill their academic potential and achieve success.  His strategy for tutoring centers around this concept.  His main goal is to help those that he tutors realize what strategies work well for them and to then help them hone those talents.</p>"
  },
  {
    name: "Zachary Stewart",
    main: ["Speaking", "Writing","study skills"],
    subjects: ["Speaking", "Writing", "Political Science", "History","study skills"],
    prefsub: ["Political Science","History"],
    cite: ["Turabian"],
    morning: ['coffee'],
    turtle: ['Donatello'],
    artist: ['Michelangelo'],
    pony: ['Apple Jack'],
    titan: ['Robin'],
    score: 0,
    bio: "Zach is one of our graduate assistants. He also tutors speaking, writing, and study skills."
  }
];

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
    ]var tutors = [
  {
    name: "Adam",
    main: ["Geography", "Speaking", "Writing"],
    subjects: ["Geography"],
    prefsub: ["Geography","Speaking"],
    cite: [],
    morning: ['morning run'],
    turtle: ['Raphael'],
    artist: ['Leonardo'],
    pony: ["Apple Jack"],
    titan: ['Cyborg'],
    score: 0,
    bio:
      "Adam is a Geography major. He tutors Geography, speaking, and writing. He also likes to code. He's a Veteran. He's involved with GTU, EcoEagles, SGA, and Southern Connection. Adam prefers that you hit reply and not reply all when you reply to emails."
  },
  {
    name: "Aleysh",
    main: ["Chemistry"],
    subjects: ["Chemistry", "CHEM 100", "CHEM 104"],
    prefsub: ["Chemistry"],
    cite: [],
    morning: [],
    turtle: ['Donatello'],
    artist: ['Leonardo'],
    pony: ['Apple Jack'],
    titan: ['Raven'],
    score: 0,
    bio:
      "Aleysh is a Chemistry tutor. She is also involved in Sigma Mu: Science and Math Club."
  },
  {
    name: "Casey",
    main: ["Chemistry"],
    subjects: ["Chemistry", "CHEM 100", "CHEM 104"],
    prefsub: [],
    cite: [],
    morning: ["morning run"],
    turtle: ["Michelangelo"],
    artist: ['Leonardo'],
    pony: ["Pinkie Pie"],
    titan: ['Beast Boy'],
    score: 0,
    bio: "Casey is Casey. Once you get to know him, you'll understand."
  },
  {
    name: "Dane",
    main: ["Math", "Writing","Chemistry"],
    subjects: [
      "Math",
      "Calculus",
      "Algebra",
      "Intermediate Algebra",
      "College Algebra",
      "Business Calculus",
      "Trigonometry",
      "Business Calculus",
      "Intermediate Algebra",
      "College Algebra",
      "Linear Programming",
      "Algebra",
      "Writing",
      "Chemistry"
    ],
    prefsub: [
      "Math",
      "Calculus",
      "Algebra",
      "Intermediate Algebra",
      "College Algebra",
      "Business Calculus",
      "Trigonometry",
      "Business Calculus",
      "Intermediate Algebra",
      "College Algebra",
      "Linear Programming",
      "Algebra",
      "Writing",
      "Chemistry"],
    cite: [],
    morning: ['bacon'],
    turtle: ['Raphael'],
    artist: ['Leonardo'],
    pony: ['Twilight Sparkle'],
    titan: ['Ravin'],
    score: 0,
    bio:
      'Dane is shockingly old compared to the rest of the tutors. He likes to call it "more experienced." Born and raised in Pennsylvania, went to college in Michigan and now pursuing a degree in computer science at Southern Miss, he is ready to address all your homework needs. Enjoys baked goods.'
  },
  {
    name: "Elizabeth",
    main: ["Math","study skills"],
    subjects: [
      "Math",
      "Algebra",
      "Intermediate Algebra",
      "College Algebra",
      "Business Calculus"
    ],
    prefsub: ["Intermediate Algebra", "College Algebra", "Business Calculus"],
    cite: [],
    morning: ["hot tea"],
    turtle: ["Michelangelo"],
    artist: ["Raphael"],
    pony: ["Fluttershy"],
    titan: ["Starfire"],
    score: 0,
    bio:
      "Elizabeth is a marketing major who enjoys tutoring Intermediate Algebra, College Algebra, and Brief Applied Calculus (Business Calculus)."
  },
  {
    name: "Grace",
    main: ["Chemistry"],
    subjects: ["Chemistry", "CHEM 100", "CHEM 104"],
    prefsub: ["Chemistry"],
    cite: [],
    morning: ["morning run"],
    turtle: ["Leonardo"],
    artist: ["Donatello"],
    pony: ["Twilight SParkle"],
    titan: ["Cyborg"],
    score: 0,
    bio: "Grace tutors chemistry. It's true. She does."
  },
  {
    name: "Heather",
    main: ["Biology"],
    subjects: ["Biology","General Biology"],
    prefsub: ["Biology","General Biology"],
    cite: [],
    morning: ["coffee"],
    turtle: ["Michelangelo"],
    artist: ["Leonardo"],
    pony: ["Twilight Sparkle"],
    titan: ["Robin"],
    score: 0,
    bio: "Heather can't wait to help you learn."
  },
  {
    name: "Autumn",
    main: ["Biology","Writing","study skills"],
    subjects: ["Biology","General Biology","Writing"],
    prefsub: ["Biology","Writing"],
    cite: ['CSE','MLA'],
    morning: ['coffee',"shower"],
    turtle: ['Michelangelo'],
    artist: ['Michelangelo','Raphael'],
    pony: ['Twilight Sparkle'],
    titan: ['Starfire'],
    score: 0,
    bio: "Autumn tutors writing, biology, and study skills. As an ocean lover and a shark advocate, she wants you to know that Jaws is propaganda. Autumn is an ESFJ on the Myers-Briggs."
  },
  {
    name: "Jonathan",
    main: ["Writing", "Spanish"],
    subjects: ["Speaking", "Writing", "Spanish"],
    prefsub: ["Writing","Spanish"],
    cite: ["MLA"],
    morning: ["coffee"],
    turtle: ["Donatello"],
    artist: ["Raphael"],
    pony: ["Apple Jack"],
    titan: ["Raven"],
    score: 0,
    bio: "Jonathan tutors in writing and Spanish. He is a Junior studying English With Licensure to teach. He enjoys reading books and talking about them. "
  },
  {
    name: "Leah",
    main: ["Speaking", "Writing"],
    subjects: ["English", "Education","Writing"],
    prefsub: ["Writing"],
    cite: ["MLA"],
    morning: ['hot tea','podcast'],
    turtle: ['Michelangelo'],
    artist: ['Michelangelo'],
    pony: ['Rainbow Dash'],
    titan: ['Raven'],
    score: 0,
    bio: "Leah is an English Education major who enjoys sleeping, podcasts, hangout out with friends, and shopping for pens."
  },
  {
    name: "Samantha",
    main: ["Chemistry"],
    subjects: ["Chemistry", "CHEM 100", "CHEM 104", "General Chemistry"],
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
    main: ["Stats", "SPSS", "Research methods"],
    subjects: ["Stats", "SPSS", "Research methods"],
    prefsub: ["Stats", "SPSS", "Research methods"],
    cite: [],
    morning: ['morning run'],
    turtle: ['Donatello'],
    artist: ['Rapheal'],
    pony: ['Fluttershy'],
    titan: ['Starfire'],
    score: 0,
    bio: "Saurabh is just awesome."
  },
  {
    name: "Scott",
    main: ["Math", "Stats"],
    subjects: [
      "Math",
      "Stats",
      "Calculus",
      "Algebra",
      "Intermediate Algebra",
      "College Algebra",
      "Business Calculus",
      "Business Stats"
    ],
    prefsub: ["Business Calculus", "Business Stats"],
    cite: ["APA"],
    morning: ["bacon"],
    turtle: ["Donatello"],
    artist: ["Leonardo"],
    pony: ["Rainbow Dash"],
    titan: ["Raven"],
    score: 0,
    bio:
      "Scott is an Air Force Veteran. He wants to teach Math and a little bit of programming too. He made this quiz."
  },
  {
    name: "Teneala",
    main: ["Math", "Spanish", "Computer Science"],
    subjects: ["Math", "Calculus", "Algebra", "Business Calculus","Trigonometry","Linear Programming", "Spanish"],
    prefsub: ["Math", "Calculus", "Algebra", "Business Calculus", "Trigonometry", "Spanish"],
    cite: [],
    morning: ["morning run"],
    turtle: ['Michelangelo'],
    artist: ['Donatello'],
    pony: ['Apple Jack'],
    titan: ['Robin'],
    score: 0,
    bio:
      "Teneala is majoring in Computer Science and Spanish with a minor in Math as part of her plot for world domination. We're not kidding."
  },
  {
    name: "Veronica",
    main: ["Math"],
    subjects: ["Math", "Calculus", "Algebra", "Business Calculus"],
    prefsub: [],
    cite: [],
    morning: [],
    turtle: ['Leonardo'],
    artist: ['Rapheal'],
    pony: ['Apple Jack'],
    titan: ['Robin'],
    score: 0,
    bio:
      "Veronica is a Veteran. She is now majoring in Geography. She was an accounting major, but Geography is awesome. So there!"
  },
  {
    name: "Zachary Ransom",
    main: ["Speaking", "Writing", "Psychology"],
    subjects: ["Speaking", "Writing", "Psychology", "Academic Research"],
    prefsub: ["Psychology"],
    cite: ["APA"],
    morning: ["coffee", "bacon"],
    turtle: ["Raphael"],
    artist: ["Michelangelo"],
    pony: ["Twilight Sparkle"],
    titan: ["Cyborg"],
    pooh: ["Tigger","Owl"],
    score: 0,
    bio:
      "<p>Zachary Ransom is currently a Senior majoring in Psychology.  His focus within the field of psychology is currently focused on Applied Behavioral Analysis with the intent of pursuing a Ph.D. in School Psychology.  In accordance with these goals, he is currently a clinical intern and conducting the research for his senior thesis at USM's Autism Project.</p><p>A desire to serve his community led him to become a paramedic and now serves as his inspiration to push forward with his current academic pursuits.   This also serves as his inspiration to be a tutor.  He takes pride in being able to offer assistance and help his fellow students fulfill their academic potential and achieve success.  His strategy for tutoring centers around this concept.  His main goal is to help those that he tutors realize what strategies work well for them and to then help them hone those talents.</p>"
  },
  {
    name: "Zachary Stewart",
    main: ["Speaking", "Writing","study skills"],
    subjects: ["Speaking", "Writing", "Political Science", "History","study skills"],
    prefsub: ["Political Science","History"],
    cite: ["Turabian"],
    morning: ['coffee'],
    turtle: ['Donatello'],
    artist: ['Michelangelo'],
    pony: ['Apple Jack'],
    titan: ['Robin'],
    score: 0,
    bio: "Zach is one of our graduate assistants. He also tutors speaking, writing, and study skills."
  }
];
