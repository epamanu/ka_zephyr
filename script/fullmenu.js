

$(document).ready(function(){

	$('#btn-menu').click(function(){

		if( $('.btn-menu i').attr('class') == 'ka-open_menu' ){

			$('.btn-menu i').removeClass('ka-open_menu').addClass('ka-close_menu').css({'color':'#000'});
			$('.full-menu').css({'right':'0'});

		}else{
			$('.btn-menu i').removeClass('ka-close_menu').addClass('ka-open_menu').css({'color':'#fff'});
			$('.full-menu').css({'right':'-100%'});
		}

	});

});