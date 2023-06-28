// 07-Project-RockPapperScissors.md

//User Choice function
let userChoice = window.prompt("Choose your option", "rock,paper or scissors?");

//Computer Choice function
let computerChoice = "";
function randomNumber () {  
        computerChoice = (Math.floor(Math.random()*3+1));
  return;
}
randomNumber();
console.log(computerChoice);
console.log(userChoice);




/* The Math.floor() static method always rounds down and returns the largest integer less than or 
equal to a given number.
console.log(Math.floor(5.95)); Expected output: 5
console.log(Math.floor(-5.05)); Expected output: -6 */

//The parseInt() function parses a string argument and returns an integer

/*
If you want to ensure that the prompt appears after the h1 tag, you can modify your JavaScript code
accordingly. One way to achieve this is by adding an event listener that triggers the prompt after 
the page has fully loaded, such as when a button is clicked or a specific event occurs. 
Here's an example using a button click event:

html:
<body>
  <h1>ROCK, PAPER, SCISSORS</h1>
  <button id="startButton">Start Game</button>
  <script src="script.js"></script>
</body>

JS:
document.getElementById('startButton').addEventListener('click', function() {
  var userInput = prompt('Enter your name:');
});
*/