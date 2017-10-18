var MessagingHub = require('messaginghub-client');
var WebSocketTransport = require( 'lime-transport-websocket');
var Lime = require('lime-js');


/*receivers */
var menu = require('./modules/menu/menu');
var receivers = require('./modules/receivers/init');
var receiverFAQ = require('./modules/receivers/faq');
var receiverFaculdade = require('./modules/receivers/faculdade');
var receiverTecnologo = require('./modules/receivers/tecnologo');
var receiverBacharelado = require('./modules/receivers/bacharelado');
var receiverInscricao = require('./modules/receivers/inscricao');
var receiverSaiba = require('./modules/receivers/saiba-mais');
var receiverFim = require('./modules/receivers/fim');
var receiverVmsFalar = require('./modules/receivers/vamosfalar');
var receiverLocalizacao = require('./modules/receivers/localizacao');
var receiverOi = require('./modules/receivers/oi');

var client = new MessagingHub.ClientBuilder()
.withIdentifier('fisrstjavascript')
.withAccessKey('bkJ0OEFyd29CSlB0eUE3QktBcWg=')
.withTransportFactory(() => new WebSocketTransport())
.build();

// var menuInicial = function() {
// 	return {};
// }
	
client.connect()
.then(() => {
	console.log('BOT CONNECTADO!');
	

	// client.addMessageReceiver('text/plain', function(message) {
	// 	var msgInit = {		
	// 		id: Lime.Guid(),
	// 		type: "text/plain",
	// 		content: "Sejá bem vindo ao bot do colégio Cotemig. ",
	// 		to: message.from			
	// 	};
	// 	client.sendMessage(msgInit);
	// });

	

	// receiver para mensagens de texto
	client.addMessageReceiver("text/plain", function(message) {
        console.log(message);

        var userCommand = {
            "id": Lime.Guid(),
            "to": "postmaster@messenger.gw.msging.net",
            "method": "get",
            "uri": "lime://messenger.gw.msging.net/accounts/" + message.from.split("@")[0]
        };

        let remetente = encodeURIComponent(message.from.split('/')[0]);
        let command = {
            "id": Lime.Guid(),
            "method": "get",
            "uri": "/buckets/" + remetente
        };

        // recupera a sessao do usuario remetente para recuperar os dados armazenados na mesma
		client.sendCommand(userCommand).then(function(dataUser){
            //console.log(dataUser);
            var infoUser = dataUser;
            var m = message.content;

            // verifica o conteudo da mensagem para direcionar ao status correto
            if (m == "oi" || m == "olá" || m == "alô" || m == "oii" || m == "oiii" || m == "ola" || m == "kd"|| m == "quem e"){
                return receiverOi.oi(message, client, infoUser.resource);
            }else if (m == "Faculdade" || m == "sobre" || m == "informações" || m == "faculdade" || m == "Sobre" || m == "Informações"){
                return receiverFaculdade.faculdade(message, client, infoUser.resource);
            } else if (m == "Faq" || m == "faq" || m == "dúvidas" || m == "duvidas"){
                return receiverFAQ.faq(message, client, infoUser.resource);
            } else if( m == "Endereço" || m == "endereço" || m == "localização" || m =="Localização" || m =="como chegar" || m =="Como chegar"){
                return receiverLocalizacao.localizacao(message, client, infoUser.resource);
            } else if( m == "saber mais" || m == "Saber mais"){
                return receiverSaiba.mais(message, client, infoUser.resource);
            }
            else {
                receivers.init(message, client, infoUser.resource);
                // // se nao foi informada nenhuma das opcoes de menu, recupera o status do usuario
                // client.sendCommand(command).then(function (result) {
                //     console.log("result", result);

                //     //if (infoUser){
                //     switch (result.resource.sessionState) {
                //         case 'Faculdade':
                //             receivers.init(message, client, infoUser.resource);
                //             break;
                //         case 'FAQ':
                //             receivers.init(message, client, infoUser.resource);
                //             break;
                //         default:
                //             receivers.init(message, client, infoUser.resource);
                //     }
                // }, function (errorCommand) {
                //     // se o usuario nao possui bucket, grava o mesmo no status inicial
                //     console.log(errorCommand);

                //     let firstCommand = {
                //         "id": Lime.Guid(),
                //         "method": "set",
                //         "uri": "/buckets/" + message.from.split('@')[0],
                //         "type": "application/json",
                //         "resource": {
                //             "sessionState": " "
                //         }
                //     };
                //     client.sendCommand(firstCommand);
                //     receivers.init(message, client, infoUser.resource);
                // });
            }

		}, function(error) {
            // se o messenger nao aceitou a mensagem enviada inicialmente, grava o mesmo no status inicial
            console.log(error);
		});
	});

   
    /* Receivers responsáveis pelo controle do fluxo do Menu.*/
    client.addMessageReceiver('application/vnd.cotemig.inicio+json', function(message) {
        receivers.init(message, client, '');
    });
	client.addMessageReceiver('application/vnd.cotemig.faculdade+json', function(message) {
		receiverFaculdade.faculdade(message, client);
	});
	client.addMessageReceiver('application/vnd.cotemig.faq+json', function(message) {
		receiverFAQ.faq(message, client);
	});
    client.addMessageReceiver('application/vnd.cotemig.tecnologo+json', function(message) {
        receiverTecnologo.tecnico(message, client);
    });
    client.addMessageReceiver('application/vnd.cotemig.bacharelado+json', function(message) {
        receiverBacharelado.bacharel(message, client);
    });
    client.addMessageReceiver('application/vnd.cotemig.inscrever-inscricao+json', function(message) {
        receiverInscricao.inscrever(message, client);
    });
    client.addMessageReceiver('application/vnd.cotemig.saiba+json', function(message) {
        receiverSaiba.mais(message, client);
    });
    client.addMessageReceiver('application/vnd.cotemig.fim+json', function(message) {
        receiverFim.final(message, client);
    });
    client.addMessageReceiver('application/vnd.cotemig.vamosfalar+json', function(message) {
        receiverVmsFalar.vamosfalar(message, client);
    });
    client.addMessageReceiver('application/vnd.cotemig.localizacao+json', function(message) {
        receiverLocalizacao.localizacao(message, client);
    });
    client.addMessageReceiver('application/vnd.cotemig.oi+json', function(message) {
        receiverOi.oi(message, client);
    });
})
.catch((err) => console.error(err));;