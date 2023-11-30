function sortByAge(users) {
    users.sort((a, b) => a.age - b.age)
}

function startSortByAge() {
    let ivan = { name: "Іван", age: 25 }
    let petro = { name: "Петро", age: 30 }
    let mariya = { name: "Марія", age: 28 }
    let arr = [petro, ivan, mariya]

    sortByAge(arr)

    console.log(arr);
    console.log(arr[0].name)
    console.log(arr[1].name)
    console.log(arr[2].name)
    console.log(`\n`)
}

startSortByAge()