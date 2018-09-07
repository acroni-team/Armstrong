var app = angular.module('app', []);
var controllers = {};

controllers.Busca = function($scope) {
	var comando = "";
				
				// preciso criar uma funcao que mude esse link padrao de acordo com o comando digitado. Não só esse link, mas também o texto do botão tem que mudar de acordo com esse mesmo comando.
	$scope.linkBotao = "LinkPadrao.html";
				
	$scope.comandos = ["Ajuda", "Loja"];
	$scope.exibirComandos = $scope.comandos.join(" e ", "");
	$scope.focused = false;
	$scope.teste = "";
				
	$scope.contemComando = function(){
		$scope.cmdAjuda = function() {
			if($scope.texto.toLowerCase().includes('ajuda') || $scope.texto.toLowerCase().includes('help')){
				comando = "ajuda";
				return true;
			}
			else {
				return false;
			}
		}
					
		$scope.cmdLoja = function() {
			if($scope.texto.toLowerCase().includes('loja') || $scope.texto.toLowerCase().includes('store')){
				comando = "ajuda";
				return true;
			}
			else {
				return false;
			}
		}
					
		$scope.contem = $scope.cmdAjuda() || $scope.cmdLoja();
		return $scope.contem;
	}
	$scope.redirecionar = function() {
		if(comando == "ajuda") {
			$scope.teste = "active";
		}
	}
}
				
			// essa funcao pega O PRÓPRIO NOME e retira o "cmd" pra saber qual é o comando.
//			function cmdIri(){
//  				var fName = arguments.callee.toString();
//				var finaldonome = fName.indexOf("(");
//				var comecodonome = fName.indexOf("cmd");
//				fName = fName.slice(comecodonome, finaldonome);
//				fName = fName.substring(3, fName.length);
//				alert(fName);
//			}
//			cmdIri();

app.controller(controllers);