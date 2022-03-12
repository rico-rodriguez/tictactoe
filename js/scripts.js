cell1 = document.getElementById('cell1');
cell2 = document.getElementById('cell2');
cell3 = document.getElementById('cell3');
cell4 = document.getElementById('cell4');
cell5 = document.getElementById('cell5');
cell6 = document.getElementById('cell6');
cell7 = document.getElementById('cell7');
cell8 = document.getElementById('cell8');
cell9 = document.getElementById('cell9');
let turns = [];
let test = [, , , , , , , , , ]
class Player {
    constructor(name, active) {
        this.name = name;
        this.active = active;
    }
}
const Player1 = new Player('Player1', true);
const Player2 = new Player('Player2', true);


function playGame() {
    gameOver();
    //click player1 button
    player1Button();
    gameOver();
    //click player2 button
    player2Button();
    gameOver();
    //reset button
    resetButton();
    gameOver();
    //Clicking on each cell - playing game 
    buttonClickLogic();
    gameOver();
};
playGame();


function player1Button() {
    $('#player1').on('click', function () {
        gameOver();
        Player2.active = false;
        Player1.active = true;
        gamePiece = x;
        console.log($(this));
        $('#player2').addClass('disabled');
        $('#player1').addClass('disabled');
        console.log(turns)
        
    })
}

function player2Button() {
    $('#player2').on('click', function () {
        gameOver();
        Player1.active = false;
        Player2.active = true;
        gamePiece = circle;
        $('#player2').addClass('disabled');
        $('#player1').addClass('disabled');
        console.log($(this));
    })
}

function resetButton() {
    $('#reset').on('click', function () {
        gamePiece = null;
        $('#player2').removeClass('disabled');
        $('#player1').removeClass('disabled');
        turns = []
        console.log($(this));
    })
}

