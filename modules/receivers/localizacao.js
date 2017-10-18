'use strict';

var Lime = require('lime-js');
var menu = require('../menu/menu');

exports.localizacao = function(message, client, user){

	let msg = {
    id: Lime.Guid(),
    type: "application/vnd.lime.location+json",
    content: {
        "latitude": -19.9363838,
        "longitude": -43.9663358,
        "altitude": 919,
        "text": "Faculdade Cotemig na Rua Santa Cruz, 546 - Grajaú"
        },
        to: message.from
    };
    let msg2 = {
        id: Lime.Guid(),
        type: "text/plain",
        to: message.from,
        content: "Clique no mapa acima ou guarde nosso endereço. É na Rua Santa Cruz, 546 - Grajaú."
    }
    
    client.sendMessage(msg);
    setTimeout(function(){ client.sendMessage(msg2); }, 1000);
    
	
	return false;
};