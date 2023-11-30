function groupById(arr) {
    return arr.reduce((acc, user) => {
        acc[user.id] = user
        return acc
    }, {})
}

function startGroupById() {
    let users = [
        { id: 'іван', name: "Іван Іванко", age: 20 },
        { id: 'ганна', name: "Ганна Іванко", age: 24 },
        { id: 'петро', name: "Петро Петренко", age: 31 },
    ]

    let usersById = groupById(users)

    console.log(usersById)
}

startGroupById()