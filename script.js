let score = 0;
let index = 0;
let time = 60;
let pause = 0;
var timeLeft = document.createElement("p");
const startBtn = document.querySelector(".startBtn");
const startSection = document.querySelector(".start");
const quiz = document.querySelector(".quiz");
const question = document.querySelector(".question");
const answerList = document.querySelector(".answerList");
var timeLeft = document.createElement("p");

var values = [
  {
    questionValue: "How do you create a varibale in javascript?",
    answerValue: "C. var",
    choicesValue: ["A. function", "B. querySelector", "C. var", "D. {}"],
  },
  {
    questionValue: "What are the data types supported by JavaScript??",
    answerValue: "All above",
    choicesValue: ["A. Number", "B. Object", "C. String", "D. Symbol"],
  },
  {
    questionValue: "Push Means?",
    answerValue: "A. Add One or More Elements",
    choicesValue: [
      "A. Add One or More Elements",
      "B. Specified Value",
      "C. Reverses",
      "D. String",
    ],
  },
  {
    questionValue: "Reverse Means?",
    answerValue: "B. Elements of Array",
    choicesValue: [
      "A. Index",
      "B. Elements of Array",
      "C. Function",
      "D. object",
    ],
  },
  {
    questionValue: "NAN means?",
    answerValue: "C. Not a Number",
    choicesValue: [
      "A. error",
      "B. Valid Number",
      "C. Not a Number",
      "D. Converted",
    ],
  },
];

startBtn.addEventListener("click", function () {
  timer();
  startSection.style.display = "none";
  startQuiz(index);
});

function timer() {
  quiz.append(timeLeft);
  setInterval(function () {
    time--;
    timeLeft.innerHTML = "Time: " + time;
    if (time <= 0) {
      clearInterval(time);
      endQuiz();
      timeLeft.innerHTML = "Times Out!";
    }
  }, 1000)
};

function startQuiz(index) {
  question.innerHTML = "";
  answerList.innerHTML = "";
  question.innerHTML = values[index].questionValue;
  const choices = values[index].choicesValue;
  choices.forEach((i) => {
    const li = document.createElement("li");
    li.innerHTML = i;
    answerList.append(li);
    li.addEventListener("click", function (event) {
      var outcome = document.createElement("p");
      let clicked = event.target.innerHTML;
      if (clicked === values[index].answerValue) {
        console.log("Correct");
        score = score + 1;
        outcome.innerHTML = "Correct!";
        quiz.append(outcome);
      } else {
        console.log("Wrong");
        time = time - 10;
        outcome.innerHTML = "Incorrect";
        quiz.append(outcome);
      }
      console.log(score);
      if (index < values.length - 1) {
        setTimeout(function () {
          index++;
          outcome.innerHTML = "";
          startQuiz(index);
        }, 1000);
      } else {
        index = 0;
        quiz.innerHTML = "";
        endQuiz();
      }
    });
  });
}

function endQuiz() {
  var header = document.createElement("h1");
  header.innerHTML = "Quiz Over! You got a score of: " + score;
  quiz.append(header);
  var input = document.createElement("input");
  input.setAttribute("placeholder", "Initials");
  quiz.append(input);
  var button = document.createElement("button");
  button.innerHTML = "Submit";
  quiz.append(button);
  button.addEventListener("click", function () {
    var initials = input.value;
    var obj = {
      score: score,
      initials: initials,
    };
    localStorage.setItem("score", JSON.stringify(obj));
  });
  button.addEventListener("click", function () {
    var initials = input.value;
    if (initials === "") {
      console.log("No value entered!");
    } else {
      var finalScore = {
        initials: initials,
        score: time * 2,
      };
      console.log(finalScore);
      var allScores = localStorage.getItem("allScores");
      if (allScores === null) {
        allScores = [];
      } else {
        allScores = JSON.parse(allScores);
      }
      allScores.push(finalScore);
      var newScore = JSON.stringify(allScores);
      localStorage.setItem("allScores", newScore);
      window.location.replace("scores.html");
    }
  });
}
