const questions=[
  {
    question:"which is largest animal in the world? ",
    answers:[
      { text:"Shark",correct: false },
      { text:"Blue whale",correct: true},
      { text:"Elephant",correct: false },
      { text:"Giraffe",correct: false },
    ]
  },
  {
    question:"which is largest state in the world? ",
    answers:[
      { text:"Rajasthan",correct: true },
      { text:"Maharashtra",correct: false },
      { text:"Goa",correct: false },
      { text:"Kerala",correct: false },
    ]

  },
  {
    question:"which is smallest continent in the world? ",
    answers:[
      { text:"Asia",correct: false },
      { text:"Australia",correct: true},
      { text:"Arctic",correct: false },
      { text:"Africa",correct: false },
    ]
  },
  {
    question:"Which planet is known as the "Red Planet"?,
    answers:[
      { text:"Jupiter",correct: false },
      { text:"Mars",correct: true },
      { text:"Earth",correct: false },
      { text:"Venus",correct: false },
    ]
  }
  
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score= 0;
function startQuiz(){
  currentQuestionIndex = 0;
  score= 0;
  nextButton.innerHTML = "Next";
  showQuestion();

}
function showQuestion(){
  let currentQuestion= questions[currentQuestionINdex];
  let questionNo = currentQuestionIndex +1;
  questionElement.innerHTML=questionNo+"."+currentQuestion.
  question;
  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.classList.add("btn");
    answerButton.appendChild(button);

  });


}
startQuiz();

