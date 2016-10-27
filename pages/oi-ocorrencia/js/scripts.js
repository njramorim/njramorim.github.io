//ie11
$(function(){var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);if(isIE11 == true){$('body').addClass('ie11');}else{}console.log(isIE11)});

//dispara radio e checkbox
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
	//$('input[type=checkbox]').iCheck({checkboxClass: 'icheckbox_minimal'});
});



//pega data ano
function PegaData(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yy = today.getFullYear().toString().substring(2);
	var $elemento = $('header ul li.data p');
	if(dd<10) {
		dd='0'+dd
	}else if(mm<10) {
		mm='0'+mm
	} 
	var data = dd +'.'+ mm +'.'+ yy;
	$elemento.text(data);
	
    var $elemento2 = $('header ul li.hora p');
    var hh = today.getHours();
    var mm = today.getMinutes();
    var ss = today.getSeconds();
	if(hh<10) {
		hh='0'+hh
	}else if(mm<10) {
		mm='0'+mm
	}else if(ss<10) {
		ss='0'+ss
	}
	
	var agora = hh +':'+ mm +':'+ ss;
	$elemento2.text(agora);
}


//toggle balao

//ativa disabled e ativa inputFile
function inputDisabled () {
	$('input').each(function(){
		if($(this).is(':disabled')){
			$(this).addClass('do-disabled');
		}else{
			$(this).removeClass('do-disabled');
		}
	});
	$('.fileWrap').click(function() {
	  $('#myFile').click();
	});
}

//muda cor se quebra linha
function mudaCor () {
	if($('header ul li p').position().top <= 100){
		$('header ul li p').removeClass('do-color');
		$('header ul li').removeClass('do-nothing');
	}else{
		$('header ul li p').addClass('do-color');
		$('header ul li').removeClass('do-nothing');
	}
	if($('.wrapper').outerHeight() >= $(window).height()){
		$('footer li a').addClass('do-nothing');
	}else{
		$('footer li a').removeClass('do-nothing');
	}
	if($(window).scrollTop() + $(window).height() == $(document).height()) {
		$('footer li a').removeClass('do-nothing');
	}else{
		$('footer li a').addClass('do-nothing');
	}
}

$(document).ready(function (){
 PegaData ();
 inputDisabled ();
 mudaCor ();
});

$(window).resize(function (){
 mudaCor ();
});
$(window).scroll(function (){
 mudaCor ();
});