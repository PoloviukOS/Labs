// Task 1
const textOutput = (text, size) => {
    result.innerHTML = text
    result.style = "font-size: " + size + "px"
}

// Task 2
const generateTable = (tableText) => {
    var lines = tableText.split('\n')
    
    var table = '<table>'
    for (var i = 0; i < lines.length; i++) {
        var words = lines[i].split(' ')
        table += '<tr>'
        for (var j = 0; j < words.length; j++) {
            table += '<td>' + words[j] + '</td>'
        }
        table += '</tr>'
    }
    table += '</table>'
    
    document.getElementById('outputTable').innerHTML = table
}

// Task 3
const createHeaders = (num) => {
    var previousHeaders = document.querySelectorAll("header")
    previousHeaders.forEach((header) => { header.remove() })

    for(let i = 1; i <= num; i++) {
        var header = document.createElement("header")
        header.setAttribute("id", "myHeader")
        document.body.appendChild(header)
    
        var h = document.createElement("H2")
        var headerText = document.createTextNode(`Header ${i}`)
        h.appendChild(headerText)
    
        document.getElementById("myHeader").appendChild(h)
    }
}

// Task 4
const handleClick = (textOptions) => {
    let args = textOptions.split(',')
  
    let numbers = []
    let words = []
  
    for (let arg of args) {
        let trimmedArg = arg.trim()
  
        if (!isNaN(trimmedArg)) {
            numbers.push(Number(trimmedArg))
        } else {
            words.push(trimmedArg)
        }
    }
  
    let maxNumber = Math.max(...numbers)
    let sum = numbers.reduce((acc, curr) => acc + curr, 0)
    let sentence = words.join(' ')
  
    alert("sum = " + sum + '\nmaxNumber = ' + maxNumber + '\nsentence = ' + sentence)
}