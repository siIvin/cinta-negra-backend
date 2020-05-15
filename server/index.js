
const express = require('express');
const server = express();
const cors = require ('cors');
const fileUpload = require('express-fileupload');
const {errors}= require('celebrate')
const PORT = process.env.PORT || 3000;
server.use(express.urlencoded({extended:true}));
server.use(express.json());
server.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/',
}));

server.use(cors());

//Endpoints
server.get('/', (req, res) => res.send('Hello World!'));


server.use('/api/v1', require('../router'))
server.use(errors())


//encender servidor
module.exports = {server, PORT};
