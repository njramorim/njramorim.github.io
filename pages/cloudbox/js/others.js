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


$(document).ready(function (){
		siglas();
});

$(window).resize(function (){

});
$(window).scroll(function (){

});