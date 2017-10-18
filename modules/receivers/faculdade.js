'use strict';

var Lime = require('lime-js');
var menu = require('../menu/menu');

//esse módulo conta um pouco da história do Cotemig. 
exports.faculdade = function(message, client, user){

	let msg1 = {
		id: Lime.Guid(),
		type: "text/plain",
		to: message.from,
		content: "Em 1999 foi criada a faculdade COTEMIG, oferecendo o primeiro curso de graduação em Sistemas de Informação autorizado pelo MEC em Minas Gerais."
	};

	let msg2 = {
		id: Lime.Guid(),
		type: "text/plain",
		to: message.from,
		content: "Sabia que aluno do Colégio Cotemig tem 15% de desconto nos cursos da Faculdade Cotemig? E ainda começa o curso no segundo período?"
	}
	
	client.sendMessage(msg1);
    setTimeout(function(){ client.sendMessage(msg2); }, 500);
    setTimeout(function() { client.sendMessage(menu.cursos(message.from, user)); }, 1000);
	//interrompe a execucao de outros receiver
	return false;
};