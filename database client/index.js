const mongoose= require('mongoose')
mongoose.connect(process.env.MONGO_URI,
    { useNewUrlParser: true,
    useUnifiedTopology: true }
)
.then(()=>console.log('Conectado a la BD'))
.catch(()=>console.log('NO se puede conectar'))