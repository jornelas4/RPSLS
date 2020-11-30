let gamerPoints = 0;
let botPoints = 0;


$(document).ready(function(){

// events
    $("img").click(game);
    $('.images').click(winner);


// functions

    function game (){

// User Choice
        let gamerChoice =  $(this).data("option");

        $("#gamerOutput").text(`Gamer chose ${gamerChoice}`);

// bot choice
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



        $("#botOutput").text(`Bot chose ${botChoice}`);




//unique id
        let combination = gamerChoice + botChoice;

// If the gamer chooses rock...
        if( combination === "RockRock")
        {
            // Draw
            $("#resultOutput").text("Draw!!!");
        }
        else if ( combination === "RockPaper" )
        {
            // gamer lost
            botPoints += 1;
            $("#resultOutput").text("Paper over Rock you win!!");
        }
        else if ( combination === "RockScissors" )
        {
            // gamer won
            gamerPoints += 1;
            $("#resultOutput").text("Rock smashes scissors you win!");
        }

        else if ( combination === "RockLizard" )
        {
            // gamer won
            gamerPoints += 1;
            $("#resultOutput").text("Rock smashes lizard you win!");
        }
        else if ( combination === "RockSpock" )
        {
            // gamer lost
            botPoints += 1;
            $("#resultOutput").text("Spock disintegrates rock you lose!");
        }

//If the gamer chooses Paper...
        if( combination === "PaperRock")
        {
            // gamer win
            gamerPoints += 1;
            $("#resultOutput").text("Paper over rock you win!");
        }
        else if ( combination === "PaperPaper" )
        {
            // Draw
            $("#resultOutput").text("Draw!!!");
        }
        else if ( combination === "PaperScissors" )
        {
            // gamer lost
            botPoints += 1;
            $("#resultOutput").text("Scissors cuts paper you lose!");
        }

        else if ( combination === "PaperLizard" )
        {
            // gamer lost
            botPoints += 1;
            $("#resultOutput").text("Lizard devours paper you lose!");
        }
        else if ( combination === "PaperSpock" )
        {
            // gamer win
            gamerPoints += 1;
            $("#resultOutput").text("Paper exiles spock you win!");
        }

//If the gamer chooses Scissors...
        if( combination === "ScissorsRock")
        {
            // gamer lost
            botPoints += 1;
            $("#resultOutput").text("Rock breaks scissors you lose!");
        }
        else if ( combination === "ScissorsPaper" )
        {
            // gamer won
            gamerPoints += 1;
            $("#resultOutput").text("Scissors tears paper you win!");
        }
        else if ( combination === "ScissorsScissors" )
        {
            // Draw
            $("#resultOutput").text("Draw!!!");
        }

        else if ( combination === "ScissorsLizard" )
        {
            // gamer won
            gamerPoints += 1;
            $("#resultOutput").text("Scissors cuts lizard you win!");
        }
        else if ( combination === "ScissorsSpock" )
        {
            // gamer lost
            botPoints += 1;
            $("#resultOutput").text("Spock breaks scissors you lose!");
        }

//If the gamer chooses Lizard...
        if( combination === "LizardRock")
        {
            // gamer lost
            botPoints += 1;
            $("#resultOutput").text("Rock smashes lizard you lose!");
        }
        else if ( combination === "LizardPaper" )
        {
            // gamer win
            gamerPoints += 1;
            $("#resultOutput").text("Lizard devours paper you win!");
        }
        else if ( combination === "LizardScissors" )
        {
            // gamer lost
            botPoints += 1;
            $("#resultOutput").text("Scissors cuts lizard you lose!");
        }

        else if ( combination === "LizardLizard" )
        {
            // Draw
            $("#resultOutput").text("Draw!!!");
        }
        else if ( combination === "LizardSpock" )
        {
            // gamer won
            gamerPoints += 1;
            $("#resultOutput").text("Lizard poisons spock you win!");
        }

//If the gamer chooses Spock...
        if( combination === "SpockRock")
        {
            // gamer won
            gamerPoints += 1;
            $("#resultOutput").text("Spock disintegrates rock you win!");
        }
        else if ( combination === "SpockPaper" )
        {
            // gamer lost
            botPoints += 1;
            $("#resultOutput").text("Paper exiles spock you lose!");
        }
        else if ( combination === "SpockScissors" )
        {
            // gamer won
            gamerPoints += 1;
            $("#resultOutput").text("Spock breaks scissors you win!");
        }

        else if ( combination === "SpockLizard" )
        {
            // gamer lost
            botPoints += 1;
            $("#resultOutput").text("Lizard poisons spock you lose!");
        }
        else if ( combination === "SpockSpock" )
        {
            // Draw
            $("#resultOutput").text("Draw!!!");
        }

        $("#gamerResult").text(gamerPoints.toFixed());
        $("#botResult").text(botPoints.toFixed());



    }

    function winner(){

        if (gamerPoints === 2)
        {
            $("#winnerOutput").text("Gamer is the winner");


        }


        else if(botPoints === 2)
        {
            $("#winnerOutput").text("Bot is the winner");
        }



    }


});