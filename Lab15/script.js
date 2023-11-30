function exampleWithFinally() {
    try {
        console.log("Виконання коду")
        throw new Error("Error")
    } catch (error) {
        console.error("Обробка помилок:", error.message)
        return
    } finally {
        console.log("Очищення ресурсів")
    }
}

function exampleWithoutFinally() {
    try {
        console.log("Виконання коду")
        throw new Error("Error")
    } catch (error) {
        console.error("Обробка помилок:", error.message)
        return
    }
    console.log("Очищення ресурсів")
}

console.log("Приклад з finally:")
exampleWithFinally()

console.log("\nПриклад без finally:")
exampleWithoutFinally()
