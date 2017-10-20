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
			"text": "Meu nome é Mig, assistente virtual do Cotemig. Você é aluno do Cotemig?",
			"options": [
				{
					"text": "Colegio",
					"type": "application/vnd.cotemig.alunocolegio+json",
					"value": {}
				},
				{
					"text": "Faculdade",
					"type": "application/vnd.cotemig.alunofaculdade+json",
					"value": {}
				},
				{
					"text": "Não sou aluno",
					"type": "application/vnd.cotemig.alunonao+json",
					"value": {}
				}
			]
		}
	};
};


exports.simnaodesconto = function(destinatario){
	return {
		"id": Lime.Guid(),
		"to": destinatario,
		"type": "application/vnd.lime.select+json",
		"content": {
			"scope": "immediate",
			"text": "Sim ou não?",
			"options": [
				{
					"text": "Sim",
					"type": "application/vnd.cotemig.inscricao+json",
					"value": {}
				},
				{
					"text": "Não",
					"type": "application/vnd.cotemig.inscricao.nao+json",
					"value": {}
				}
			]
		}
	};
};

exports.simnaobem = function(destinatario){
	return {
		"id": Lime.Guid(),
		"to": destinatario,
		"type": "application/vnd.lime.select+json",
		"content": {
			"scope": "immediate",
			"text": "Sim ou não?",
			"options": [
				{
					"text": "Sim",
					"type": "application/vnd.cotemig.simbem+json",
					"value": {}
				},
				{
					"text": "Não",
					"type": "application/vnd.cotemig.inscricao.naobem+json",
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



exports.contate = function(destinatario, user) {
	return {
		"id": Lime.Guid(),
		"to": destinatario,
		"type": "application/vnd.lime.select+json",
		"content": {
			"scope": "immediate",
			"text": "Como estou aprendendo, agora você precisará da ajuda de um humano. Escolha a melhor forma abaixo:",
			"options": [
				{
					"text": "Telefone",
					"type": "application/vnd.cotemig.contato_tel+json",
					"value": {}
				},
				{
					"text": "Email",
					"type": "application/vnd.cotemig.contato_email+json",
					"value": {}
				},
				{
					"text": "Visita",
					"type": "application/vnd.cotemig.localizacao+json",
					"value": {}
				}
			]
		}
	};
};
