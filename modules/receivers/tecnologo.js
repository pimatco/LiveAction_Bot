'use strict';

var Lime = require('lime-js');
var menu = require('../menu/menu');

exports.tecnico = function(message, client, user){

	let msg = {
		id: Lime.Guid(),
		type: "text/plain",
		to: message.from,
		content: "O curso de Tecnólogo em Análise de Desenvolvimento de sistemas pretende preparar você para o mercado de trabalho com velocidade e qualidade."
	};

	client.sendMessage(msg);
	setTimeout(function() { client.sendMessage(menu.mais(message.from, user)); }, 500);
	//interrompe a execucao de outros receiver
	return false;
};