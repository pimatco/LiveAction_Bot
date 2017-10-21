'use strict';

var Lime = require('lime-js');
var menu = require('../menu/menu');

exports.mais = function(message, client, user){

	let msg = {
        id: Lime.Guid(),
        type: "application/vnd.lime.web-link+json",
        content: {
            "uri": "https://www.cotemig.com.br/",
            "target": "self",
            "text": "Segue o link para você conferir nosso website com todas as informações."
        },
        to: message.from
    };

    client.sendMessage(msg);
    setTimeout(function() { client.sendMessage(menu.menuFinal(message.from, user)); }, 500);
	//interrompe a execucao de outros maisFaculdade
	return false;
};