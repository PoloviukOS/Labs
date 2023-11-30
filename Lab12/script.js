class Student {
    constructor(lastName, firstName, mathGrade, historyGrade, jsGrade) {
        this.lastName = lastName
        this.firstName = firstName
        this.mathGrade = mathGrade
        this.historyGrade = historyGrade
        this.jsGrade = jsGrade
    }
}

class ListOfStudents {
    constructor(students) {
        this.students = students
    }

    createTable() {
        const table = document.createElement('table')
        table.classList.add('table')
        table.innerHTML = `
            <thead>
                <tr>
                    <th>Last Name</th>
                    <th>First Name</th>
                    <th>Math</th>
                    <th>History</th>
                    <th>JS</th>
                    <th>Average</th>
                </tr>
            </thead>
            <tbody></tbody>
        `
        document.body.appendChild(table)
    }

    populateTableBody() {
        const tableBody = document.querySelector('.table tbody')
        this.students.forEach((student) => {
            const row = document.createElement('tr')
            row.innerHTML = `
                <td>${student.lastName}</td>
                <td>${student.firstName}</td>
                <td>${student.mathGrade}</td>
                <td>${student.historyGrade}</td>
                <td>${student.jsGrade}</td>
                <td></td>
            `
            tableBody.appendChild(row)
        })
    }

    applyStyles() {
        const styles = document.createElement('style')
        styles.textContent = `
            .table {
                border-collapse: collapse;
            }
            .table th, .table td {
                padding: 8px;
                border: 1px solid black;
            }
            .table th {
                color: white;
                background: #808080;
            }
            .table td {
                color: #000000;
            }
        `
        document.head.appendChild(styles)
    }

    getTableList() {
        this.createTable()
        this.applyStyles()
        this.populateTableBody()
    }
}

class StylesTable extends ListOfStudents {
    constructor(students) {
        super(students)
    }

    populateAverageCells() {
        const averageCells = document.querySelectorAll('.table tbody td:last-child')
        averageCells.forEach((cell, index) => {
            const student = this.students[index]
            const average = this.getAvg([student.mathGrade, student.historyGrade, student.jsGrade])
            cell.textContent = average.toFixed(2)
        })
    }

    getTotalAvg() {
        const averageCells = document.querySelectorAll('.table tbody td:last-child')
        const averages = Array.from(averageCells).map((cell) => parseFloat(cell.textContent))
        const totalSum = averages.reduce((acc, average) => acc + average, 0)
        const totalAvg = totalSum / averages.length

        document.body.insertAdjacentHTML('beforeend', `<p>Середній бал по групі: ${totalAvg.toFixed(2)}</p>`)
    }

    getAvg(grades) {
        const sum = grades.reduce((acc, grade) => acc + grade, 0)
        return sum / grades.length
    }

    getTableList() {
        super.getTableList()
        this.populateAverageCells()
        this.getTotalAvg()
    }
}

const students = [
    new Student('Федорко', 'Петро', 3, 4, 5),
    new Student('Остапенко', 'Сергій', 4, 5, 5),
    new Student('Колос', 'Олеся', 4, 3, 3)
]

const stylesTable = new StylesTable(students)
stylesTable.getTableList()
