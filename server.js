const express = require('express');
const app = express();
const server = require('http').Server(app);
const {v4: uuidv4 } = require('uuid'); // import uuid

app.set('view engine', 'ejs'); // set view to ejs

app.use(express.static('public'));

app.get('/',(req, res)=> {
    res.redirect('/${uuidv4()}'); // redirect room id 
})

app.get('/:room', (req, res) => {
    res.render('room', {roomId: req.params.room }) // render room id 
})








server.listen(3000); // set up server 