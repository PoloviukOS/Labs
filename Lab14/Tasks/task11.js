function getAverageAge(users) {
    if (users.length === 0) return 0

    const sumOfAges = users.reduce((sum, user) => sum + user.age, 0)
    const averageAge = sumOfAges / users.length

    return averageAge
}

function startGetAverageAge() {
    let john = { name: "John", age: 25 }
    let pete = { name: "Pete", age: 30 }
    let mary = { name: "Mary", age: 29 }
    let arr = [john, pete, mary]

    console.log(getAverageAge(arr))
    console.log(`\n`)
}

startGetAverageAge()