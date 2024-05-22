const data = ["CHAIN", "AWARD", "JOINT", "PARTY", "WHEEL"]
let viewData = [".", ".", ".", ".", "."]
let answer = [" "]

const input = document.getElementById("guess")
const submit = document.getElementById("submit")

const menu = document.getElementById("menu")
const exit = document.getElementById("exit")

menu.addEventListener("click", () => window.location = "menu.html")
exit.addEventListener("click", () => window.location = "board.html")

const gameBoard = document.querySelector(".rows")
const startRows = ["", "", "", "", ""]
let rowElement
let rowNum = 0 // Specifies the target row in setLetters()
let userInput = [" "]
let isStart = true

const createBoard = () => {
    startRows.forEach((row, index) => {
        rowElement = document.createElement("div")
        rowElement.classList.add("row")
        rowElement.id = "row" + index // Creates distinct names for row elements by adding suffix numbers
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

// This function uses `Math.random()` to generate a random decimal number
// between 0 (inclusive) and 1 (exclusive). It then multiplies this number
// by `max` to get a value within the range [0, max)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

const setAnswer = () => {
    answer = data[getRandomInt(5)].split("")
}


const setLetters = (index) => {
    const row = document.getElementById("row" + String(index))
    const cells = row.getElementsByTagName("span")
        for(let i=0; i<cells.length; i++){
            if(isStart) {
                // Assigns the first letter of the answer to viewData
                viewData[0] = answer[0]
                isStart = !isStart
            }
            const letters = viewData
            cells[i].innerHTML = letters[i]
        }
        rowNum++
        controlAnswer()
}

submit.addEventListener("click", () => {
    userInput = input.value.toUpperCase().split("")
    userInput.forEach((letter, index) => {
        letter === answer[index] ? viewData[index] = letter : true;
        
    })
    setLetters(rowNum)
})

const controlAnswer = () => {
    let isCorrect = JSON.stringify(answer) == JSON.stringify(viewData) ? true : false;
    isCorrect || rowNum > 4 ?  window.location = "board.html" : true;
}

createBoard()
setAnswer()
setLetters(rowNum)
