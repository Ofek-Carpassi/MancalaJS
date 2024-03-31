# Mancala JS
This is a simple implementation of the classic "Mancala" game. <br>
It is written in JavaScript and uses the HTML5 canvas for rendering. <br>

## How to Play
The game is played on a board with two rows of six holes. <br>
Each hole contains a certain number of stones. <br>
The goal is to capture more stones than your opponent. <br>
You can move the stones by clicking on the holes. <br>
When you click on a hole, the stones in that hole will be distributed counterclockwise, one by one, into the other holes. <br>
If the last stone lands in an empty hole on your side, you capture that stone and all the stones in the opposite hole. <br>
If the last stone lands in your Mancala, you get another turn. <br>
If the last stone lands in an empty hole on your opponent's side, the turn ends. <br>
The game ends when all the holes on one side are empty. <br>
The player with the most stones in their Mancala wins. <br>

## How to run
Just open the `mancala.html` file in your browser. <br>

## Code structure
- `mancala.html` - The main HTML file that contains the canvas element and the JavaScript code.
- `mancala.js` - The main JavaScript file that contains the game logic.
- `style.css` - The CSS file that contains the styling for the game.

## Future improvements
- Add a score system.
- Add a timer.
- Add a "New Game" button.
- Add a "Restart" button.
- Add a "Undo" button.
- Add a "Save Game" button.
- Add a "Load Game" button.
- Add a "Settings" button.
- Add a "Help" button.
- Add a "High Scores" button.
- Add a "Leaderboard" button.

## Contributing
Feel free to contribute to this project. <br>
Please open an issue if you have any suggestions or find any bugs. <br>

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.