function buttonClickLogic() {
    $('#cell1').click(function () {
        if (Player1.active == true & turns.length <= 9 & $(this).html() == "") {
            ($(this).html(gamePiece));
            turns.push("X");
            Player1.active = false;
            Player2.active = true;
            $('#player1').addClass('disabled');
            $('#player2').removeClass('disabled');
            test[0] = "X"
            gamePiece = null;

        } else if (Player2.active == true & turns.length <= 9 & $(this).html() == "") {
            ($(this).html(gamePiece));
            turns.push("X");
            Player2.active = false;
            Player1.active = true;
            $('#player2').addClass('disabled');
            $('#player1').removeClass('disabled');
            test[0] = "O"
            gamePiece = null;
        }
    });
    $('#cell2').click(function () {
        if (Player1.active == true & turns.length <= 9 & $(this).html() == "") {
            ($(this).html(gamePiece));
            turns.push("X");
            Player1.active = false;
            Player2.active = true;
            $('#player1').addClass('disabled');
            $('#player2').removeClass('disabled');
            test[1] = "X"
            gamePiece = null;

        } else if (Player2.active == true & turns.length <= 9 & $(this).html() == "") {
            ($(this).html(gamePiece));
            turns.push("X");
            Player2.active = false;
            Player1.active = true;
            $('#player2').addClass('disabled');
            $('#player1').removeClass('disabled');
            test[1] = "O"
            gamePiece = null;
        }
    });
    $('#cell3').click(function () {
        if (Player1.active == true & turns.length <= 9 & $(this).html() == "") {
            ($(this).html(gamePiece));
            turns.push("X");
            Player1.active = false;
            Player2.active = true;
            $('#player1').addClass('disabled');
            $('#player2').removeClass('disabled');
            test[2] = "X"
            gamePiece = null;

        } else if (Player2.active == true & turns.length <= 9 & $(this).html() == "") {
            ($(this).html(gamePiece));
            turns.push("X");
            Player2.active = false;
            Player1.active = true;
            $('#player2').addClass('disabled');
            $('#player1').removeClass('disabled');
            test[2] = "O"
            gamePiece = null;
        }
    });
    $('#cell4').click(function () {
        if (Player1.active == true & turns.length <= 9 & $(this).html() == "") {
            ($(this).html(gamePiece));
            turns.push("X");
            Player1.active = false;
            Player2.active = true;
            $('#player1').addClass('disabled');
            $('#player2').removeClass('disabled');
            test[3] = "X"
            gamePiece = null;

        } else if (Player2.active == true & turns.length <= 9 & $(this).html() == "") {
            ($(this).html(gamePiece));
            turns.push("X");
            Player2.active = false;
            Player1.active = true;
            $('#player2').addClass('disabled');
            $('#player1').removeClass('disabled');
            test[3] = "O"
            gamePiece = null;
        }
    });
    $('#cell5').click(function () {
        if (Player1.active == true & turns.length <= 9 & $(this).html() == "") {
            ($(this).html(gamePiece));
            turns.push("X");
            Player1.active = false;
            Player2.active = true;
            $('#player1').addClass('disabled');
            $('#player2').removeClass('disabled');
            test[4] = "X"
            gamePiece = null;

        } else if (Player2.active == true & turns.length <= 9 & $(this).html() == "") {
            ($(this).html(gamePiece));
            turns.push("X");
            Player2.active = false;
            Player1.active = true;
            $('#player2').addClass('disabled');
            $('#player1').removeClass('disabled');
            test[4] = "O"
            gamePiece = null;
        }
    });
    $('#cell6').click(function () {
        if (Player1.active == true & turns.length <= 9 & $(this).html() == "") {
            ($(this).html(gamePiece));
            turns.push("X");
            Player1.active = false;
            Player2.active = true;
            $('#player1').addClass('disabled');
            $('#player2').removeClass('disabled');
            test[5] = "X"
            gamePiece = null;

        } else if (Player2.active == true & turns.length <= 9 & $(this).html() == "") {
            ($(this).html(gamePiece));
            turns.push("X");
            Player2.active = false;
            Player1.active = true;
            $('#player2').addClass('disabled');
            $('#player1').removeClass('disabled');
            test[5] = "O"
            gamePiece = null;
        }
    });
    $('#cell7').click(function () {
        if (Player1.active == true & turns.length <= 9 & $(this).html() == "") {
            ($(this).html(gamePiece));
            turns.push("X");
            Player1.active = false;
            Player2.active = true;
            $('#player1').addClass('disabled');
            $('#player2').removeClass('disabled');
            test[6] = "X"
            gamePiece = null;

        } else if (Player2.active == true & turns.length <= 9 & $(this).html() == "") {
            ($(this).html(gamePiece));
            turns.push("X");
            Player2.active = false;
            Player1.active = true;
            $('#player2').addClass('disabled');
            $('#player1').removeClass('disabled');
            test[6] = "O"
            gamePiece = null;
        }
    });
    $('#cell8').click(function () {
        if (Player1.active == true & turns.length <= 9 & $(this).html() == "") {
            ($(this).html(gamePiece));
            turns.push("X");
            Player1.active = false;
            Player2.active = true;
            $('#player1').addClass('disabled');
            $('#player2').removeClass('disabled');
            test[7] = "X"
            gamePiece = null;

        } else if (Player2.active == true & turns.length <= 9 & $(this).html() == "") {
            ($(this).html(gamePiece));
            turns.push("X");
            Player2.active = false;
            Player1.active = true;
            $('#player2').addClass('disabled');
            $('#player1').removeClass('disabled');
            test[7] = "O"
            gamePiece = null;
        }
    });
    $('#cell9').click(function () {
        if (Player1.active == true & turns.length <= 9 & $(this).html() == "") {
            ($(this).html(gamePiece));
            turns.push("X");
            Player1.active = false;
            Player2.active = true;
            $('#player1').addClass('disabled');
            $('#player2').removeClass('disabled');
            test[8] = "X"
            gamePiece = null;

        } else if (Player2.active == true & turns.length <= 9 & $(this).html() == "") {
            ($(this).html(gamePiece));
            turns.push("X");
            Player2.active = false;
            Player1.active = true;
            $('#player2').addClass('disabled');
            $('#player1').removeClass('disabled');
            test[8] = "O"
            gamePiece = null;
        }
    });
    //END OF BUTTON CLICK LOGIC
}

const winningSolutions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];
function gameOver() {
    if (test.includes == "X") {
        console.log("game over");
    }
}
gameOver();