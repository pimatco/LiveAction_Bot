'use strict';

var Lime = require('lime-js');
var menu = require('../menu/menu');

//esse módulo conta um pouco da história do Cotemig. 
exports.alunonao = function(message, client, user){

	let msg1 = {
		id: Lime.Guid(),
		type: "text/plain",
		to: message.from,
		content: "Não é aluno?"
	};

	let msg2 = {
		id: Lime.Guid(),
		type: "text/plain",
		to: message.from,
		content: "Vou te falar. Se você busca um ensino de extrema qualidade que te prepara para um futuro brilhante trabalhando com tecnologia, aqui é o seu lugar."
    };

    let msg3 = {
		id: Lime.Guid(),
		type: "text/plain",
		to: message.from,
		content: "E é sério. Liga pra gente ou manda um e-mail, vamos gostar muito de preparar um plano de carreira para você."
    };
	
	setTimeout(function(){ client.sendMessage(msg1); }, 1000);
	setTimeout(function(){ client.sendMessage(msg2); }, 4000);
	setTimeout(function(){ client.sendMessage(msg3); }, 7000);
	setTimeout(function() { client.sendMessage(menu.contate(message.from, user)); }, 5500);
    
	//interrompe a execucao de outros receiver
	return false;
};