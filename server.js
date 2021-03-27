const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server) // import io
const { ExpressPeerServer } = require('peer'); // import peer
const peerServer = ExpressPeerServer(server, {
    debug: true
});

const {v4: uuidv4 } = require('uuid'); // import uuid


app.set('view engine', 'ejs'); // set view to ejs
app.use(express.static('public'));

app.use('/peerjs', peerServer); // specify what URL youre going to us


app.get('/', (req, res)=> {
     res.redirect(`/${uuidv4()}`) // redirect room id 
})

app.get('/:room', (req, res) => {
    res.render('room', {roomId: req.params.room }) // render room id 
})

io.on('connection', socket => { // create connection
socket.on('join-room', (roomId, userId) => { // tell socket to join room to connect
    socket.join(roomId); // join room
    socket.to(roomId).emit('user-connected', userId); // broadcast user that joined so everyone in that room can add that user to their stream
    socket.on('message', message => {
        io.to(roomId).emit('createMessage', message)
    })
})

})
    
server.listen(3000); // set up server 
