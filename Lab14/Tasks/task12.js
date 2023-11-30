function unique(arr) {
    return Array.from(new Set(arr))
}

function startUnique() {
    let strings = ["Привіт", "Світ", "Привіт", "Світ", "Привіт", "Привіт", "Світ", "Світ", ":-O"]
    console.log(unique(strings))
    console.log(`\n`)
}

startUnique()