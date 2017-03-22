'use strict';

$(document).ready(function(){
  $('#back_button').hover(function(){ $(this).css('opacity', '0.7');}, function(){ $(this).css('opacity', '1');});
  var block = null;
  var turns = 0;
  $('[data-stack]').on('click', function(){
    var $lastBlock = $(this).children().last();
    $("#announcer").empty();

    if (!block) {
      block = $lastBlock;
      block.fadeTo(100, 0.5);
    }
    else {
      block.fadeTo(500, 1);
      var blockValue = Number(block.attr('data-block'));
      var moveToValue = Number($lastBlock.attr('data-block'));
      if (blockValue < moveToValue || !moveToValue){
        block.detach();
        $(this).append(block);
        turns++;
      }
      else {
        $("#announcer").text('Invalid move');
      }
      block = null;
      checkForWin();
    }
  });

  function checkForWin() {
    if ($('[data-stack="2"]').children().length === 4 || $('[data-stack="3"]').children().length === 4) {
      $("#announcer").text('You won in '+turns+' turns!');

      var $stacks = $('[data-stack]');
      $stacks.find('[data-block]').sort(function(a,b) {
        //arrange by size to restart game
        return +b.getAttribute('data-block') - +a.getAttribute('data-block');
      })
      .appendTo('[data-stack="1"]');
      turns = 0;
    }
  }
});
