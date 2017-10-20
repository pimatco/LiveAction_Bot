'use strict';

var Lime = require('lime-js');
var menu = require('../menu/menu');

exports.vamosfalar = function(message, client, user){

	let msg = {
		id: Lime.Guid(),
		type: "text/plain",
		to: message.from,
		content: "O que você disse? Não entendi. Diga 'oi', 'faculdade' ou 'localização' para ver minhas funcionalidades. "
	};

	let msg3 = {
		id: Lime.Guid(),
        type: "application/vnd.lime.web-link+json",
        content: {
            "uri": "http://cotemig.com.br/colegio/noticias/cotemig-lanca-e-book-para-orientar-a-contratacao-de-estagiarios",
            "target": "self",
            "text": "Ah pega esse E-Book que orienta a contratação de estagiários. "
        },
        to: message.from
	};

	client.sendMessage(msg);
	setTimeout(function(){ client.sendMessage(msg3); }, 4000);
	//interrompe a execucao de outros receiver
	return false;
};