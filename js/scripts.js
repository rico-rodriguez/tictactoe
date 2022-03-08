//Module for gameBoard
const gameBoard = (() => {
    var parsed = "";
    let gameBoard = 
[{firstMove: "x"}, 
{secondMove: "o"}, 
{thirdMove: "x"}, 
{fourthMove: "o"}, 
{fifthMove: "x"}, 
{sixthMove: "o"}, 
{seventhMove: "x"}, 
{eighthMove: "o"}, 
{ninthMove: "x"}];
    for (i = 0; i< gameBoard.length; i++) {
        var myobj=  gameBoard[i];
        for (var property in myobj) {
            parsed += property + ": " + myobj[property] + "\n";          
        }
    }
return {
    gameBoard
}
  })();
gameBoard
//Factory for player
const Player = (name, level) => {
    const getLevel = () => level;
    const getName  = () => name;

    return {
        };
  };