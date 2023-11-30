var score = 0;
var currentQuestion = 0;
var questions = [];
var isCheckBtnClicked = false;

var scoreDisplay = document.getElementById("score");
var nextBtn = document.getElementById("nextBtn");
var taskDisplay = document.getElementById("task");
var answerInput = document.getElementById("answerInput");
var checkBtn = document.getElementById("checkBtn");
var resultDisplay = document.getElementById("result");

function generateQuestions() {
    for (var i = 1; i <= 10; i++) {
        const number1 = Math.floor(Math.random() * 10) + 1;
        const number2 = Math.floor(Math.random() * 10) + 1;
        const answer = number1 * number2;
        const task = `${i}) ${number1} x ${number2} = `;
        questions.push({ task, answer });
    }
}

function showQuestion() {
    const { task } = questions[currentQuestion];
    taskDisplay.textContent = task;
    answerInput.value = "";
    resultDisplay.textContent = "";
    isCheckBtnClicked = false;
    checkBtn.disabled = false;
    answerInput.disabled = false;
    nextBtn.disabled = true;
}

function checkAnswer() {
    if (!isCheckBtnClicked) {
        isCheckBtnClicked = true;
        checkBtn.disabled = true;

        const userAnswer = parseInt(answerInput.value);
        const { answer } = questions[currentQuestion];
        resultDisplay.textContent = userAnswer === answer ? "Вірно!" : "Невірно!";
        score += userAnswer === answer ? 1 : 0;
        scoreDisplay.textContent = score;
        nextBtn.disabled = false;
        answerInput.disabled = true;
    }
}

function showNextQuestion() {
    currentQuestion++;
    if (currentQuestion !== questions.length) return showQuestion();

    nextBtn.disabled = true;
    resultDisplay.textContent = `Тест завершено! Загальний рахунок: ${score}/10`;
}

generateQuestions();
showQuestion();

nextBtn.addEventListener("click", showNextQuestion);
checkBtn.addEventListener("click", checkAnswer);
