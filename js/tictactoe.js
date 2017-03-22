'use strict';

$(document).on('ready', function() {
	var playerTurn = "X";
    var turns = 0;
    $('[data-cell]').on('click', function() {
        var $this = $(this);
        if ($this.text() === "") {
    	   $($this).text(playerTurn);
           $('#announce-winner').empty();
           turns++;
           checkForWin();
    	   playerTurn = (playerTurn === 'X') ? 'O' : 'X';
           checkForTie();
        }
        else {
            $('#announce-winner').text('There\'s something already there! Try again.');
        }
    });

    function winningCombo() {

    var dataCell = $('[data-cell');

    //array of winning positions based on data-cell index values on the board
    var winingPositions = [[0,1,2], [3,4,5],[6,7,8], [0,3,6],
                           [1,4,7],[2,5,8],[0,4,8], [2,4,6]];

    for(var i = 0; i < 8; i++){
        var position1 = winingPositions[i][0];
        var position2 = winingPositions[i][1];
        var position3 = winingPositions[i][2];

        if (dataCell[position1].innerText === playerTurn && dataCell[position2].innerText === playerTurn && dataCell[position3].innerText === playerTurn){
            return true;
            }
        }
    }

    function checkForWin() {
        if(winningCombo()) {
            $('#announce-winner').text('Team "' + playerTurn + '" Wins!');
            $('[data-cell]').empty(); 
            turns = 0;     
        }
    }

    function checkForTie() {
        if(turns === 9) {
            $('#announce-winner').text('It\'s a tie!');
            $('[data-cell]').empty(); 
            turns = 0;
        }
    }

    $('[data-cell]').hover(function(){ $(this).css('background-color', '#1278FF');}, function(){ $(this).css('background-color', 'transparent');});
		$('#back_button').hover(function(){ $(this).css('opacity', '0.7');}, function(){ $(this).css('opacity', '1');});
});
