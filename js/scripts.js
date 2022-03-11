class Player {
    constructor(name, active) {
      this.name = name;
      this.active = active;
    }
  }
const Player1 = new Player('Player1', true);
const Player2 = new Player('Player2', true);
function generateCellNumber() {
//Generate an array number for each table cell
        let cellNumbers = [];
        let num = 1
        for (var i = 0; i < 10; i++) {
            cellNumvar = num++;
            cellNumbers.push(cellNumvar);
        }
         $(document).ready(function () {
        $('td').each(function (index) {
            $(this).attr('data-cell', cellNumbers[index]);
        })
        $('td').on('click', function(){
            console.log($(this).attr('data-cell'));
            console.log($(this));

            $(this).attr('data-cell')
        })
//click player1 button
        $('#player1').on('click', function(){
            playerMark = true;
            Player2.active = false;
            Player1.active = true;
            gamePiece = x;
            console.log($(this));
            // $('#player2').addClass('disabled');
            // $('#player1').addClass('disabled');
        })
//click player2 button
        $('#player2').on('click', function(){
            playerMark = false;
            Player1.active = false;
            Player2.active = true;
            gamePiece = circle;
            // $('#player2').addClass('disabled');
            // $('#player1').addClass('disabled');
            console.log($(this));
        })
//reset button
        $('#reset').on('click', function(){
            playerMark = null;
            gamePiece = null;
            // $('#player2').removeClass('disabled');
            // $('#player1').removeClass('disabled');
            console.log($(this));
        })
//Clicking on each cell - playing game
        $('td').click(function() {            
            if(playerMark){
                ($(this).html(gamePiece));
            }else{

                ($(this).html(gamePiece));
            }
        });
        //on click, change html to gamePiece
    });
}
generateCellNumber();





let circle = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
</svg>`
let x = `<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
</svg>
`