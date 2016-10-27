//dispara radio
$(function(){
	$.fn.fancyRadio = function(){
		return $(this).each(function(){
			var p = $(this),
				container = $('<span class="radio-container"/>'),
				radio = $('<span class="radio"/>');

			p.find('input[type="radio"]').wrap(container);
			p.find('span.radio-container').append(radio);
			p.find('input:checked').parent()
									.find('span.radio').addClass('selected');

			p.find('input[type="radio"]').on('click',function(){
				p.find('span.selected').removeClass('selected');
				$(this).parent().find('span.radio').addClass('selected');
			});
		});
	};
	$('p.radio').fancyRadio();
});



//pega data ano
function PegaDataAno(){
	var d = new Date();
	var x = document.getElementById("dataAno");
	x.innerHTML=d.getFullYear();
}


//toggle balao
function toggleBalao () {
	var $disparar = $('header button');
	var $balao = $('header ul.balao');
	var classeAtiva = 'do-abrir';
		$('html').click(function() {
			$balao.removeClass(classeAtiva);
		});
		$balao.click( function (event) {
			event.stopPropagation();
			$balao.addClass(classeAtiva);
		});
		$disparar.click( function (event) {
			event.stopPropagation();
			$balao.toggleClass(classeAtiva);
		});
}

//ativa disabled
function inputDisabled () {
	$('input').each(function(){
		if($(this).is(':disabled')){
			$(this).addClass('do-disabled');
		}else{
			$(this).removeClass('do-disabled');
		}
	});
}



$(function(){
	var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);
	if(isIE11 == true) {
		$('body').addClass('ie11');
	}
	else{
		 
	}
	console.log(isIE11)
});


$(document).ready( function (){
 PegaDataAno ();
 inputDisabled ()
 toggleBalao ()
 $('input[type=checkbox]').iCheck({
    checkboxClass: 'icheckbox_minimal',
    //radioClass: 'iradio_minimal',
   // increaseArea: '20%' // optional
 });
 if($(document).height() > $(window).height() || $('.contentWRAP').hasClass('loginWRAP') || $('html').hasClass('ie8')){
	
 }
 else{
	$('footer').addClass('home');
	$('section.forms').addClass('extend');
 }
});

