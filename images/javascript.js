let userPoints = 0;
let botPoints = 0;


$(document).ready(function(){

// events
    $ ("img").click(game);
    $ ("img").click(winner);


// functions

    function game (){

// User Choice
        let userChoice =  $(this).data("option");

        $("#userOutput").text(`You chose ${userChoice}`);

// Computer choice
        let botChoice = Math.floor(Math.random() * 5) + 1;

//value assignation
        if( botChoice === 1)
        {
            botChoice = "Rock";
        }
        else if (botChoice === 2)
        {
            botChoice = "Paper";
        }
        else if (botChoice === 3)
        {
            botChoice = "Scissors";
        }
        else if (botChoice === 4)
        {
            botChoice = "Lizard";
        }
        else if (botChoice === 5)
        {
            botChoice = "Spock";
        }

        $("#botOutput").text(`Computer chose ${botChoice}`);


//unique id
        let combinedChoices = userChoice + botChoice;

// If the user chose rock...
        if( combinedChoices === "RockRock")
        {
            // tie
            $("#resultOutput").text("Tie!!!");
        }
        else if ( combinedChoices === "RockPaper" )
        {
            // User lost
            botChoice += 1;
            $("#resultOutput").text("Paper covers rock. You lost this round :(");
        }
        else if ( combinedChoices === "RockScissors" )
        {
            // User won
            userPoints += 1;
            $("#resultOutput").text("Rock crushes scissors. You won this round!");
        }

        else if ( combinedChoices === "RockLizard" )
        {
            // User won
            userPoints += 1;
            $("#resultOutput").text("Rock crushes lizard. You won this round!");
        }
        else if ( combinedChoices === "RockSpock" )
        {
            // User lost
            botPoints += 1;
            $("#resultOutput").text("Spock vaporizes rock. You lost this round :(");
        }

//If the user chose Paper...
        if( combinedChoices === "PaperRock")
        {
            // User win
            userPoints += 1;
            $("#resultOutput").text("Paper covers rock. You win this round!");
        }
        else if ( combinedChoices === "PaperPaper" )
        {
            // tie
            $("#resultOutput").text("Tie!!!");
        }
        else if ( combinedChoices === "PaperScissors" )
        {
            // User lost
            botPoints += 1;
            $("#resultOutput").text("Scissors cuts paper. You lost this round :(");
        }

        else if ( combinedChoices === "PaperLizard" )
        {
            // User lost
            botPoints += 1;
            $("#resultOutput").text("Lizard eats paper. You lost this round :(");
        }
        else if ( combinedChoices === "PaperSpock" )
        {
            // User win
            userPoints += 1;
            $("#resultOutput").text("Paper disproves spock. You won this round!");
        }

//If the user chose Scissors...
        if( combinedChoices === "ScissorsRock")
        {
            // User lost
            botPoints += 1;
            $("#resultOutput").text("Rock crushes scissors. You lost this round :(");
        }
        else if ( combinedChoices === "ScissorsPaper" )
        {
            // User won
            userPoints += 1;
            $("#resultOutput").text("Scissors cuts paper. You won this round!");
        }
        else if ( combinedChoices === "ScissorsScissors" )
        {
            // tie
            $("#resultOutput").text("Tie!!!");
        }

        else if ( combinedChoices === "ScissorsLizard" )
        {
            // User won
            userPoints += 1;
            $("#resultOutput").text("Scissors decapitates lizard. You won this round!");
        }
        else if ( combinedChoices === "ScissorsSpock" )
        {
            // User lost
            botPoints += 1;
            $("#resultOutput").text("Spock smashes scissors. You lost this round :(");
        }

//If the user chose Lizard...
        if( combinedChoices === "LizardRock")
        {
            // User lost
            botPoints += 1;
            $("#resultOutput").text("Rock crushes lizard. You lost this round :(");
        }
        else if ( combinedChoices === "LizardPaper" )
        {
            // User win
            userPoints += 1;
            $("#resultOutput").text("Lizard eats paper. You won this round!");
        }
        else if ( combinedChoices === "LizardScissors" )
        {
            // User lost
            botPoints += 1;
            $("#resultOutput").text("Scissors decapitates lizard. You lost this round :(");
        }

        else if ( combinedChoices === "LizardLizard" )
        {
            // tie
            $("#resultOutput").text("Tie!!!");
        }
        else if ( combinedChoices === "LizardSpock" )
        {
            // User won
            userPoints += 1;
            $("#resultOutput").text("Lizard poisons spock. You won this round!");
        }

//If the user chose Spock...
        if( combinedChoices === "SpockRock")
        {
            // User won
            userPoints += 1;
            $("#resultOutput").text("Spock vaporizes rock. You won this round!");
        }
        else if ( combinedChoices === "SpockPaper" )
        {
            // User lost
            botPoints += 1;
            $("#resultOutput").text("Paper disproves spock. You lost this round :(");
        }
        else if ( combinedChoices === "SpockScissors" )
        {
            // User won
            userPoints += 1;
            $("#resultOutput").text("Spock smashes scissors. You won this round!");
        }

        else if ( combinedChoices === "SpockLizard" )
        {
            // User lost
            botPoints += 1;
            $("#resultOutput").text("Lizard poisons spock. You lost this round!");
        }
        else if ( combinedChoices === "SpockSpock" )
        {
            // tie
            $("#resultOutput").text("Tie!!!");
        }

        $("#userSum").text(userPoints.toFixed());
        $("#botSum").text(combinedChoices.toFixed());

    }

    function winner(){

        if (userPoints === 2)
        {
            $("#winnerOutput").text("User is the winner");
        }
        else if(botPoints === 2)
        {
            $("#winnerOutput").text("Computer is the winner");
        }
    }


});
