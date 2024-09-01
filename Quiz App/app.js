const questions = [
    {
        question: "Q:1_Which type of JavaScript language is ___ ?",
        answers: [
            {text: "(A) Object-Oriented", correct: false},
            {text: "(B) Object-Based", correct: true},
            {text: "(C) Assembly-language", correct: false},
            {text: "(D) High-level", correct: false},
        ]
    },
    {
        question: "Q:2_Which data type in JavaScript is used to represent logical values? ",
        answers: [
            {text: "(A) String", correct: false},
            {text: "(B) Boolean", correct: true},
            {text: "(C) Number", correct: false},
            {text: "(D) Undefined", correct: false},
        ]
    },
    {
        question: "Q:3_Which operator is used to check both the value and the type of a variable in JavaScript? ",
        answers: [
            {text: "(A) ==", correct: false},
            {text: "(B) ===", correct: true},
            {text: "(C) !=", correct: false},
            {text: "(D) !==", correct: false},
        ]
    },
    {
        question: "Q:4_Which statement is used to execute a block of code multiple times in JavaScript? ",
        answers: [
            {text: "(A) for", correct: true},
            {text: "(B) if", correct: false},
            {text: "(C) return", correct: false},
            {text: "(D) break", correct: false},
        ]
    },
    {
        question: "Q:5_What is the purpose of a function in JavaScript? ",
        answers: [
            {text: "(A) To store data", correct: false},
            {text: "(B) To repeat a task multiple times", correct: false},
            {text: "(C) To encapsulate code that performs a specific task", correct: true},
            {text: "(D) To create web pages", correct: false},
        ]
    },
    {
        question: "Q:6_What does the splice method do in an array? ",
        answers: [
            {text: "(A) Copies a portion of an array", correct: false},
            {text: "(B) Concatenates arrays", correct: false},
            {text: "(C) Changes the content of an array", correct: true},
            {text: "(D) Finds an element in an array", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQustionIndex = 0;
let score = 0;

function startQuiz(){
    currentQustionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}

function showQuestion(){
    resetState()
    let currentQustion = questions[currentQustionIndex];
    let questionNo = currentQustionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQustion.question;


    currentQustion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQustionIndex++;
    if(currentQustionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }

}
nextButton.addEventListener("click", () =>{
    if(currentQustionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();