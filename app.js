$(document).ready(function() {
    $('input').keypress(function(event) {
  		if (event.keycode == 13) {
  			var toAdd = $('input[name=shoppingListItem]').val();
    		$('#main').append('<div class="listItem">' + toAdd + '</div>');
 		}
	});
    $('#add').click(function() {
    	var toAdd = $('input[name=shoppingListItem]').val();
    	$('#main').append('<div class="listItem">' + toAdd + '</div>');
    });
    $(document).on('dblclick', '.listItem', function() {
    	$(this).remove();
    });
    $(document).on('click', '.listItem', function() {
    	$(this).toggleClass('bounce')
    });
    $('#charlie').focus(function() {
    	$('#add').css('color', 'black');
    	$('#echo').addClass('bounce')
    });
    $('#charlie').blur(function() {
    	$('#add').css('color', '#008FB2');
    	$('#echo').removeClass('bounce');
    });
    $('#mark').click(function() {
    	$('#bottom').toggleClass('bounce');
    	$(this).toggleClass('bounce')
    });
 });