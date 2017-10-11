"use strict";

let MessagingHub = require('messaginghub-client');
let WebSocketTransport = require('lime-transport-websocket');
let Lime = require('lime-js');

let client = new MessagingHub.ClientBuilder()
        .withIdentifier('{identifier}')
        .withAccessKey('{accessKey}')
        .withTransportFactory(() => new WebSocketTransport())
        .build();

client.connect()
    .then(() => {


;
