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


//estilo dos checkbox
var d = document;
var safari = (navigator.userAgent.toLowerCase().indexOf('safari') != -1) ? true : false;
var gebtn = function(parEl,child) { return parEl.getElementsByTagName(child); };
onload = function() {
    
    var body = gebtn(d,'body')[0];
    body.className = body.className && body.className != '' ? body.className + ' has-js' : 'has-js';
    
    if (!d.getElementById || !d.createTextNode) return;
    var ls = gebtn(d,'label');
    for (var i = 0; i < ls.length; i++) {
        var l = ls[i];
        if (l.className.indexOf('label_') == -1) continue;
        var inp = gebtn(l,'input')[0];
        if (l.className == 'label_check') {
            l.className = (safari && inp.checked == true || inp.checked) ? 'label_check c_on' : 'label_check c_off';
            l.onclick = check_it;
        };
        if (l.className == 'label_radio') {
            l.className = (safari && inp.checked == true || inp.checked) ? 'label_radio r_on' : 'label_radio r_off';
            l.onclick = turn_radio;
        };
    };
};

function ativaCheck (){
	$('.label_check').addClass('c_off');
	$('.label_check').click( function (){
		$(this).toggleClass('c_on'); 
		//$(this).find('input:checkbox')
		$(this).toggleClass('c_off');
	});
}

//adiciona campos
function addCampos() {
	$('.btnADD').click( function () {
		$(this).closest('.wrapperADD').children('label.add001').clone().addClass('clonado').removeClass('add001').insertAfter($(this).closest('.wrapperADD').children('div.clone'));
	});	
}	

//clona dependentes
function clonaTudo () {
	var $button = $('.BIGlabel .btnADD');
    $button.click(function () {
        var $clonable = $('.clonable');
        var $first = $clonable.first();
        var $last = $clonable.last();
        $first.clone().insertAfter($last).find('.counter').text($clonable.length + 1).parents('.BIGlabel').children('.btnADD').css('display', 'none');
    });
}

//clona colunas
function clonaColunas () {
	$('.btnCOL').click (function () {
		var $last = $('.btnCOL').closest('.cloneCOL').last();
		$(this).closest('.cloneCOL').clone().addClass('clonadasso').removeClass('addCOL').insertAfter($last).next('.clear').prev('.cloneCOL').find('.btnCOL').css('display','none');
		var $last = $('.btnCOL').closest('.cloneCOL2').last();
		$(this).closest('.cloneCOL2').clone().addClass('clonadasso').removeClass('addCOL').insertAfter($last).next('.clear').prev('.cloneCOL2').find('.btnCOL').css('display','none');
	});

}

//reset form
$(".refresh").click(function(e) {
	 e.preventDefault();
    $(this).closest('form').find('input:text, input:password, input:file, select, textarea').val('').find('input:radio, input:checkbox').removeAttr('checked').removeAttr('selected');
});


//desdisplay overlay
$('div.overlay button').click(function () {
	$(this).css('opacity', '0');
	$('div.overlay').fadeOut(1600);
});

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
 addCampos();
 clonaTudo ();
 clonaColunas ();
 $('input, textarea').placeholder();
 ativaCheck ();
});

