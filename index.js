require('dotenv').config();
const {server, PORT} = require('./server');
require('./database client');
server.listen(PORT,()=> console.log(`Listening on ${PORT}`))