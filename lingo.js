const gameBoard = document.querySelector(".rows")
const startRows = ["", "", "", "", ""]
let rowElement

const createBoard = () => {
    startRows.forEach((row, index) => {
        rowElement = document.createElement("div")
        rowElement.classList.add("row")
        rowElement.id = index
        createCells()
        gameBoard.append(rowElement)
    })
}

const createCells = () => {
    startRows.forEach((cell, index) => {
        const cellElement = document.createElement("span")
        cellElement.classList.add("cell")
        cellElement.id = index
        rowElement.append(cellElement)
    })
}

createBoard()