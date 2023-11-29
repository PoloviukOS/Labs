// Task 1
const firstButton = document.getElementById("firstButton")

firstButton.onclick = () => {
    const number = +prompt("Введіть двозначне число:")

    if (isNaN(number) || number < 10 || number > 99) return alert("Невірне введення! Будь ласка, введіть двозначне число!")

    const result = convertToText(number)
    alert(result)
}

function convertToText(number) {
    const units = ["", "один", "два", "три", "чотири", "п'ять", "шість", "сімь", "вісім", "дев'ять", "десять", "одинадцять", "дванадцять", "тринадцять", "чотирнадцять", "п'ятнадцять", "шістнадцять", "сімнадцять", "вісімнадцять", "дев'ятнадцять"]
    const tens = ["", "", "двадцять", "тридцять", "сорок", "п'ятдесят", "шістдесят", "сімдесят", "вісімдесят", "дев'яносто"]

    const unitDigit = number % 10
    const tensDigit = Math.floor(number / 10)

    let text = ""

    if (tensDigit === 1) {
        text = units[number]
    } else {
        text = tens[tensDigit] + " " + units[unitDigit]
    }

    return text
}

// Task 2
const secondButton = document.getElementById("secondButton")

secondButton.onclick = () => {
    const style = prompt("Введіть назву CSS-стилю з дефісом:")
    const convertedStyle = toCamelCase(style)

    alert(`Результат: ${convertedStyle}`)
}

function toCamelCase(style) {
    return style.replace(/-([a-z])/g, (match, letter) => {
        return letter.toUpperCase();
    })
}

// Task 3
const thirdButton = document.getElementById("thirdButton")

thirdButton.onclick = () => {
    const style = prompt("Введіть назву CSS-стилю в CamelCase:")
    const convertedStyle = toKebabCase(style)

    alert(`Результат: ${convertedStyle}`)
}

function toKebabCase(style) {
    return style.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
}

// Task 4
const fourthButton = document.getElementById("fourthButton")

fourthButton.onclick = () => {
    const expression = prompt("Введіть приклад:")
    const result = calculate(expression)

    alert(`Результат: ${result}`)
}

function calculate(expression) {
    if (!/^[0-9+\-*/.() ]+$/.test(expression)) return 'Невірний приклад'

    let result = eval(expression)

    if (Number.isNaN(result) || !Number.isFinite(result)) return 'Невірний приклад'

    return result
}

// Task 5
const fifthButton = document.getElementById("fifthButton")

fifthButton.onclick = () => {
    const text = prompt("Введіть дату (рррр/мм/дд):")

    const formattedText = text.replace(/\d{4}\/\d{2}\/\d{2}/g, (match) => {
        const [year, month, day] = match.split('/')
        return `${day}.${month}.${year}`
    })

    alert(formattedText)
}