import io from 'socket.io-client';
const socket = io('wss://localhost:5000');

export default socket;