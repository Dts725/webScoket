var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({
        port: 8181
    });

//广播
function broadcast(data) {

    wss.clients.forEach(function each(client) {
        client.send(data);

    });
};


wss.on('connection', function (ws) {

    ws.on('message', function (message) {
        console.log(message);
        broadcast(message)

    });
});