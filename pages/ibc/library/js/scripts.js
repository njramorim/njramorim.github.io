//funcoes
var menuHover = function () {
	var $hoverizador = $('nav ul li:first-child a + ul, .menuMobile nav ul a + li a + ul')
	$hoverizador.mouseenter(function() {
		$(this).prev('a').addClass('do-ativo');	
	}).mouseleave(function() {
		$(this).prev('a').removeClass('do-ativo');	
	});
}

var cidadesOpen = function () {
	var $disparaCidade = $('header .topo li span');
	var $cidadeLista = $('header section');
	var classeAtiva = 'do-ativo';
	$disparaCidade.click( function (){
		$cidadeLista.toggleClass(classeAtiva);
		if($cidadeLista.hasClass(classeAtiva)){
			$(this).parent('li').addClass(classeAtiva);
		}else{
			$(this).parent('li').removeClass(classeAtiva);
		}
	});
}

var cidadesOpen2 = function () {
	var $disparaCidade = $('.menuMobile ul.geral li.open a ');
	var $fechaCidade = $('.menuMobile span.close ');
	var $cidadeLista = $('.menuMobile section');
	var classeAtiva = 'do-ativo';
	$disparaCidade.click( function (){
		$cidadeLista.addClass(classeAtiva);
	});
	$fechaCidade.click(function (){
		$cidadeLista.removeClass(classeAtiva);
	});
	
	var $menuMobile =  $('.menuMobile');
	if($('body').hasClass('portalIbc')){

	}else{
		if($(window).scrollTop() <= 165){
			$menuMobile.addClass('do-none');
			$cidadeLista.removeClass(classeAtiva);		
		}else{
			$menuMobile.removeClass('do-none');
		}
	}
}


var shareOpen = function (){
	var $openShare = $('aside.compartilhar button');
	var $opened = $('aside.compartilhar');
	$openShare.click(function (){
		$opened.toggleClass('do-ativo');
	});
}

var slider = function (margem){
	var $disparadores = $('.carrossel button');
	var $left = $('.carrossel button:first-child');
	var $right = $('.carrossel button + button');
	var $carrossel = $('.carrossel');
	var $elemento = $('.carrossel ul li');
	var doHere = 'do-here';
	var tempo = 500;
	

	$left.addClass('do-disable');
	$disparadores.click(function (){
		var $pai = $(this).parent($carrossel);
		if($pai.hasClass('depoCarro')){
			valorMargem = 530;	
		}else {
			valorMargem = 260;
		}
		if($(this).is(':first-child')){
			if($pai.find($elemento).first().hasClass(doHere)){
				var margem = '+='+0+'px';
				$(this).addClass('do-disable');
			}else{
				var margem = '+='+valorMargem+'px';
				if($pai.find($elemento).first().hasClass(doHere)){
					
				}
				$pai.find('.'+ doHere).removeClass(doHere).prev().addClass(doHere);
				$(this).next().removeClass('do-disable');
			}
		}else{
			if($pai.find($elemento).last().prev().hasClass(doHere)){
				var margem = '-='+0+'px';
				$(this).addClass('do-disable');
			}else{
				var margem = '-='+valorMargem+'px';
				$pai.find('.'+ doHere).removeClass(doHere).next().addClass(doHere);
				$(this).prev().removeClass('do-disable');
			}
		}
		$pai.find($elemento).first().animate({
			marginLeft: margem 
		}, tempo);
	});

	
}

var playVideos = function (){
	var $wrapperVideo =  $('.videosList ul li:first-child iframe');
	var $itens = $('.videosList ul li ~ li');
	var classeAtiva = 'do-ativo';
	
	$itens.click(function (){
		var itenDataVideo = $(this).attr('data');
		$wrapperVideo.attr('src',itenDataVideo);
		$itens.removeClass(classeAtiva);
		$(this).addClass(classeAtiva);
	});
}

