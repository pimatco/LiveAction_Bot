'use strict';

var Lime = require('lime-js');
var menu = require('../menu/menu');

exports.vamosfalar = function(message, client, user){

	let msg = {
		id: Lime.Guid(),
		type: "text/plain",
		to: message.from,
		content: "Em que mais posso te ajudar?"
	};

	client.sendMessage(msg);
	setTimeout(function() { client.sendMessage(menu.menuFinal(message.from, user)); }, 500);
	//interrompe a execucao de outros receiver
	return false;
};