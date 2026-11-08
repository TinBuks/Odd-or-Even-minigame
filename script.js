const input = require("@mimo-org/input");
let playerWins = 0;
let computerWins = 0;
let rounds = 0;

while (rounds < 3) {
  const playerChoice = input("Choose odd or even ");
  let playerNumber = parseInt(input("Choose a number between 1 and 5: "));
  let computerNumber = Math.floor(Math.random() * 5) + 1;
  const computerChoice = playerChoice === "odd" ? "even" : "odd";
  const sum = playerNumber + computerNumber;
  const result = sum % 2 === 0 ? "even" : "odd";
  console.log("Players Choice: " + playerChoice + ", Computers Choice: " + computerChoice);
  console.log("The sum is " + sum + ", and it is an " + result + " number!");
  const winner = result === playerChoice ? "Player wins" : "Computer wins";
  console.log(winner);
  rounds = rounds + 1;
  if (winner === "Player wins") {
    playerWins++;
  } else {
    computerWins++;
  }
}
console.log("Player won " + playerWins + " rounds and computer won " + computerWins + " rounds.");
if (playerWins > computerWins) {
  console.log("The Player wins the game! Congratulations!");
} else {
  console.log("The Computer won the game. Better luck next time!");
}
