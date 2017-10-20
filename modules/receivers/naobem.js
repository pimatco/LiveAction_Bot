'use strict';

var Lime = require('lime-js');
var menu = require('../menu/menu');

//esse módulo conta um pouco da história do Cotemig. 
exports.nbem = function(message, client, user){

	let msg1 = {
		id: Lime.Guid(),
		type: "text/plain",
		to: message.from,
		content: "Não? Levanta essa poeira aí. O Cotemig tá aqui para te ajudar a fazer mais e se dar bem no mercado de trabalho!!!"
	};
	
	setTimeout(function(){ client.sendMessage(msg1); }, 1000);
    setTimeout(function() { client.sendMessage(menu.menuInicial(message.from, user)); }, 4000);
    
	//interrompe a execucao de outros receiver
	return false;
};