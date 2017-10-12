'use strict';

var Lime = require('lime-js');
var menu = require('../menu/menu');

// Essa function valida se o usuário é pagante, caso seja mostre o menu com as opções de agendamento, caso contrário
//fixa o usuário no menu inicial.
exports.faculdade = function(message, client, user){

    let msg1 = {
        id: Lime.Guid(),
        type: "text/plain",
        to: message.from,
        content: "teste faculdade"
    };
    client.sendMessage(msg1);
    //interrompe a execucao de outros receiver
    return false;
};