$(document).ready(function (){
	$(this).scrollTop(0);
	injetaLoad($content, svgPlanicie + svgCasa + svgPersona + svgArvores + svgFumacao,'', 0);
	$('body > aside').fadeOut(600);

	//injetaLoad(aonde, quem, elementoAnima, tempo);
	injetaLoad($logoArea, svgLogo, $logoArea, 0);
	injetaLoad($setaArea, $setaArea, $setaArea, 1400);
	//TweenMax.to('body > section > svg',0,{css:{transformOrigin:'bottom'}});
	showContent();
	showMenuContent();
	fumacaAnima();
	$(Mustache.render(templateLinks, itens)).appendTo($noneDiv);
	$('div.none a:first-of-type').addClass(classeAtiva);
	pegaInfos();
	mudaPages();
});	


$(window).resize(function (){
	//portifaSize();
});
$(window).scroll(function (){

});
	
	
function injetaLoad (aonde, quem, elementoAnima, tempo){
	aonde.append(quem);
	if (elementoAnima != ''){
		setTimeout(function() {
			elementoAnima.addClass(classeAtiva);
		},tempo);
	}else{}
}

function arvoresEfeito(arvore, tempo, delay){
	TweenMax.to(arvore, tempo,
		{css:{scaleY:1, transformOrigin:'bottom'},  delay: delay} 
	)
}
function showContent(){
	TweenMax.to(todasArvores, 0, {css: {scaleY:0, transformOrigin:'bottom'}}	);
	$setaArea.on('click',function(){
		arvoresEfeito(todasArvores1, 1,3.5);
		arvoresEfeito(todasArvores2, 0.8, 2.6);
		arvoresEfeito(todasArvores3, 2, 2.2);
		arvoresEfeito(todasArvores4, 1, 3);
		arvoresEfeito(todasArvores5, 2, 2);
		//TweenMax.to(todasArvores, 1.2,{css:{scaleY:1, transformOrigin:'bottom'},  ease: Power0.easeNone, delay: 6} 	)
		$logoArea.fadeOut(600);
		$setaArea.removeClass(classeAtiva);
		$content.addClass('do-up');
		
		setTimeout(function() {
			$menuArea.addClass(classeAtiva);
		},smoothTime - 1500);	
		setTimeout(function() {
			$('footer').addClass(classeAtiva);
			$logoArea.addClass('do-small').fadeIn(400);
		},3000);	
		
		TweenMax.to('#portifaContent', 0,
			{css:{scaleX:1, scaleY:0, transformOrigin:'center bottom', skewY:0, opacity:0}, delay:0} 
		)
		TweenMax.to('#portifaContent #closeBtn', 0,
			{css:{scaleX:0.5, scaleY:0.5, transformOrigin:'center bottom'}, delay:0} 
		)

	});
	
	

}

function showMenuContent(){
	$menuItem.on('click', function(){
		$menuItem.removeClass(classeAtiva);
		$(this).addClass(classeAtiva);
		
		if($(this).hasClass('portifaItem')){
			
			$menuItem.css('pointer-events', 'none');
			$menuArea.fadeOut(400);
			$('#fumaca, #portfolioLayer').attr('data-value', classeAtiva);
			
			TweenMax.to('#fumaca', 1.5,
				{css:{scaleX:1, scaleY:0.5,  transformOrigin:'center bottom'}} 
			)
			TweenMax.to('#fumaca',1,
				{css:{opacity:0}} 
			)
			TweenMax.to('#portifaContent', 1.5,
				{css:{scaleX:1, scaleY:0, transformOrigin:'center bottom', skewY:0, opacity:0}, delay:1} 
			)
			TweenMax.to('#portifaContent', 1.5,
				{css:{opacity:1,scaleX:1, scaleY:1}, delay:1 } 
			)
			
			setTimeout(function() {
				$('#portfolioLayer #setas, #portfolioLayer #closeBtn,#portfolioLayer  #pageItens').fadeIn(600);
			}, 2500);
			
			if($('#persona #tudo').attr('data-state') != 'do-moved'){
				personaAnima();			
				$('#persona #tudo').attr('data-state','do-moved');
			}
			portifaSize();
			$contatoArea.removeClass(classeAtiva);
			
			
		}else if($(this).hasClass('curriculumItem')){
			
		
			$logoArea.fadeOut(400);
			$('footer').removeClass(classeAtiva);
			$curriculumArea.delay(400).fadeIn(600);
			$menuArea.fadeOut(600);
			$contatoArea.removeClass(classeAtiva);
			
		}else{
			$contatoArea.addClass(classeAtiva);
			inp.val('').parent('label').removeClass('error');
		}
	});
}

