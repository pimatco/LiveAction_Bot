'use strict';

var Lime = require('lime-js');
var menu = require('../menu/menu');

//esse módulo conta um pouco da história do Cotemig. 
exports.mContato_tel = function(message, client, user){

	let msg1 = {
			id: Lime.Guid(),
			type: "text/plain",
			to: message.from,
			content: "Ótimo, vou te passar um telefone para conversar com um humano pois ainda estou aprendendo a viver aqui."
  };
    
    let msg2 = {
			id: Lime.Guid(),
			type: "text/plain",
			to: message.from,
			content: "Sei que acham que os robôs vão dominar o mundo, mas sem os humanos não somos ninguém. Liga lá e tira suas dúvidas."
	};

		let msg3 = {
			id: Lime.Guid(),
			type: "text/plain",
			to: message.from,
			content: "O telefone do Cotemig Floresta é (31) 3236-8400."
  };
    let msg4 = {
			id: Lime.Guid(),
			type: "text/plain",
			to: message.from,
			content: "O telefone do Cotemig Barroca é (31) 3313-6500."
	};
		let msg5 = {
			id: Lime.Guid(),
			type: "text/plain",
			to: message.from,
			content: "Não se esqueça de dizer que eu que indiquei, eim?"
	};

	setTimeout(function(){ client.sendMessage(msg1); }, 500);
	setTimeout(function(){ client.sendMessage(msg2); }, 1500);
	setTimeout(function(){ client.sendMessage(msg3); }, 3000);
	setTimeout(function(){ client.sendMessage(msg4); }, 4500);
	setTimeout(function(){ client.sendMessage(msg5); }, 5500);

    
	//interrompe a execucao de outros receiver
	return false;
};