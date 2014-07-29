$(document).ready(function() {
    $('input, form').on('submit' ,function(event){
        event.preventDefault();
    } );

    $('input').keypress(function(event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            $('#add').trigger('click');

 		}
	});
    $('#add').click(function() {
    	var toAdd = $('input[name=shoppingListItem]').val();
    	$('#main').append('<div class="listItem">' + toAdd + '<div class="thex">x</div></div>');
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
    $(document).on('click', '.thex', function() {
        $(this).parent().remove();
    });    
 });