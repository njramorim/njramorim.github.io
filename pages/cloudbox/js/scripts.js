//ie11
$(function(){var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);if(isIE11 == true){$('body').addClass('ie11');}else{}});



function siglas() {
	var $elementos = $('body > header + section > aside > div > ul li a');
		$elementos.each(function( ) {
			var $elemento = $(this);
			var elementoText = $elemento.text();
			var palavras = elementoText.split(' ');
			var sigla = '';
			for(posicao in palavras) {
				var palavra = palavras[posicao];
				if (palavra !== palavra.toLowerCase()) {
					sigla = sigla + palavra.substring(0, 1);
				}
			}
			
			if (palavras.length <= 1) {
				$elemento.attr('data-name', elementoText.substring(0, 2));
			} else {
				$elemento.attr('data-name', sigla);
			}
			
		});

}

function menuExpande() {
	var $item = $('body > section > aside > div > ul > li > a');
	$item.click(function (){
		$(this).toggleClass('do-ativo').parent('li').toggleClass('expande');
	});
}

function tableRows() {
	var $elemento = $('.tableCount span');
	var $rowsCount = $('table tr + tr');
	$elemento.html($rowsCount.length);
	
}

$(document).ready(function (){
		menuExpande();
		tableRows();
		$("select").selectOrDie();
});

$(window).resize(function (){

});
$(window).scroll(function (){

});