function portifaSize(){
		if($('#portfolioLayer').height() >= $( window ).height()){
			setTimeout(function() {
				$content.addClass('do-upper');
				$('footer').removeClass(classeAtiva);
			}, 2000);
		}
}

function portfolioFade(){
	$('.portifaItem').removeClass(classeAtiva);
	setTimeout(function() {
		$menuArea.fadeIn(600);
		$menuItem.css('pointer-events', 'initial');
	}, 1200)
	
	$('#portfolioLayer #setas, #portfolioLayer #closeBtn, #portfolioLayer #pageItens').fadeOut(100);
	
	$('#fumaca, #portfolioLayer').attr('data-value', '');
	

	TweenMax.to('#portifaContent', 1,
		{css:{scaleX:1, scaleY:0.7,  transformOrigin:'center bottom', skewY:1, rotate:-2}, delay:0} 
	)	
	TweenMax.to('#portifaContent', 0.5,
		{css:{opacity:0}, delay:0} 
	)
	TweenMax.to('#portifaContent', 1,
		{css:{opacity:0, scaleX:1, scaleY:0,  transformOrigin:'center bottom', skewY:0, rotate:0}, delay:1} 
	)	
	setTimeout(function() {
		TweenMax.to('#fumaca',1.5,
			{css:{opacity:1, scale:0.8}} 
		)
		setTimeout(function() {
			TweenMax.fromTo('#fumaca', 9,
				{css: {opacity:1, scale:0.8, transformOrigin:'center bottom'}}, 
				{css:{opacity:0.9, scale:1, transformOrigin:'center bottom'},  ease: Back.easeOut.config(1.7), repeat: -1,  yoyo:true} 
			)
		}, 1200);
	}, 900);
	setTimeout(function() {
		if($('#portfolioLayer').height() >= $( window ).height()){
			$content.removeClass('do-upper');
			$('footer').addClass(classeAtiva);
		}
	}, 1400);
}

