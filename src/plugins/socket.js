import VueSocketIO from 'vue-socket.io';
import SocketIO from 'socket.io-client';
export default new VueSocketIO({
    debug: true,
    connection: SocketIO('ws://localhost:3000')
});