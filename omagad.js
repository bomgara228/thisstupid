import { WebSocket } from "ws";

const socket = new WebSocket(`ws:/localhost:3000/price`)

socket.on('open', () => {
    console.log('connected');
})

socket.on('message', (data) => {
    console.log(data.toString());
    console.log('New price received')
})