var itens = [
	{
		link:'http://bull.digital/portfolio/jobs/5stars/dist/',
		imagem: 'images/pics/5star.jpg',
		texto: 'Hotsite 5Star - Ninguém Sai',
		texto2: '[html/css/js/responsivo]'
	},
	{
		link:'http://planetadeleitores.com.br/dist/',
		imagem: 'images/pics/leitores.jpg',
		texto: 'Hotsite Planeta de Leitores',
		texto2: '[html/css/js]'
	},
	{
		link:'http://www.zuum.com.br/tafacil/',
		imagem: 'images/pics/zuum.jpg',
		texto: 'Hotsite Ta Fácil - Zuum',
		texto2: '[html/css/js/responsivo]'
	},
	{
		link:'http://bull.digital/preview/globo/cartola-portfolio/front/',
		imagem: 'images/pics/cartola.jpg',
		texto: 'Globo - Magazine Luiza - Cartola ',
		texto2: '[html/css/js/responsivo]'
	},
	{
		link:'http://bull.digital/portfolio/jobs/globo-quizz-motorola-focanomomento/',
		imagem: 'images/pics/motorola.jpg',
		texto: 'GShow - Motorola ',
		texto2: '[html/css/js/responsivo]'
	},
	{
		link:'http://www.itau.com.br/',
		imagem: 'images/pics/itau.jpg',
		texto: 'Portal Itau.com',
		texto2: '[html/css/js]'
	},
	{
		link:'http://grano.us/home-grano/',
		imagem: 'images/pics/grano.jpg',
		texto: 'Site Institucional Granó',
		texto2: '[html/css/js/responsivo]'
	},
	{
		//link:'pages/ibc/index.html',
		link:'http://www.ibccoaching.com.br/',
		imagem: 'images/pics/ibc01.jpg',
		texto: 'Site Insitucional IBC',
		texto2: '[html/css/js]'
	},
	{
		//link:'pages/ibc/portal.html',
		link:'http://www.ibccoaching.com.br/portal/',
		imagem: 'images/pics/ibc02.jpg',
		texto: 'Portal IBC',
		texto2: '[html/css/js]'
	},
	{
		link:'http://www.cursinhoparamedicina.com.br/',
		imagem: 'images/pics/hexag.jpg',
		texto: 'Portal Hexag',
		texto2: '[html/css/js/responsivo]'
	},
	{
		link:'http://atelieoral.com.br/',
		imagem: 'images/pics/atelie.jpg',
		texto: 'Portal Ateliê Oral',
		texto2: '[html/css/js]'
	},
	{
		link:'https://play.google.com/store/apps/details?id=com.ionicframework.descontao434752&hl=pt_BR',
		imagem: 'images/pics/descontao.jpg',
		texto: 'Aplicativo Descontão - Bull Digital',
		texto2: '[html/css/js/mobile]',
	},
	{
		link:'https://play.google.com/store/apps/details?id=br.com.ezconet.eportal&hl=pt_BR',
		imagem: 'images/pics/eportal.jpg',
		texto: 'Aplicativo E-Portal - Ezconet',
		texto2: '[html/css/js/mobile]',
	},
	{
		link:'https://play.google.com/store/apps/details?id=com.unimed.guiamdico&hl=pt_BR',
		imagem: 'images/pics/unimed.jpg',
		texto: 'Aplicativo Guia Médico - Unimed',
		texto2: '[html/css/js/mobile]',
	},
	{
		link:'http://eglu.pontofrio.com.br',
		imagem: 'images/pics/eglu.jpg',
		texto: 'Blog Eglu - Ponto-Frio',
		texto2: '[html/css/js/mobile]'
	},
	{
		link:'http://guiadecompras.casasbahia.com.br/',
		imagem: 'images/pics/bahia.jpg',
		texto: 'Blog Guia de Compras - Casas Bahia',
		texto2: '[html/css/js/responsivo]'
	},
	{
		link:'http://tudo.extra.com.br/',
		imagem: 'images/pics/extra.jpg',
		texto: 'Blog #TudoExtra - Extra',
		texto2: '[html/css/js/responsivo]'
	},
	{
		link:'http://blog.todolivro.com.br/',
		imagem: 'images/pics/todolivro.jpg',
		texto: 'Blog Todo Livro',
		texto2: '[html/css/js]'
	},
	{
		// link:'pages/bbbaterias/index.html',
		link:'http://blog.bbbaterias.com.br/',
		imagem: 'images/pics/bbbaterias.jpg',
		texto: 'Blog BBBterias',
		texto2: '[html/css/js]'
	},
	{
		link:'pages/cloudbox/cadastro.html',
		imagem: 'images/pics/cloudbox.jpg',
		texto: 'Sistema CloudBox - Ezconet',
		texto2: '[html/css/js/ie8+]'
	},
	{
		link:'pages/adm-tim/02-home.html',
		imagem: 'images/pics/adm-tim.jpg',
		texto: 'Sistema ADM Tim',
		texto2: '[html/css/js/ie8+]'
	},
	// {
	// 	link:'pages/oi-survey/index.html',
	// 	imagem: 'images/pics/oi-survey.jpg',
	// 	texto: 'Sistema Oi Survey',
	// 	texto2: '[html/css/js/ie8+]'
	// },
	// {
	// 	link:'pages/oi-convergencia/index.html',
	// 	imagem: 'images/pics/oi-convergencia.jpg',
	// 	texto: 'Sistema Oi Convergência',
	// 	texto2: '[html/css/js/ie8+]'
	// },
	// {
	// 	link:'pages/oi-contingencia/timeline.html',
	// 	imagem: 'images/pics/oi-contingencia.jpg',
	// 	texto: 'Sistema Oi Contingência',
	// 	texto2: '[html/css/js/ie8+]'
	// },
	{
		link:'pages/oi-ocorrencia/detalhes-ocorrencia.html',
		imagem: 'images/pics/oi-ocorrencias.jpg',
		texto: 'Sistema Oi Ocorrências',
		texto2: '[html/css/js/ie8+]'
	},
	{
		link:'pages/oi-adm/index.html',
		imagem: 'images/pics/oi-adm.jpg',
		texto: 'Sistema Oi ADM',
		texto2: '[html/css/js/ie8+]'
	},
	{
		link:'pages/oi-lojas/tela06.html',
		imagem: 'images/pics/oi-lojas.jpg',
		texto: 'Sistema Oi Lojas',
		texto2: '[html/css/js/ie7+]'
	},
	{
		link:'http://milainox.com.br/',
		imagem: 'images/pics/milainox.jpg',
		texto: 'Site Milainox',
		texto2: '[html/css/js/responsivo]'
	},
	{
		link:'http://www.dicasdepresentes.com/',
		imagem: 'images/pics/presentes.jpg',
		texto: 'Site Dicas de Presentes',
		texto2: '[html/css/js]'
	},
	{
		link:'pages/filme-sistema/index.html',
		imagem: 'images/pics/filme-sistema.jpg',
		texto: 'Site Filme Sistema',
		texto2: '[html/css/js]'
	}
];
	var $noneDiv = $('div.none');

	
	var templateLinks = '\
		{{#.}}\
			<a href="{{link}}" target="_blank" >\
				<p >{{texto}}</p>\
				<span >{{texto2}}</span>\
				<img  src="{{imagem}}"/>\
			</a>\
		{{/.}}\
	';


