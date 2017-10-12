var Lime = require('lime-js');
var moment = require('moment');

// menu inicial
exports.menuInicial = function(destinatario, user) {
    return {
        "id": Lime.Guid(),
        "to": destinatario,
        "type": "application/vnd.lime.select+json",
        "content": {
            "scope": "immediate",
            "text": "Seja bem vindo(a) ! Eu sou Mig assistente virtual do cotemig. Como posso ajudar?",
            "options": [
                {
                    "text": "Faculdade",
                    "type": "application/vnd.cotemig.faculdade+json",
                    "value": {}
                },
                {
                    "text": "FAQ",
                    "type": "application/vnd.cotemig.faq+json",
                    "value": {}
                }
            ]
        }
    };
};
