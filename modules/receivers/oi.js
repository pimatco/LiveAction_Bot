'use strict';

var Lime = require('lime-js');
var menu = require('../menu/menu');

//esse módulo conta um pouco da história do Cotemig. 
exports.oi = function(message, client, user){

	let msg1 = {
		id: Lime.Guid(),
		type: "text/plain",
		to: message.from,
		content: "Olá!"
	};

	let msg2 = {
		id: Lime.Guid(),
		type: "text/plain",
		to: message.from,
		content: "Tudo bem?"
	}
	
	setTimeout(function(){ client.sendMessage(msg1); }, 1000);
    setTimeout(function(){ client.sendMessage(msg2); }, 4000);
    
	//interrompe a execucao de outros receiver
	return false;
};