function Calculator() {
    this.methods = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
    }

    this.calculate = function (str) {
        let split = str.split(' ')
        let a = +split[0]
        let operator = split[1]
        let b = +split[2]

        if (!this.methods[operator] || isNaN(a) || isNaN(b)) return NaN

        return this.methods[operator](a, b)
    }

    this.addMethod = function (name, func) {
        this.methods[name] = func
    }
}

function startCalculator() {
    let calc = new Calculator()
    console.log(calc.calculate("3 + 7"))

    let powerCalc = new Calculator()
    powerCalc.addMethod("*", (a, b) => a * b)
    powerCalc.addMethod("/", (a, b) => a / b)
    powerCalc.addMethod("**", (a, b) => a ** b)

    let result = powerCalc.calculate("2 ** 3")
    console.log(result)
    console.log(`\n`)
}

startCalculator()