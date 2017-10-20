'use strict';

var Lime = require('lime-js');
var menu = require('../menu/menu');

exports.bacharel = function(message, client, user){

	let msg = {
        id: Lime.Guid(),
        type: "text/plain",
        to: message.from,
        content: "O curso de Bacharelado em Sistemas de Informação pretende preparar para o mercado de trabalho e também para carreira acadêmica."
    };
    client.sendMessage(msg);
    setTimeout(function() { client.sendMessage(menu.contate(message.from, user)); }, 500);
	//interrompe a execucao de outros maisFaculdade
	return false;
};