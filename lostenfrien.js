import {WebSocketServer} from 'ws';

const PORT = 3000

const readline = createInterface({
    input: process.stdin,
});
const server = new WebSocketServer({port: PORT, path: '/nalog'});

let connectionCount = 0;
let clints = [];
server.on('connection', (clientSocket) => {
    console.log(`Client connected. ${++connectionCount}`)
    clientSocket.send(`Current dollar price: ${currentDollarPrice.toString()}`)
    clients.push(clientSocket);
});

server.on('listening', ()=>{
    console.log(`Websocket Server started on port ${PORT}`)
});

let currentDollarPrice = 0;
readline.on('line', (textLine) => {
    const price = Number(textLine);
    if (price > 0) {
        currentDollarPrice = price;

        sendMessageToAllClients(client);
    }
});

function sendMessageToAllClients(data) {
    clients.forEach((client) => {
        client.send(data.toString());
    })
}