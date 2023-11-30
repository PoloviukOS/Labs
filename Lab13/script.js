// Task 1
function displayCurrentDate() {
    const currentDate = new Date()
    const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }
  
    const formattedDate = currentDate.toLocaleString('uk-UA', options)
    const text = `Дата: ${formattedDate}<br>День тижня: ${getWeekday(currentDate)}<br>Час: ${getTime(currentDate)}`
  
    firstAnswer.innerHTML = text
}
  
function getWeekday(date) {
    const weekdays = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'пʼятниця', 'субота']
    const weekdayIndex = date.getDay()
    return weekdays[weekdayIndex]
}
  
function getTime(date) {
    const hour = date.getHours().toString().padStart(2, '0')
    const minute = date.getMinutes().toString().padStart(2, '0')
    return `${hour}:${minute}`
}

// Task 2
function formatDateString() {
    const dateString = prompt("Введіть дату (дд.мм.рррр, дд/мм/рррр або дд-мм-рррр):")
    
    if (!isValidDateFormat(dateString)) {
        secondAnswer.innerHTML = "Помилка в даті!"
        return
    }
    
    const currentDate = new Date()
    const enteredDate = parseDate(dateString)

    let result = determineDateDifference(currentDate, enteredDate)

    secondAnswer.innerHTML = result
}

function isValidDateFormat(dateString) {
    const regex = /^(0[1-9]|[12][0-9]|3[01])[./-](0[1-9]|1[0-2])[./-]\d{4}$/;
    return regex.test(dateString);
}

function parseDate(dateString) {
    const [day, month, year] = dateString.split(/[./-]/).map(part => parseInt(part))
    return new Date(year, month - 1, day)
}

function determineDateDifference(currentDate, enteredDate) {
    const timeDifference = currentDate.getTime() - enteredDate.getTime()
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24))

    if (isToday(currentDate, enteredDate)) return "Сьогодні"
    if (isYesterday(currentDate, enteredDate)) return "Вчора"
    if (isWithinPastDays(daysDifference, 2, 6)) return `${daysDifference} д. тому`
    if (isWithinPastDays(daysDifference, 7, 365)) return "Тиждень тому, або більше тиждня тому"
    if (isWithinPastDays(daysDifference, 366, Infinity)) return "Рік тому, або більше року тому"
    
    return formatDate(enteredDate)
}

function isToday(currentDate, enteredDate) {
    return currentDate.toDateString() === enteredDate.toDateString()
}

function isYesterday(currentDate, enteredDate) {
    const yesterday = new Date(currentDate)
    yesterday.setDate(yesterday.getDate() - 1)
    return yesterday.toDateString() === enteredDate.toDateString()
}

function isWithinPastDays(daysDifference, minDays, maxDays) {
    return daysDifference >= minDays && daysDifference <= maxDays
}

function formatDate(date) {
    return `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, "0")}.${date.getDate().toString().padStart(2, "0")}`
}

