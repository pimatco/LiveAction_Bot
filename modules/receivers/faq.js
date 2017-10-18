'use strict';

var Lime = require('lime-js');
var menu = require('../menu/menu');

// Essa function valida se o usuário é pagante, caso seja mostre o menu com as opções de agendamento, caso contrário
//fixa o usuário no menu inicial.
exports.faq = function(message, client, user){

	let msg = {
		id: Lime.Guid(),
		type: "application/vnd.lime.web-link+json",
		content: {
			"uri": "https://www.cotemig.com.br/grupo/noticias",
			"target": "self",
			"text": "Fique por dentro de tudo sobre o Cotemig"
		},
		to: message.from
	};

	client.sendMessage(msg);
	setTimeout(function() { client.sendMessage(menu.menuFinal(message.from, user)); }, 500);
	//interrompe a execucao de outros receiver
	return false;
};