// Task 1 
function findDates() {
    var text = document.getElementById("text_with_dates").value
    var regex = /\d{4}-\d{2}-\d{2}/g
    var dates = text.match(regex)

    if (!dates) return alert("У тексті не знайдено дат у форматі РРРР-ММ-ДД!")

    alert("Знайдені дати: " + dates.join(", "))
}

// Task 2
function toCamelCase() {
    var snakeCase = prompt("Введіть ім'я змінної у стилі 'snake_case':")

    var regex = /_([a-z])/g
    var camelCase = snakeCase.replace(regex, function (match, letter) {
        return letter.toUpperCase()
    })

    alert("Результат перетворення у стиль 'lowerCamelCase': " + camelCase)
}

// Task 3
function toSnakeCase() {
    var camelCase = prompt("Введіть ім'я змінної у стилі 'lowerCamelCase':")

    var regex = /([A-Z])/g
    var snakeCase = camelCase.replace(regex, function (match) {
        return "_" + match.toLowerCase()
    })

    alert("Результат перетворення у стиль 'snake_case': " + snakeCase)
}

// Task 4
function findHexColor() {
    var text = document.getElementById("text_with_color").value
    var regex = /#([A-Fa-f0-9]{3}){1,2}\b/g
    var colors = text.match(regex)

    if (!colors) return alert("У тексті не знайдено колірів у форматі #ABC або #ABCDEF!")

    alert("Знайдені коліри: " + colors.join(", "))
}