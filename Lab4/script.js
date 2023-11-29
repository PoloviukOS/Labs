function start() {
    postfixAndPrefixForms()
    AssignmentResult()
    typeConversion()
    additionCorrection()
}
start()

function postfixAndPrefixForms() {
    let a = 1, b = 1
    let c = ++a
    let d = b++

    console.log()
    console.log("Відповідь (\"Постфіксна та префіксна форми\"):", c, d)
}

function AssignmentResult() {
    let a = 2
    let x = 1 + (a *= 2)

    console.log("Відповідь (\"Результат присвоєння\"):", a, x)
}

function typeConversion() {
    console.log("Відповідь (\"Перетворення типу\"):")
    console.log("" + 1 + 0)
    console.log("" - 1 + 0)
    console.log(true + false)
    console.log(6 / "3")
    console.log("2" * "3")
    console.log(4 + 5 + "px")
    console.log("$" + 4 + 5)
    console.log("4" - 2)
    console.log("4px" - 2)
    console.log("  -9  " + 5)
    console.log("  -9  " - 5)
    console.log(null + 1)
    console.log(undefined + 1)
    console.log(" \t \n" - 2)
}

function additionCorrection() {
    let a = prompt("Перше число?", 1)
    let b = prompt("Друге число?", 2)

    a = parseInt(a)
    b = parseInt(b)

    alert("Відповідь (\"Виправлення додавання\"): " + (a + b))
}