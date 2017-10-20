'use strict';

var Lime = require('lime-js');
var menu = require('../menu/menu');

exports.inscrever = function(message, client, user){

	let msg = {
        id: Lime.Guid(),
        type: "application/vnd.lime.web-link+json",
        content: {
            "uri": "http://matricula.cotemig.com.br/",
            "target": "self",
            "text": "Matricule-se no link acima e receba 15% de desconto, além de começar já no segundo período."
        },
        to: message.from
    };

    client.sendMessage(msg);
    setTimeout(function() { client.sendMessage(menu.menuFinal(message.from, user)); }, 500);
	//interrompe a execucao de outros maisFaculdade
	return false;
};