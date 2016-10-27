//pega data ano
function pegaDataAno(){
	var d = new Date();
	var x = document.getElementById("dataAno");
	x.innerHTML=d.getFullYear();
}

function fechaPopUp() {
	var $elemento = $('.popUpNews form a');
	var $elementoPai = $('.popUpNews');
	$elemento.on('click', function (){
		$elementoPai.fadeOut(400);
	});
	
	var $elemento2 = $('.newsForm.fixedForm form a');
	var $elementoPai2 = $('.newsForm.fixedForm');
	$elemento2.on('click', function (){
		$elementoPai2.remove();
	});
}

function reduzHeader(){
	var $elemento = $('header');
	var $elementoFixo = $('header.do-fix');
	if($(window).scrollTop() >= 300){
		$elemento.addClass('do-fix');
	}else {
		$elemento.removeClass('do-fix');
	}
}

	$(document).ready(function (){
		if(!(window.ActiveXObject) && "ActiveXObject" in window){
			$('body').addClass('ie11');
		}
		console.log('Desenvolvido por Agência Mestre');
		pegaDataAno();
		fechaPopUp();
		$('input, textarea').placeholder();
	});
	$(window).resize(function (){

	});
	$(window).scroll(function (){
		reduzHeader();
	});