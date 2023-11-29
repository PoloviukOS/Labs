function start() {
    firstTask()
    console.log(`\n`)
    secondTask()
    console.log(`\n`)
    thirdTask()
    console.log(`\n`)
    fourthTask()
}
start()

function firstTask() {
    let animal = {
        jumps: null
    }
    let rabbit = {
        __proto__: animal,
        jumps: true
    }

    console.log("First rabbit.jumps:", rabbit.jumps)
    delete rabbit.jumps
    console.log("Second rabbit.jumps:", rabbit.jumps)
    delete animal.jumps
    console.log("Third rabbit.jumps:", rabbit.jumps)
}

function secondTask() {
    let head = {
        glasses: 1
    }
    let table = {
        pen: 3
    }
    let bed = {
        sheet: 1,
        pillow: 2
    }
    let pockets = {
        money: 2000
    }

    // Subtask 2.1
    pockets.__proto__ = bed
    bed.__proto__ = table
    table.__proto__ = head

    console.log("pockets.pen:", pockets.pen)
    console.log("bed.glasses", bed.glasses)

    // Subtask 2.2
    let iterations = 1000000

    let startHead = performance.now()
    for (let i = 0; i < iterations; i++) {
        let value = head.glasses
    }
    let endHead = performance.now()
    console.log("Time for head.glasses:", endHead - startHead, "ms")

    let startPockets = performance.now()
    for (let i = 0; i < iterations; i++) {
        let value = pockets.glasses
    }
    let endPockets = performance.now()
    console.log("Time for pockets.glasses:", endPockets - startPockets, "ms")
}

function thirdTask() {
    let animal = {
        eat() {
            this.full = true;
        }
    };

    let rabbit = {
        __proto__: animal
    };

    rabbit.eat();

    console.log("rabbit.full:", rabbit.full)
    console.log("animal.full:", animal.full)
}

function fourthTask() {
    let hamster = {
        stomach: [],

        eat(food) {
            this.stomach.push(food)
        }
    }

    let speedy = {
        __proto__: hamster,
        stomach: []
    }

    let lazy = {
        __proto__: hamster,
        stomach: []
    }

    speedy.eat("apple")

    console.log("speedy.stomach:", speedy.stomach)
    console.log("lazy.stomach:", lazy.stomach)
}