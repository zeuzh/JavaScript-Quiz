const startBtn = document.querySelector(".startBtn")
const startSection = document.querySelector(".start")
const quiz = document.querySelector(".quiz")
const question = document.querySelector(".question")
const answerList = document.querySelector(".answerList")
let index = 0;
let score = 0;
let time = 60;
setTimeout(() => {
console.log("hello")
},60);
let counter =0;
setInterval(count,1000);
function count () {
    console.log(counter++);
}

const values = [
    {
        questionValue: "How do you create a varibale in javascript?",
        answerValue: "C. var",
        choicesValue: ["A. function", "B. querySelector", "C. var", "D. {}"]
    },
    {
        questionValue: "What are the data types supported by JavaScript??",
        answerValue: "All above",
        choicesValue: ["A. Number", "B. Object", "C. String", "D. Symbol"]
    },
    {
        questionValue: "Push Means?",
        answerValue: "A. Add One or More Elements",
        choicesValue: ["A. Add One or More Elements", "B. Specified Value", "C. Reverses", "D. String"]
    
    },
    {
]       questionValue: "Reverse Means?",
        answerValue: "B. Elements of Array",
        choicesValue: ["A. Index", "B. Elements of Array", "C. Function", "D. object"]
   
    },
    {   
        questionValue: "NAN means?",
        answerValue: "C. Not a Number",
        choicesValue: ["A. error", "B. Valid Number", "C. Not a Number", "D. Converted"]    


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