function pegaInfos(){	

	var $linkPage = $('#pageItens > a');
	var $imgPage = $('#pageItens > a > image');
	var $textPage = $('#pageItens > a > text#tit');
	var $text2Page = $('#pageItens > a > text#span');
	$linkPage.attr('xlink:href', $('div.none a.do-active').attr('href'));
	$('#pageItens > a > image').attr('xlink:href',  $('div.none a.do-active img').attr('src'));
	$textPage.html($('div.none a.do-active p').html());
	$text2Page.html($('div.none a.do-active span').html());
	
}
	
function mudaPages(){
	var $noneDivLink = $('div.none a');
	var $containerPage = $('#pageItens');
	var $setaDir = $('#portifaContent #setaDir');
	var $setaEsq = $('#portifaContent #setaEsq');
	
	function changingPages(primeiro, ultimo){
		if($('div.none a.do-active').is(ultimo)){
			$('div.none a.do-active').attr('class','');
			primeiro.addClass(classeAtiva);
		}else{
			$('div.none a.do-active').attr('class','').next().addClass(classeAtiva);
		}		
		pegaInfos();
	}
	
	$setaDir.on('click', function(){
		if($('div.none a.do-active').is(':last-of-type')){
			$('div.none a.do-active').attr('class','');
			$('div.none a:first-child').addClass(classeAtiva);
		}else{
			$('div.none a.do-active').attr('class','').next().addClass(classeAtiva);
		}		
		pegaInfos();
	});	
	$setaEsq.on('click', function(){
		if($('div.none a.do-active').is(':first-of-type')){
			$('div.none a.do-active').attr('class','');
			$('div.none a:last-child').addClass(classeAtiva);
		}else{
			$('div.none a.do-active').attr('class','').prev().addClass(classeAtiva);
		}		
		pegaInfos();
	});	
}	
	

function fumacaAnima(){
	TweenMax.fromTo('#fumaca', 7,
		{css: {opacity:1, scale:0.8, transformOrigin:'center bottom'}}, 
		{css:{opacity:0.9, scale:1, transformOrigin:'center bottom',},  ease: Back.easeOut.config(1.7), repeat: -1,  yoyo:true} 
	)
	TweenMax.fromTo('#fumacaMaior', 7,
		{css: {scaleY:0.8, transformOrigin:'center bottom'}}, 
		{css:{scaleY:1, transformOrigin:'center bottom'},  ease:Back.easeOut.config(1.7), repeat: -1, yoyo:true} 
	)
	TweenMax.fromTo('#fumacaMaior', 2.5,
		{css: {scaleX:1.5, transformOrigin:'center bottom'}}, 
		{css:{scaleX:1, transformOrigin:'center bottom'},  ease:  Power0.easeNone, repeat: -1, yoyo:true} 
	)		
	TweenMax.fromTo('#fumacasMenores', 7,
		{css: {opacity:0.6 }}, 
		{css:{opacity:1},  ease:Back.easeOut.config(1.7), repeat: -1, yoyo:true} 
	)		
	TweenMax.fromTo('#fumacasMenores g', 2,
		{css: {scaleX:0.7, transformOrigin:'center bottom'}}, 
		{css:{scaleX:1, transformOrigin:'center bottom'},  ease:  Power0.easeNone, repeat: -1, yoyo:true} 
	)	
}


