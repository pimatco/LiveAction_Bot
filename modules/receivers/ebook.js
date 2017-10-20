'use strict';

var Lime = require('lime-js');
var menu = require('../menu/menu');

//esse módulo conta um pouco da história do Cotemig. 
exports.ebook = function(message, client, user){

	let msg1 = {
		id: Lime.Guid(),
		type: "text/plain",
		to: message.from,
		content: "Preparamos nossos alunos desde cedo para o mercado de trabalho."
	};

	let msg2 = {
		id: Lime.Guid(),
		type: "text/plain",
		to: message.from,
		content: "Por isso lançamos um E-Book para orientar a contratação de estagiários. Segue o link para download."
    };
    
    let msg3 = {
		id: Lime.Guid(),
        type: "application/vnd.lime.web-link+json",
        content: {
            "uri": "http://cotemig.com.br/colegio/noticias/cotemig-lanca-e-book-para-orientar-a-contratacao-de-estagiarios",
            "target": "self",
            "text": "Segue o link para você baixar seu E-book. "
        },
        to: message.from
	};
	
	setTimeout(function(){ client.sendMessage(msg1); }, 500);
	setTimeout(function(){ client.sendMessage(msg2); }, 3000);
	setTimeout(function(){ client.sendMessage(msg3); }, 6000);
    
	//interrompe a execucao de outros receiver
	return false;
};