'use strict';

var Lime = require('lime-js');
var menu = require('../menu/menu');

exports.inscrevernao = function(message, client, user){

	let msg = {
        id: Lime.Guid(),
        type: "application/vnd.lime.web-link+json",
        content: {
            "uri": "http://matricula.cotemig.com.br/",
            "target": "self",
            "text": "Aproveite a melhor faculdade de tecnologia do mercado. Acesse o link abaixo ou entre em contato conosco."
        },
        to: message.from
    };

    let msg1 = {
		id: Lime.Guid(),
		type: "text/plain",
		to: message.from,
		content: "Preparamos você desde cedo para o mercado de trabalho. Não perca tempo e venha conversar com um de nossos humanos transformadores."
	};


    client.sendMessage(msg);
    setTimeout(function(){ client.sendMessage(msg1); }, 1500);
    setTimeout(function() { client.sendMessage(menu.contate(message.from, user)); }, 500);
	//interrompe a execucao de outros maisFaculdade
	return false;
};