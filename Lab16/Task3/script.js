let score = 0;
let currentQuestion = 0;
const questions = [];
const answerDisplays = Array.from({ length: 4 }, (_, i) => document.getElementById(`answer${i + 1}`));

const scoreDisplay = document.getElementById("score");
const nextBtn = document.getElementById("nextBtn");
const taskDisplay = document.getElementById("task");
const answersForm = document.getElementById("answersForm");
const resultDisplay = document.getElementById("result");

function generateQuestions() {
    for (let i = 1; i <= 10; i++) {
        const number1 = Math.floor(Math.random() * 10) + 1;
        const number2 = Math.floor(Math.random() * 10) + 1;
        const answer = number1 * number2;
        const options = generateOptions(answer);
        const task = `${i}) ${number1} x ${number2} = `;
        questions.push({ task, answer: answer.toString(), options });
    }
}

function generateOptions(answer) {
    const options = [answer.toString()];
    while (options.length < 4) {
        const randomOption = (Math.floor(Math.random() * 100) + 1).toString();
        if (!options.includes(randomOption)) {
            options.push(randomOption);
        }
    }
    return shuffleArray(options);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showQuestion() {
    const { task, options } = questions[currentQuestion];
    taskDisplay.textContent = task;
    options.forEach((option, index) => answerDisplays[index].textContent = option);
    answersForm.reset();
    resultDisplay.textContent = "";
    nextBtn.disabled = true;

    const radioButtons = document.querySelectorAll('input[name="answer"]');
    radioButtons.forEach(radioButton => {
        radioButton.addEventListener('change', () => {
            nextBtn.disabled = false;
            radioButtons.forEach(rb => rb.disabled = rb !== radioButton);
        });
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (selectedOption) {
        const userAnswer = selectedOption.nextElementSibling.textContent;
        const { answer } = questions[currentQuestion];
        resultDisplay.textContent = userAnswer === answer ? "Вірно!" : "Невірно!";
        score += userAnswer === answer ? 1 : 0;
        scoreDisplay.textContent = score;
        nextBtn.disabled = false;
    }
}

function showNextQuestion() {
    currentQuestion++;
    if (currentQuestion !== questions.length) {
        document.querySelectorAll('input[name="answer"]').forEach(rb => rb.disabled = false);
        showQuestion();
    } else {
        nextBtn.disabled = true;
        resultDisplay.textContent = `Тест завершено! Загальний рахунок: ${score}/10`;
    }
}

generateQuestions();
showQuestion();

nextBtn.addEventListener("click", showNextQuestion);
answersForm.addEventListener("change", checkAnswer);