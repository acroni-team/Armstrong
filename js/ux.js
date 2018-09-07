$(document).ready(function(){
	$(".caixa-search").mouseleave(function(){
		$(".texto-search").blur();
	});

	$(".caixa-search").focus(function(){
		$(".texto-search").focus();
	});
});
