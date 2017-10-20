'use strict';

var Lime = require('lime-js');
var menu = require('../menu/menu');

//esse módulo conta um pouco da história do Cotemig. 
exports.faculdade = function(message, client, user){

	let msg1 = {
		id: Lime.Guid(),
		type: "text/plain",
		to: message.from,
		content: "Em 1999 foi criada a Faculdade COTEMIG, oferecendo o primeiro curso de graduação em Sistemas de Informação autorizado pelo MEC em Minas Gerais."
	};

	let msg2 = {
		id: Lime.Guid(),
		type: "text/plain",
		to: message.from,
		content: "Preparamos nossos alunos para o mercado de trabalho desde cedo, oferecendo plano de carreira, educação continuada e muitas oportunidades."
	};
	
	setTimeout(function(){ client.sendMessage(msg1); }, 500);
	setTimeout(function(){ client.sendMessage(msg2); }, 4000);
    client.sendMessage(menu.contate(message.from, user));
	//interrompe a execucao de outros receiver
	return false;
};