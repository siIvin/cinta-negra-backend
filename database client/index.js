const mongoose= require('mongoose');
const {MONGO_URI}= require('../config');
mongoose.connect(MONGO_URI,
    { useNewUrlParser: true,
    useUnifiedTopology: true }
)
.then(()=>console.log('Conectado a la BD'))
.catch(()=>console.log('NO se puede conectar'))