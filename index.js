var MessagingHub = require('messaginghub-client');
var WebSocketTransport = require( 'lime-transport-websocket');
var Lime = require('lime-js');


/*receivers */
var menu = require('./modules/menu/menu');
var receiverInit = require('./modules/receivers/init');
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
var receiverEbook = require('./modules/receivers/ebook');
var receiverAlunoColegio = require('./modules/receivers/alunocolegio');
var receiverAlunoFaculdade = require('./modules/receivers/alunofaculdade');
var receiverAlunoNao = require('./modules/receivers/alunonao');
var receiverContatoEmail = require('./modules/receivers/contato_email');
var receiverContatoTel = require('./modules/receivers/contato_tel');
var receiverInscricao = require('./modules/receivers/inscricao');
var receiverInscricaoNao = require('./modules/receivers/inscricao_nao');
var receiverSimBem = require('./modules/receivers/simbem');
var receiverNaoBem = require('./modules/receivers/naobem');


var client = new MessagingHub.ClientBuilder()
.withIdentifier('<<YOUR-IDENTIFIER>>')
.withAccessKey('<<YOUR-ACCESS-KEY>>')
.withTransportFactory(() => new WebSocketTransport())
.build();

// var menuInicial = function() {
// 	return {};
// }
	
client.connect()
.then(() => {
    client.addMessageReceiver("text/plain", function(message) {
       console.log(message.content);

        if (message.content === 'COMEÇAR'){
           
            receiverOi.Oi(message, client, '');
        }else if (message.content === 'faculdade'){
           
            receiverFaculdade.faculdade(message, client, '');
        }else if(message.content === 'dúvidas'||message.content === "duvidas"){
           
           receiverFAQ.faq(message, client);
        }else if (message.content === 'Tecnólogo'||message.content === "Análise de Desenvolvimento de Sistemas"
            ||message.content === "analise de desenvolvimento de sistemas"){
           
            receiverTecnologo.tecnico(message, client);
        }else if (message.content === 'Sistemas de Informação'||message.content === "sistemas de informação"||message.content === "bacharel"||message.content === "bacharelado"){
           
            receiverBacharelado.bacharel(message, client);
        }else if (message.content === 'matricula'||message.content === "matricular"||message.content === "como matricular"||message.content === "quero matricular"
            ||message.content === "matriculas"){
           
            receiverInscricao.inscrever(message, client);
        }else if (message.content === 'mais informações'||message.content === "saber mais"||message.content === "informações"){
           
            receiverSaiba.mais(message, client);
        }else if (message.content === 'tchau'||message.content === "ate logo"||message.content === "obrigado"
            ||message.content === "vlw"||message.content === "valeu"||message.content === "obg"){
           
            receiverFim.fim(message, client);
        }else if (message.content === ''||message.content === undefined){
           
            receiverVmsFalar.vamosfalar(message, client);
        }else  if (message.content === 'endereço'||message.content === 'rua'||message.content === 'como chegar'
            ||message.content === 'onde é'||message.content === 'localização'||message.content === 'local'){
           
            receiverLocalizacao.localizacao(message, client);
        }else if (message.content === 'email'||message.content === 'mensagem'){
           
            receiverContatoEmail.mContato_email(message, client);
        }else if (message.content === 'telefone'||message.content === 'contato'||message.content === 'tel'||message.content === 'ligar'){
           
            receiverContatoTel.mContato_tel(message, client);
        }else if (message.content === 'ofertas'){
           
            receiverInscricaoNao.inscrevernao(message, client);
        }else if (message.content === 'desconto'){
           
            receiverInscricao.inscrever(message, client);
        }else if (message.content === 'sim'|| message.content === 'estou' || message.content === 'bem'
            || message.content === 'bom'||message.content === 'bão'||message.content === 's'){
           
            receiverSimBem.sbem(message, client);
        }else if (message.content === 'oi'|| message.content === 'oii' || message.content === 'oiii'
            || message.content === 'olá'||message.content === 'ei'){
           
            receiverOi.oi(message, client);
        }else if (message.content === 'colegio'|| message.content === 'colégio' || message.content === 'Colégio'
            || message.content === 'Colegio'){
           
            receiverAlunoColegio.alunocolegio(message, client);
        }else if (message.content === 'facu'|| message.content === 'faculdade' || message.content === 'Faculdade'
            || message.content === 'Facu'){
           
            receiverAlunoFaculdade.alunofaculdade(message, client);
        }else if (message.content === 'não sou aluno'|| message.content === 'nao sou aluno' || message.content === 'não sou'
            || message.content === 'nao sou'){
           
            receiverAlunoNao.alunonao(message, client);
        }else{

            receiverVmsFalar.vamosfalar(message, client);
        }


    });
        client.addMessageReceiver('application/vnd.cotemig.simbem+json', function(message) {
            receiverSimBem.sbem(message, client);
        });
        client.addMessageReceiver('application/vnd.cotemig.naobem+json', function(message) {
            receiverSimBem.nbem(message, client);
        });
    
        client.addMessageReceiver('application/vnd.cotemig.alunocolegio+json', function(message) {
            receiverAlunoColegio.alunocolegio(message, client);
        });

        client.addMessageReceiver('application/vnd.cotemig.alunofaculdade+json', function(message) {
            receiverAlunoFaculdade.faculdade(message, client);
        });
        client.addMessageReceiver('application/vnd.cotemig.alunonao+json', function(message) {
            receiverAlunoNao.alunonao(message, client);
        });
        client.addMessageReceiver('application/vnd.cotemig.init+json', function(message) {
            receiverInit.init(message, client);
        });
        client.addMessageReceiver('application/vnd.cotemig.inscricao+json', function(message) {
            receiverInscricao.inscrever(message, client);
        });
        client.addMessageReceiver('application/vnd.cotemig.inscricao_nao+json', function(message) {
            receiverInscricaoNao.inscrevernao(message, client);
        });




	console.log('BOT CONNECTADO!');
	})
.catch((err) => console.error(err));

	// client.addMessageReceiver('text/plain', function(message) {
	// 	var msgInit = {		
	// 		id: Lime.Guid(),
	// 		type: "text/plain",
	// 		content: "Sejá bem vindo ao bot do colégio Cotemig. ",
	// 		to: message.from			
	// 	};
	// 	client.sendMessage(msgInit);
	// });


  // Processe a mensagem recebida


	// receiver para mensagens de texto
 
	
