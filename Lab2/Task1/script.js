// Subtask 1
var firstParagraph = document.getElementById("firstParagraph")
var secondParagraph = document.getElementById("secondParagraph")
var thirdParagraph = document.getElementById("thirdParagraph")

document.body.style.fontFamily = "Arial"

firstParagraph.style.color = "orange"
firstParagraph.style.backgroundColor = "yellow"
firstParagraph.style.fontSize = "16px"
firstParagraph.style.padding = "5px"
firstParagraph.style.textAlign = "center"

secondParagraph.style.color = "blue"
secondParagraph.style.backgroundColor = "lightblue"
secondParagraph.style.fontSize = "14px"
secondParagraph.style.padding = "5px"
secondParagraph.style.textAlign = "right"

thirdParagraph.style.color = "red"
thirdParagraph.style.backgroundColor = "lightcoral"
thirdParagraph.style.fontSize = "12px"
thirdParagraph.style.padding = "5px"
thirdParagraph.style.textAlign = "left"

// Subtask 2
var table = document.getElementById("table")
var rows = table.getElementsByTagName("tr")

for (var i = 0; i < rows.length; i++) {
    var cells = rows[i].getElementsByTagName("td")
    for (var j = 0; j < cells.length; j++) {
        if ((i + j) % 2 === 0) {
            cells[j].classList.add("selected")
        }
    }
}