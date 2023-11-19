console.log("Welcome to the Rock Paper Scissors game!");

let userChoice = prompt("Enter 'rock', 'paper', or 'scissors'");
userChoice = userChoice.toLowerCase();

console.log(`You chose ${userChoice}`);

// 1 = Rock
// 2 = Paper
// 3 = Scissors
let cpuChoice = Math.random() * 3;
cpuChoice = cpuChoice.toPrecision(1);

switch (cpuChoice) {
    case 1:
        console.log("Computer chose Rock");

        if (userChoice == "rock") {
            console.log("Its a draw.");
        }
        else if (userChoice == "paper") {
            console.log("You win!");
        }
        else if (userChoice == "scissors") {
            console.log("Computer wins!");
        }
        else {
            console.log("Invalid input. Game could not be completed.")
        }
        break;

    case 2:
        console.log("Computer chose Paper");

        if (userChoice == "rock") {
            console.log("Computer wins!");
        }
        else if (userChoice == "paper") {
            console.log("Its a draw.");
        }
        else if (userChoice == "scissors") {
            console.log("You win!");
        }
        else {
            console.log("Invalid input. Game could not be completed.")
        }
        break;

        case 3:
            console.log("Computer chose Scissors");
    
            if (userChoice == "rock") {
                console.log("You win!");
            }
            else if (userChoice == "paper") {
                console.log("Computer wins!");
            }
            else if (userChoice == "scissors") {
                console.log("Its a draw.");
            }
            else {
                console.log("Invalid input. Game could not be completed.")
            }
            break;
}