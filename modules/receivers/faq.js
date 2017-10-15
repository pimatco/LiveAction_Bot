'use strict';

var Lime = require('lime-js');
var menu = require('../menu/menu');

// Essa function valida se o usuário é pagante, caso seja mostre o menu com as opções de agendamento, caso contrário
//fixa o usuário no menu inicial.
exports.faq = function(message, client, user){

    let msg1 = {
        id: Lime.Guid(),
        type: "text/plain",
        to: message.from,
        content: "Para começar coloque o seu email:"
    };
    client.sendMessage(msg1);
    //interrompe a execucao de outros receiver
    return false;
};