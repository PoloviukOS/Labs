const showMessageWhenIfRowWithZeroButton = document.getElementById('showMessageWhenIfRowWithZeroBtn')
const showFullNameJavaScriptButton = document.getElementById('showFullNameJavaScriptBtn')
const showTheSignButton = document.getElementById('showTheSignBtn')
const showMessageOnCensusIfOnQuestionMarkButton = document.getElementById('showMessageOnCensusIfOnQuestionMarkBtn')
const showMessageOnCensusIfElseOnQuestionMarkButton = document.getElementById('showMessageOnCensusIfElseOnQuestionMarkBtn')

// Task 1
showMessageWhenIfRowWithZeroButton.onclick = () => {
    if ("0") {
        alert('Привіт')
    }
}

// Task 2
showFullNameJavaScriptButton.onclick = () => {
    let nameJS = prompt('Яка "офіційна" назва JavaScript?')

    if (nameJS === 'ECMAScript') {
        alert('Правильно!')
    } else {
        alert('Ви не знаєте? ECMAScript!')
    }
}

// Task 3
showTheSignButton.onclick = () => {
    let num = prompt('Введіть число:')

    if (num > 0) {
        alert(1)
    } else if (num < 0) {
        alert(-1)
    } else if (num == 0) {
        alert(0)
    } else {
        alert("Ви ввели не цифру!")
    }
}

// Task 4
showMessageOnCensusIfOnQuestionMarkButton.onclick = () => {
    let a = Number(prompt("Введіть значення для a:"))
    let b = Number(prompt("Введіть значення для b:"))
    
    let result = (a + b < 4) ? 'Нижче' : 'Вище'
    
    alert(result)
}

// Task 5
showMessageOnCensusIfElseOnQuestionMarkButton.onclick = () => {
    let login = prompt("Введіть login:")

    let message = (login === 'Працівник') ? 'Привіт' : (login === 'Директор') ? 'Вітаю' : (login === '') ? 'Немає логіну' : ''
    
    alert(message)
}
