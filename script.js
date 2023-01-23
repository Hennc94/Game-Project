let playerPurple = "P"
let playerGreen = "G"
let currPlayer = playerPurple
let gameOver = false
let rows = 6
let columns = 7
let currColumns = [] //keeps track of which row each column is at

window.onload = function () {
  playerGame()
}

function playerGame() {
  board = []
  currColumns = [5, 5, 5, 5, 5, 5, 5]
  //separate array for the height of each column so that all pieces start at index 5 (bottom of board)
  for (let r = 0; r < rows; r++) {
    let row = []
    for (let c = 0; c < columns; c++) {
      //
      row.push(' ')
      // HTML elements
      //<div id="0-0" class="tile"></div> -JS will append all divs
      let tile = document.createElement("div")
      tile.id = r.toString() + "-" + c.toString()
      tile.classList.add("tile")
      tile.addEventListener("click", placePiece)
      document.getElementById("board").append(tile)
    }
    board.push(row)
  }
}

function placePiece() {
  if (gameOver) {
    return
  }

  //get space of that tile clicked
  let space = this.id.split("-")
  let r = parseInt(space[0])
  let c = parseInt(space[1])

  // figure out which row the current column should be on
  r = currColumns[c]

  if (r < 0) { // board[r][c] != ' '
    return
  }

  board[r][c] = currPlayer //update board
  let tile = document.getElementById(r.toString() + "-" + c.toString())
  if (currPlayer == playerPurple) {
    tile.classList.add("purple-piece")
    currPlayer = playerGreen
  }
  else {
    tile.classList.add("green-piece")
    currPlayer = playerPurple
  }

  r -= 1 //updated the row height for that column
  currColumns[c] = r //updated the array

  checkWinner()
}

//Window sliding
function checkWinner() {
  // horizontal check (checking four spaces at a time at indices 0-3, when row has been checked, move down one row)
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns - 3; c++) {
      if (board[r][c] != ' ') {
        if (board[r][c] == board[r][c + 1] && board[r][c + 1] == board[r][c + 2] && board[r][c + 2] == board[r][c + 3]) {
          playerWinner(r, c)
          return
        }
      }
    }
  }

  // vertical check (checking four spaces at a time at indices 0-3, w)
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows - 3; r++) {
      if (board[r][c] != ' ') {
        if (board[r][c] == board[r + 1][c] && board[r + 1][c] == board[r + 2][c] && board[r + 2][c] == board[r + 3][c]) {
          playerWinner(r, c)
          return
        }
      }
    }
  }

  // reverse diagonal check (starting from top and going down diagonally four tiles down since we only need to match four)
  for (let r = 0; r < rows - 3; r++) {
    for (let c = 0; c < columns - 3; c++) {
      if (board[r][c] != ' ') {
        if (board[r][c] == board[r + 1][c + 1] && board[r + 1][c + 1] == board[r + 2][c + 2] && board[r + 2][c + 2] == board[r + 3][c + 3]) {
          playerWinner(r, c)
          return
        }
      }
    }
  }

  // diagonal check (starting from bottom and going up diagonally four tiles down since we only need to match four)
  for (let r = 3; r < rows; r++) {
    for (let c = 0; c < columns - 3; c++) {
      if (board[r][c] != ' ') {
        if (board[r][c] == board[r - 1][c + 1] && board[r - 1][c + 1] == board[r - 2][c + 2] && board[r - 2][c + 2] == board[r - 3][c + 3]) {
          playerWinner(r, c)
          return
        }
      }
    }
  }
}

function playerWinner(r, c) {
  let winner = document.getElementById("winner")
  if (board[r][c] == playerPurple) {
    winner.innerText = "Purple Wins"
  } else {
    winner.innerText = "Green Wins"
  }
  gameOver = true
}

function reset(){
  board.innerHTML="" 
  loadDOM() 
  restart.style.display="none" 
  }

// let turn = 1
// document.querySelectorAll("ul li").forEach((e) => {
//   e.addEventListener("click", () => {
//   console.log(e.id)
//    if(turn % 2 != 0) {
//       document.getElementById(e.id).style.backgroundColor = "purple"
//       turn++
//       //check('purple')
//       document.getElementById("playersturn").innerText = "Blue's Turn"
//     }
//     else if (turn % 2 == 0) {
//       document.getElementById(e.id).style.backgroundColor = "blue"
//       turn++
//       //check('blue')
//       document.getElementById("playersturn").innerText = "Purple's Turn"
//     }
//   })
// })






















































