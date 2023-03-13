const startBtn = document.querySelector(".startBtn")
const startSection = document.querySelector(".start")
const quiz = document.querySelector(".quiz")
const question = document.querySelector(".question")
const answerList = document.querySelector(".answerList")
let index = 0;
let score = 0;
let time = 60;

const values = [
    {
        questionValue: "How do you create a varibale in javascript?",
        answerValue: "C. var",
        choicesValue: ["A. function", "B. querySelector", "C. var", "D. {}"]
    },
    {
        questionValue: "What color is grass?",
        answerValue: "B. Green",
        choicesValue: ["A. Red", "B. Green", "C. Purple", "D. Brown"]
    }
]

startBtn.addEventListener("click", function() {
    var timeLeft = document.createElement("p").innerHTML = "Time: " + time
    quiz.append(timeLeft)
    startSection.style.display = "none"
    startQuiz(index)
})

function startQuiz(index) {
    question.innerHTML = "";
    answerList.innerHTML = "";
    question.innerHTML = values[index].questionValue
    const choices = values[index].choicesValue;
    choices.forEach((i) => {
        const li = document.createElement("li")
        li.innerHTML = i;
        answerList.append(li)
        li.addEventListener("click", function(event) {
            let clicked = event.target.innerHTML
            if(clicked === values[index].answerValue) {
                console.log("Correct")
                score = score + 1
            } else {
                console.log("Wrong")
                score = score - 1
            }
            console.log(score)
            if(index < values.length - 1) {
                index++;
                startQuiz(index)
            } else {
                index = 0
                console.log("Quiz is over")
            }
        })
    })
}

