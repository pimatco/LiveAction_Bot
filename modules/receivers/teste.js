'use strict';

var Lime = require('lime-js');
var menu = require('../menu/menu');
var client = require('../../index.js');

client.connect()

    .then(function(session) {
      // O cliente está conectado, portanto é possível realizar envios a partir daqui
      let msg1 = {
		id: Lime.Guid(),
		type: "text/plain",
		to: message.from,
		content: "Que ótimo! Apesar de ser um robô me sinto muito bem também!"
	};
      client.sendMessage(msg);
      setTimeout(function(){ client.sendMessage(msg1); }, 1000);
    setTimeout(function() { client.sendMessage(menu.menuInicial(message.from, user)); }, 3500);
    }
    });