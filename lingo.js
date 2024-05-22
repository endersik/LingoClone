const data = ["CHAIN", "AWARD", "JOINT", "PARTY", "WHEEL"]

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

const setLetters = () => {
    const row = document.getElementById("0")
    const cells = row.getElementsByTagName("span")
    for(let i=0; i<cells.length; i++){
        const letters = data[0].split("")
        cells[i].innerHTML = letters[i]
    }
}

createBoard()
setLetters()