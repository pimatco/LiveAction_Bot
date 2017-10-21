'use strict';

var Lime = require('lime-js');
var menu = require('../menu/menu');

exports.vamosfalar = function(message, client, user){

	let msg = {
		id: Lime.Guid(),
		type: "text/plain",
		to: message.from,
		content: "O que você disse? Não entendi."
	};
	let msg2 = {
		id: Lime.Guid(),
		type: "text/plain",
		to: message.from,
		content: "Ainda estou aprendendo a falar sua língua. Diga 'oi', 'contato', 'localização' e 'desconto' para ver algumas de minhas funcionalidades. "
	};

	client.sendMessage(msg);
	client.sendMessage(msg2);

	//interrompe a execucao de outros receiver
	return false;
};