// Task 1 - http://plnkr.co/edit/QMnlU1GSUul4II7xJy6X?p=preview
const uniqueElementsButton = document.getElementById("uniqueElementsBtn")

uniqueElementsButton.onclick = () => {
    let strings = ["C++", "C#", "C++", "C#", "C", "C++", "JavaScript", "C++", "JavaScript"]
    alert(unique(strings))
}

function unique(arr) {
    return Array.from(new Set(arr))
}

// Task 2
const sessionButton = document.getElementById("sessionBtn")
const board = document.querySelector('.board')
const session = [
    { discipline: "Укр. мова", points: 80, result: "зараховано" },
    { discipline: "Біологія", points: 50, result: "незараховано" },
    { discipline: "Математика", points: 90, result: "зараховано" },
    { discipline: "Інформатика", points: 60, result: "зараховано" }
]

sessionButton.onclick = () => {
    addDiscipline("Математика", 10)
    addDiscipline("Англ. мова", 34)
    displayDisciplines(session)
    calculateAveragePoints()
    countFailedDisciplines()
    findHighestScoringDiscipline()
    findDisciplinesByPoints(60)
}

function displayDisciplines(session) {
    const passedDisciplines = session.filter((item) => item.result === "зараховано")
    const failedDisciplines = session.filter((item) => item.result === "незараховано")

    board.innerHTML = "<h3>Зараховані дисципліни:</h3>"
    passedDisciplines.forEach((item) => {
        board.innerHTML += `<p>${item.discipline}: ${item.points} балів</p>`
    })

    board.innerHTML += "<h3>Незараховані дисципліни:</h3>"
    failedDisciplines.forEach((item) => {
        board.innerHTML += `<p>${item.discipline}: ${item.points} балів</p>`
    })
}

function addDiscipline(disciplineName, points) {
    const existingDiscipline = session.find((item) => item.discipline === disciplineName)

    if (existingDiscipline) {
        existingDiscipline.points += points

        if (existingDiscipline.points >= 60) {
            existingDiscipline.result = "зараховано"
        }
    } else {
        let total = points >= 60 ? "зараховано" : "незараховано"
        const newDiscipline = {
            discipline: disciplineName,
            points: points,
            result: total
        }
        session.push(newDiscipline)
    }
}

function calculateAveragePoints() {
    const totalPoints = session.reduce((sum, item) => sum + item.points, 0)
    const averagePoints = totalPoints / session.length
    board.innerHTML += `<h3>Середній бал з усіх дисциплін: ${averagePoints}</h3>`
}

function countFailedDisciplines() {
    const failedDisciplines = session.filter((item) => item.result === "незараховано")
    board.innerHTML += `<h3>Кількість незарахованих дисциплін: ${failedDisciplines.length}</h3>`
}

function findHighestScoringDiscipline() {
    let highestScoringDiscipline = null
    let highestScore = -Infinity

    for (let i = 0; i < session.length; i++) {
        const discipline = session[i]

        if (discipline.points > highestScore) {
            highestScore = discipline.points
            highestScoringDiscipline = discipline.discipline
        }
    }

    board.innerHTML += `<h3>Дисципліна з найвищим балом: ${highestScoringDiscipline}</h3>`
}

function findDisciplinesByPoints(targetPoints) {
    const passedDisciplines = session.filter((item) => item.points === targetPoints)
    const disciplineNames = passedDisciplines.map((item) => item.discipline)

    board.innerHTML += `<h3>Дисципліни, що здані на ${targetPoints} балів:</h3>`
    disciplineNames.forEach((discipline) => {
        board.innerHTML += `<p>${discipline}</p>`
    })
}
