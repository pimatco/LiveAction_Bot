'use strict';

var Lime = require('lime-js');
var menu = require('../menu/menu');

exports.localizacao = function(message, client, user){

    let msg0 = {
        id: Lime.Guid(),
        type: "text/plain",
        to: message.from,
        content: "Temos dois endereços..."
    };

	let msg1 = {
    id: Lime.Guid(),
    type: "application/vnd.lime.location+json",
    content: {
        "latitude": -19.9363838,
        "longitude": -43.9663358,
        "altitude": 919,
        "text": "Cotemig na Rua Santa Cruz, 546 - Grajaú"
        },
        to: message.from
    };
    
    let msg2 = {
        id: Lime.Guid(),
        type: "text/plain",
        to: message.from,
        content: "O endereço acima é na Rua Santa Cruz, 546 - Grajaú."
    };

    let msg3 = {
        id: Lime.Guid(),
        type: "application/vnd.lime.location+json",
        content: {
            "latitude": -19.91441,
            "longitude": -43.930528,
            "altitude": 866,
            "text": "Cotemig na Rua Itajubá, 223. Bairro Floresta."
            },
            to: message.from
    };

    let msg4 = {
        id: Lime.Guid(),
        type: "text/plain",
        to: message.from,
        content: "O endereço acima é na Rua Itajubá, 223. Bairro Floresta."
    };

    let msg5 = {
        id: Lime.Guid(),
        type: "text/plain",
        to: message.from,
        content: "Belo Horizonte/MG viu?"
    };
    
    client.sendMessage(msg0);
    setTimeout(function(){ client.sendMessage(msg1); }, 1000);
    setTimeout(function(){ client.sendMessage(msg2); }, 2000);
    setTimeout(function(){ client.sendMessage(msg3); }, 3500);
    setTimeout(function(){ client.sendMessage(msg4); }, 4000);
    setTimeout(function(){ client.sendMessage(msg5); }, 4500);
    setTimeout(function() { client.sendMessage(menu.contate(message.from, user)); }, 8000);
    
	
	return false;
};