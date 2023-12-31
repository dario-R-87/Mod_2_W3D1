    const questions = [
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "What does CPU stand for?",
        correct_answer: "Central Processing Unit",
        incorrect_answers: [
          "Central Process Unit",
          "Computer Personal Unit",
          "Central Processor Unit",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
        correct_answer: "Final",
        incorrect_answers: ["Static", "Private", "Public"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "The logo for Snapchat is a Bell.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question:
          "Pointers were not used in the original C programming language; they were added later on in C++.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "What is the most preferred image format used for logos in the Wikimedia database?",
        correct_answer: ".svg",
        incorrect_answers: [".png", ".jpeg", ".gif"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "In web design, what does CSS stand for?",
        correct_answer: "Cascading Style Sheet",
        incorrect_answers: [
          "Counter Strike: Source",
          "Corrective Style Sheet",
          "Computer Style Sheet",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "What is the code name for the mobile operating system Android 7.0?",
        correct_answer: "Nougat",
        incorrect_answers: [
          "Ice Cream Sandwich",
          "Jelly Bean",
          "Marshmallow",
        ],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question: "On Twitter, what is the character limit for a Tweet?",
        correct_answer: "140",
        incorrect_answers: ["120", "160", "100"],
      },
      {
        category: "Science: Computers",
        type: "boolean",
        difficulty: "easy",
        question: "Linux was first created as an alternative to Windows XP.",
        correct_answer: "False",
        incorrect_answers: ["True"],
      },
      {
        category: "Science: Computers",
        type: "multiple",
        difficulty: "easy",
        question:
          "Which programming language shares its name with an island in Indonesia?",
        correct_answer: "Java",
        incorrect_answers: ["Python", "C", "Jakarta"],
      },
    ];

let scores = 0;

const responseHandler = function(ev, corAns){
 if(corAns === ev.target.innerText){
  scores += 1;
 }console.log(scores);
 clearInterval(t);
 clearInterval(t2);
}

const timerElem = document.querySelector("#timer");
let counter = 6;
timerElem.innerText = counter;

const timer = function(){
 if(counter===6)
  timerElem.classList.add("animation");
 counter -= 1;
 timerElem.innerText = counter;
 if(counter === 0){
  counter = 6;
  //clearInterval(t);
  timerElem.innerText = counter;
  timerElem.classList.remove("animation");
 }
}

const t = setInterval(timer,1000);

let qCount=0;
const quiz = function(){
 const q = document.querySelector("#question");
 //q.innerHTML = "";
 q.innerHTML = questions[qCount].question;

 const op = document.querySelector("#option");
 //op.innerHTM = "";
 op.innerHTML = `<button onclick="responseHandler(event,'${questions[qCount].correct_answer}')">${questions[qCount].correct_answer}</button>`;
	
 for(let y=0; y<questions[qCount].incorrect_answers.length; y++){
  op.innerHTML += `<button onclick="responseHandler(event,'${questions[qCount].correct_answer}')">${questions[qCount].incorrect_answers[y]}</button>`;
 }
 qCount += 1;
 if(qCount === questions.length){
  clearInterval(t2);
  clearInterval(t);
 }
}

const t2 = setInterval(quiz,6000);






