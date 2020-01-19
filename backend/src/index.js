const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); 
const http = require('http');

const routes  = require('./routes');
const { setupWebSocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebSocket(server);

mongoose.connect('mongodb+srv://alexandre:AR*innfomaster@2019@cluster0-f5whu.mongodb.net/Weak10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});

app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());
app.use(routes);

server.listen(3333);
