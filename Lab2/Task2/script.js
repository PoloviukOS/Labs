let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt ea earum incidunt minima nihil. Blanditiis consectetur cumque debitis delectus dolor dolorem dolorum, eos laboriosam, modi nemo, quasi quos sint voluptatibus!`

// Subtask 1
let newIndexString = text[12] + text[6] + text[18] + text[25]
console.log(newIndexString)

// Subtask 2
let lowerCaseText = text.toLowerCase()
console.log(lowerCaseText)

// Subtask 3
let positions = []
for (let i = 0; i < text.length; i++) {
    if (text.substring(i, i + 2) === "in") {
        positions.push(i)
    }
}
console.log(positions)

// Subtask 4
let wordsArray = text.split(" ")
console.log(wordsArray)

// Subtask 5
let reversedText = text.split("").reverse().join("")
console.log(reversedText)

// Subtask 6
function ucFirst(txt) {
    return txt.charAt(0).toUpperCase() + txt.slice(1)
}
console.log(ucFirst('some text'))
