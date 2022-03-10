class Player {
    constructor(name) {
      this.name = name;
    }
  }
const Player1 = new Player('Player');

let circle = "o"
let x = "x"
let num = 1
function getRandomInt() {
    num ++;
}
$(document).ready(function () {
    $('td').each(function () {
        $(this).attr('data-cell', getRandomInt());
    });
});
let cellNumbers = [];
    function generateCellNumber() {
        for (var i = 0; i < 10; i++) {
            cellNumvar = num++;
            cellNumbers.push(cellNumvar);
        }
    }
    generateCellNumber();
    $(document).ready(function () {
        $('td').each(function (index) {
            $(this).attr('data-cell', cellNumbers[index]);
        })
        
        $('td').on('click', function(){
            console.log($(this).attr('data-cell'));
            $(this).attr('data-cell')
        })
    });

function playerMark() {
    if (Player1 = true)
    playerMark = "x";
}
function changeBoard() {
if ($(this).attr('data-cell') == "" && $(this).attr('data-cell') != circle)
console.log("not empty and not circle")
 b$(this).html("X");


if ($(this).attr('data-cell') == "" && $(this).attr('data-cell') != x)
console.log("not empty and not circle")
$(this).html("X");

}