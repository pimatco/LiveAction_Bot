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
					"text": "Noticias",
					"type": "application/vnd.cotemig.faq+json",
					"value": {}
				}
			]
		}
	};
};

exports.cursos = function(destinatario){
	return {
		"id": Lime.Guid(),
		"to": destinatario,
		"type": "application/vnd.lime.select+json",
		"content": {
			"scope": "immediate",
			"text": "Entendi, temos essas opções de agendamento. Escolha uma opção:",
			"options": [
				{
					"text": "Análise de Sistemas",
					"type": "application/vnd.cotemig.tecnologo+json",
					"value": {}
				},
				{
					"text": "Sistema de Informação",
					"type": "application/vnd.cotemig.bacharelado+json",
					"value": {}
				}
			]
		}
	};
};

exports.maisTecnologo = function(destinatario){
	return {
		"id": Lime.Guid(),
		"to": destinatario,
		"type": "application/vnd.lime.select+json",
		"content": {
			"scope": "immediate",
			"text": "Entendi, temos essas opções de agendamento. Escolha uma opção:",
			"options": [
				{
					"text": "Increva-se",
					"type": "application/vnd.cotemig.inscrever-inscricao+json",
					"value": {}
				},
				{
					"text": "Saiba mais",
					"type": "application/vnd.cotemig.saiba+json",
					"value": {}
				}
			]
		}
	};
};

exports.maisFaculdade = function(destinatario){
	return {
		"id": Lime.Guid(),
		"to": destinatario,
		"type": "application/vnd.lime.select+json",
		"content": {
			"scope": "immediate",
			"text": "Entendi, temos essas opções de agendamento. Escolha uma opção:",
			"options": [
				{
					"text": "Increva-se",
					"type": "application/vnd.cotemig.inscrever-inscricao+json",
					"value": {}
				},
				{
					"text": "Saiba mais",
					"type": "application/vnd.cotemig.saiba+json",
					"value": {}
				}
			]
		}
	};
};

// menu inicial
exports.menuFinal = function(destinatario, user) {
	return {
		"id": Lime.Guid(),
		"to": destinatario,
		"type": "application/vnd.lime.select+json",
		"content": {
			"scope": "immediate",
			"text": "Posso te ajudar em mais alguma coisa?",
			"options": [
				{
					"text": "Início",
					"type": "application/vnd.cotemig.inicio+json",
					"value": {}
				},
				{
					"text": "Não! Obrigado",
					"type": "application/vnd.cotemig.fim+json",
					"value": {}
				}
			]
		}
	};
};