var carrossel = function (){
	var $container = $('div.carrosselDots');
	var classeAtiva = 'do-ativo';
	var $elemento = $('div.carrosselDots figure');
	var $elementoPrimeiro = $('div.carrosselDots figure.primeiro');
	var $button = $('div.carrosselDots button');
	var $buttonPrimeiro = $('div.carrosselDots button.primeiro');	
	
	$buttonPrimeiro.addClass(classeAtiva);
	$elementoPrimeiro.addClass(classeAtiva);
	function mudaAutoDots() {
		var $buttonAtivo = $('div.carrosselDots button.do-ativo');	
		var $elementoAtivo = $('div.carrosselDots figure.do-ativo');	
		if($buttonAtivo.is(':last-child')){
			$buttonAtivo.removeClass(classeAtiva);
			$elementoAtivo.removeClass(classeAtiva);
			$buttonPrimeiro.addClass(classeAtiva);
			$elementoPrimeiro.addClass(classeAtiva);
		}else{
			$elemento.removeClass(classeAtiva);
			$buttonAtivo.removeClass(classeAtiva).next().addClass(classeAtiva).next().addClass(classeAtiva);
		}
	}
	var automatico = setInterval(function(){
		mudaAutoDots();
	}, 3500);
	$button.click( function(){
		$elemento.removeClass(classeAtiva);
		$button.removeClass(classeAtiva);
		$(this).addClass(classeAtiva);
		$(this).prev($elemento).addClass(classeAtiva);
		
		clearInterval(automatico);
		automatico = setInterval(function(){
			mudaAutoDots();	
		}, 3500);
	});
}

var shopCarro = function (){
	var $container = $('.carrosselShop');
	var $itens = $('.carrosselShop div.produtos ul');
	var $departamentos = $('.carrosselShop button');
	var classeAtiva = 'do-ativo';
	var $departamentoFirst = $('.carrosselShop button:first-of-type');
	
	$departamentoFirst.addClass(classeAtiva).next('ul').addClass(classeAtiva);
	$departamentoFirst.children('span').animate({
		width: '100%',
	}, 3600);
	$departamentoFirst.children('span').animate({
		width: '0%',
	}, 0);
	
	function mudaDepartamento (elemento) {
		$departamentos.removeClass(classeAtiva);
		$itens.removeClass(classeAtiva);
		elemento.addClass(classeAtiva);
		elemento.next('ul').addClass(classeAtiva);
	}
	
	function barrinha(){
		var $departamentoSpan = $('.carrosselShop button.do-ativo span');
		$departamentoSpan.animate({
			width: '100%',
		}, 3600);
		$departamentoSpan.animate({
			width: '0%',
		}, 0);
	}
	
	function mudaAuto () {
		var $departamentoAtivo = $('.carrosselShop button.do-ativo');

		if($departamentoAtivo.is(':last-of-type')){
			$departamentoAtivo.removeClass(classeAtiva).next('ul').removeClass(classeAtiva);
			$departamentoFirst.addClass(classeAtiva).next('ul').addClass(classeAtiva);
		}else{
			$departamentoAtivo.removeClass(classeAtiva).next('ul').removeClass(classeAtiva).next('button').addClass(classeAtiva).next('ul').addClass(classeAtiva);
		}  
		barrinha();
	}
	
	var automatico = setInterval(function(){
		mudaAuto();
	}, 3600);

	$departamentos.on('click', function(){
		mudaDepartamento($(this));
		/*$('.carrosselShop button.do-ativo span').stop();
		barrinha();
		clearInterval(automatico);
		automatico = setInterval(function(){
			mudaAuto();	
		}, 3600);*/
	});
	$container.mouseenter(function() {
		var $spanAtivo = $('.carrosselShop button.do-ativo span');
		var stopWidth = $spanAtivo.width();
		$spanAtivo.stop();
		$spanAtivo.css('width', stopWidth);
		clearInterval(automatico);
	}).mouseleave(function() {
		barrinha();
		automatico = setInterval(function(){
			mudaAuto();	
		}, 3600);
	});
}

//disparadores	
	function funcaoDISPARA() {
		if(!(window.ActiveXObject) && "ActiveXObject" in window){
			$('body').addClass('ie11');
		}
		console.log('Desenvolvido por Agência Mestre');
		menuHover();
		cidadesOpen();
		cidadesOpen2();
		shareOpen();
		slider();
		playVideos();
		carrossel();
		shopCarro();
	}
	
	function funcaoSCROLL() {
		if($(window).scrollTop() >= 164){
			$('header .topo li span').parent('li').removeClass('do-ativo');
			$('header section').removeClass('do-ativo');
		}
		cidadesOpen2();
	}
	
	function funcaoRESIZE() {

	}
	
$(document).ready(funcaoDISPARA);
$(window).scroll(funcaoSCROLL);
$(window).resize(funcaoRESIZE);