function personaAnima(){
	var personaTimeline = new TimelineMax({delay:0.5, repeat:-1, repeatDelay:2});
	
	var tudo = '#persona #tudo',
			pernaL = '#persona #pernaEsq',
			pernaR =  '#persona #pernaDir',
			bracoL =  '#persona #lado_esquerdo',
			bracoR =  '#persona #lado_direito',
			rosto =  '#persona #rosto',
			boca2 =  '#persona #rosto #boca2';
			
		TweenMax.fromTo(tudo,0.2, 
			{css: {opacity:0, transformOrigin:'center bottom'}}, 
			{css:{opacity:1}, delay:1.4} 
		)	
		TweenMax.fromTo(tudo, 6,
			{css:{transform: 'translate(36px,-29px)' , transformOrigin:'center bottom'}}, 
			{css:{transform: 'translate(-38px,2px)'},delay: 1, ease: Power1.easeOut}	
		)

		TweenMax.fromTo(pernaL,0.5,
			{css:{transform: 'translate(0px,-4px)' , transformOrigin:'center bottom'}}, 
			{css:{transform: 'translate(0px,0px)' }, repeat:8.5, delay: 0.5,  yoyo: true}
		)	
		TweenMax.fromTo(bracoR,0.5,
			{css:{transform: 'rotate(-11deg)' , transformOrigin:'top center'}}, 
			{css:{transform: 'rotate(11deg)' }, repeat:8, delay: 1,   ease: Power1.easeInOut, yoyo: true}
		)	
		
		TweenMax.fromTo(pernaR,0.5,
			{css:{transform: 'translate(0px,-4px)' , transformOrigin:'center bottom'}}, 
			{css:{transform: 'translate(0px,0px)' }, repeat:8, delay:0, yoyo:true}
		)
		TweenMax.fromTo(bracoL,0.5,
			{css:{transform: 'rotate(14deg)' , transformOrigin:'top center'}}, 
			{css:{transform: 'rotate(-14deg)' }, repeat:9, delay:0, ease: Power1.easeInOut, yoyo:true}
		)
		
		TweenMax.fromTo(rosto,1,
			{css:{transform: 'rotate(0deg)' , transformOrigin:'bottom center'}}, 
			{css:{transform: 'rotate(4deg)' }, repeat:4, delay:0, ease: Power1.easeInOut, yoyo:true}
		)		
		
		
		TweenMax.fromTo(rosto,2,
			{css:{transform: 'rotate(4deg)' , transformOrigin:'bottom center'}}, 
			{css:{transform: 'rotate(0deg)' }, repeat:-1, delay:11, repeatDelay: 2, ease: Power1.easeInOut, yoyo:true}
		)
		TweenMax.fromTo(boca2,0.5,
			{css:{opacity: '0'}}, 
			{css:{opacity: '1'}, repeat:-1, delay:1, repeatDelay: 2, ease: Power1.easeInOut, yoyo:true}
		)
		TweenMax.fromTo(bracoR,2,
			{css:{transform: 'rotate(11deg)' , transformOrigin:'top center'}}, 
			{css:{transform: 'rotate(-11deg)' }, repeat:-1, repeatDelay: 6, delay: 12,   ease: Power1.easeInOut, yoyo: true}
		)	
		TweenMax.fromTo(bracoL,1.5,
			{css:{transform: 'rotate(14deg)' , transformOrigin:'top center'}}, 
			{css:{transform: 'rotate(-14deg)' }, repeat:-1, repeatDelay:8, delay:13, ease: Power1.easeInOut, yoyo:true}
		)
}



// var inp = $('form input, form textarea');
// function err(){
//   $.each(inp, function(){
//     if(!$.trim(this.value)){
//       $(this).parent('label').addClass('error');
//     }else{
// 			$(this).parent('label').removeClass('error');
//     }
//  });  
// }


// $('form button').click(function(e){
// 	e.preventDefault();
// 	err();
// 	if($('form label').hasClass('error') ) {
//   }else{
// 		$.ajax({
// 			type: "POST",
// 			url: "https://mandrillapp.com/api/1.0/messages/send.json",
// 			data: {
// 				'key': 'M92JGIhqVJd6lJ061ooASw',
// 				'message': {
// 					'from_email': $('#emailForm').val(),
// 					'to': [
// 						{
// 							'email': 'njr.amorim@gmail.com',
// 							'type': 'to'
// 						}
// 					],
// 					'autotext': 'true',
// 					'subject': $('#nomeForm').val() + ' - ' + 'via portifolio',
// 					'html': $('#mensagemForm').val()
// 				}
// 			}
// 			}).done(function(response) {
// 			$contatoArea.addClass('do-send');
// 			setTimeout(function() {
// 				$('.contatoItem').removeClass(classeAtiva);
// 				$contatoArea.removeClass(classeAtiva).removeClass('do-send');
// 			},3200);
// 		});	
// 	}
// });
	