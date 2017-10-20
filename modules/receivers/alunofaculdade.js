'use strict';

var Lime = require('lime-js');
var menu = require('../menu/menu');

//esse módulo conta um pouco da história do Cotemig. 
exports.alunofaculdade = function(message, client, user){

	let msg1 = {
		id: Lime.Guid(),
		type: "text/plain",
		to: message.from,
		content: "Legal! Isso quer dizer que você está pronto para o mercado de trabalho mas ainda assim quer continuar estudando."
	};

	let msg2 = {
		id: Lime.Guid(),
		type: "text/plain",
		to: message.from,
		content: "Creio que você já está no caminho certo, há algo mais que possamos fazer por você? Entre em contato."
    };
	
	setTimeout(function(){ client.sendMessage(msg1); }, 1000);
	setTimeout(function(){ client.sendMessage(msg2); }, 4000);
	setTimeout(function() { client.sendMessage(menu.contate(message.from, user)); }, 5500);
    
	//interrompe a execucao de outros receiver
	return false;
};