'use strict';

var Lime = require('lime-js');
var menu = require('../menu/menu');

exports.final = function(message, client, user){

	let msg = {
        id: Lime.Guid(),
        type: "text/plain",
        to: message.from,
        content: "Espero ter ajudado a sanar a suas dúvidas. Qualquer coisa é só chamar ;D"
    };
    client.sendMessage(msg);
	//interrompe a execucao de outros maisFaculdade
	return false;
};