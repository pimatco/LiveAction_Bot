'use strict';

var Lime = require('lime-js');
var menu = require('../menu/menu');

//esse módulo conta um pouco da história do Cotemig. 
exports.mContato_email = function(message, client, user){

	let msg1 = {
		id: Lime.Guid(),
		type: "text/plain",
		to: message.from,
		content: "Beleza, vou te passar um link para falar conosco diretamente. Um segundo que vou pegar..."
    };

    
    let msg2 = {
		id: Lime.Guid(),
        type: "application/vnd.lime.web-link+json",
        content: {
            "uri": "http://cotemig.com.br/colegio/contato",
            "target": "self",
            "text": "Só entrar aqui e enviar um formulário."
        },
        to: message.from
	};
	
	setTimeout(function(){ client.sendMessage(msg1); }, 500);
	setTimeout(function(){ client.sendMessage(msg2); }, 1500);

    
	//interrompe a execucao de outros receiver
	return false;
};