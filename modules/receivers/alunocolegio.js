'use strict';

var Lime = require('lime-js');
var menu = require('../menu/menu');

//esse módulo conta um pouco da história do Cotemig. 
exports.alunocolegio = function(message, client, user){

	let msg1 = {
		id: Lime.Guid(),
		type: "text/plain",
		to: message.from,
		content: "Já vi que você sabe escolher. Apesar de não ter sentimento, fico estou feliz por falar com nossos alunos. Vocês são muito especiais para nós."
	};

	let msg2 = {
		id: Lime.Guid(),
		type: "text/plain",
		to: message.from,
		content: "Ah"
    };
    
    let msg3 = {
		id: Lime.Guid(),
		type: "text/plain",
		to: message.from,
		content: "Sabia que aluno do Colégio Cotemig tem 15% de desconto nos cursos da Faculdade Cotemig? E ainda começa o curso no segundo período?"
	};
	
	setTimeout(function(){ client.sendMessage(msg1); }, 500);
	setTimeout(function(){ client.sendMessage(msg2); }, 4000);
	setTimeout(function() { client.sendMessage(menu.simnaodesconto(message.from, user)); }, 5500);
    
	//interrompe a execucao de outros receiver
	return false;
};