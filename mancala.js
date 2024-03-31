// Declare global variables
let board; // The game board
let players = []; // The players' names
let currentPlayer = 0; // The index of the current player

// Function to start the game
function startGame() {
    // Prompt the user to enter the number of columns and parse it as an integer
    let cols = parseInt(prompt("Enter the number of columns:"));
    // Set the number of rows to 2
    let rows = 2;
    // Prompt the user to enter the names of the players
    players[0] = prompt("Enter the name of Player 1:");
    players[1] = prompt("Enter the name of Player 2:");
    // Create the game board as a 2D array with the specified number of columns and 2 rows
    // Each cell is initialized to 4, except for the bases which are initialized to 0
    board = Array(rows).fill().map(() => Array(cols + 2).fill(4)); // +2 for the bases
    board[0][0] = 0;
    board[0][cols + 1] = 0; // +1 to account for the base
    board[1][0] = 0;
    board[1][cols + 1] = 0; // +1 to account for the base
    // Build the game board
    buildBoard();
}

// Function to reset the game
function resetGame() {
    // Start a new game
    currentPlayer = 0;
    startGame();
}

// Function to build the game board
function buildBoard() {
    // Initialize the HTML string for the game board
    let strToShow = "<table border='1' id='board'>";
    // Loop over the rows of the game board
    for(let i = 0; i < board.length; i++) {
        // Add a new row to the HTML string
        strToShow += "<tr>";
        // Loop over the columns of the game board
        for(let j = 0; j < board[i].length; j++) {
            // Add a new cell to the HTML string
            // The cell has an onclick attribute that calls the OnClick function when the cell is clicked
            strToShow += "<td id='" + i + "-" + j + "' onclick='OnClick(this)'>";
            // If the cell is a base, add a div with the class 'mancala-store'
            // Otherwise, add a div with the class 'mancala-hole'
            if(j === 0 || j === board[i].length - 1) {
                strToShow += "<div class='mancala-store'>";
            } else {
                strToShow += "<div class='mancala-hole'>";
            }
            // If the cell is not empty, add an image with the number of stones in the cell
            if(board[i][j] !== 0) {
                strToShow += "<img src = images/" + board[i][j] + ".jpeg id='drag" + i + "-" + j + "'>";
            }
            // Close the div and the cell
            strToShow += "</div></td>";
        }
        // Close the row
        strToShow += "</tr>";
    }
    // Close the table
    strToShow += "</table>";
    // Set the innerHTML of the gameboard element to the HTML string
    document.getElementById("gameboard").innerHTML = strToShow;
    // Set the innerText of the player element to the name of the current player
    document.getElementById("player").innerText =   players[currentPlayer];
}

// Function to handle a click on a cell
function OnClick(t) {
    // Split the id of the cell on the '-' character to get the row and column indices
    let idParts = t.id.split("-");
    let row = parseInt(idParts[0]);
    let col = parseInt(idParts[1]);

    // If the cell is not in the current player's row, alert the user and return
    if(row !== currentPlayer) {
        alert("It's not your turn!");
        return;
    }

    // Get the number of stones in the cell and set the cell to empty
    let NumOfStones = board[row][col];    
    board[row][col] = 0;

    // If the cell is in the first column, move to the next row
    // If the cell is in the last column, move to the previous row
    if(col == 0)
        row++;
    else if(col == board[row].length - 1)
        row--;

    // If the cell is in the first row, distribute the stones to the left
    // If the cell is in the second row, distribute the stones to the right
    if(row == 0) {
        for(let i = 0; i < NumOfStones; i++) {
            col--;
            if(col == 0 || col == board[row].length - 1) {
                board[row][col] += (NumOfStones - i);
                break;
            }
            board[row][col]++;
        }
    } else if(row == 1) {
        for(let i = 0; i < NumOfStones; i++) {
            col++;
            if(col == 0 || col == board[row].length - 1) {
                board[row][col] += (NumOfStones - i);
                break;
            }
            board[row][col]++;
        }
    }

    // Switch to the other player
    currentPlayer = (currentPlayer + 1) % 2;
    // Rebuild the game board
    buildBoard();
    // Update the current player
    updateCurrentPlayer();
    // Check if the game has been won
    checkWin();
}

// Function to update the current player
function updateCurrentPlayer() {
    // Set the innerText of the player element to the name of the current player
    document.getElementById("player").innerText = players[currentPlayer];
}

// Function to check if the game has been won
function checkWin() {
    // Get the number of columns
    let cols = board[0].length;
    // If the first player's base has more than or equal to 4 times the number of columns, the first player wins
    // If the second player's base has more than or equal to 4 times the number of columns, the second player wins
    if(board[0][0] >= cols * 4) {
        alert(players[0] + " wins!");
    } else if(board[1][cols - 1] >= cols * 4) {
        alert(players[1] + " wins!");
    }
}

// Start the game
startGame();