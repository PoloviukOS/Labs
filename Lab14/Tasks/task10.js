function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
}

function startShuffle() {
    let arr = [1, 2, 3]

    shuffle(arr)
    console.log(arr)
    shuffle(arr)
    console.log(arr)
    shuffle(arr)
    console.log(arr)
    console.log(`\n`)
}

startShuffle()