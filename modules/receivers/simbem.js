'use strict';

var Lime = require('lime-js');
var menu = require('../menu/menu');

//esse módulo conta um pouco da história do Cotemig. 
exports.sbem = function(message, client, user){

	let msg1 = {
		id: Lime.Guid(),
		type: "text/plain",
		to: message.from,
		content: "Que ótimo! Apesar de ser um robô me sinto muito bem também!"
	};
	
	setTimeout(function(){ client.sendMessage(msg1); }, 1000);
    setTimeout(function() { client.sendMessage(menu.menuInicial(message.from, user)); }, 3500);
    
	//interrompe a execucao de outros receiver
	return false;
};