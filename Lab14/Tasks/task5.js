function copySorted(arr) {
    return arr.slice().sort()
}

function startCopySorted() {
    let arr = ["HTML", "JavaScript", "CSS"]
    let sorted = copySorted(arr)

    console.log(sorted)
    console.log(arr)
    console.log(`\n`)
}

startCopySorted()