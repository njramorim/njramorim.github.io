
//pega data ano
function PegaDataAno(){
	var d = new Date();
	var x = document.getElementById("dataAno");
	x.innerHTML=d.getFullYear();
}


//toggle balao
function toggleBalao () {
	var $disparar = $('li.busca a');
	var $balao = $('.balao');
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
 if($(document).height() > $(window).height() || $('.contentWRAP').hasClass('loginWRAP') || $('html').hasClass('ie8')){
	
 }
 else{
	$('footer').addClass('home');
	$('section.forms').addClass('extend');
 }
});

