
const {NODE_ENV, MONGO_USER, MONGO_PASSWORD}= process.env;

//const MONGO_URI= "mongodb+srv://silviag:silvia123@cluster0-6lomw.mongodb.net/test?retryWrites=true&w=majority"
const config= {
    production:{
        MONGO_URI: `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0-6lomw.mongodb.net/production?retryWrites=true&w=majority`
     },
    
     staging: {
      MONGO_URI:`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0-6lomw.mongodb.net/staging?retryWrites=true&w=majority`
     },

     test:{
     MONGO_URI:`mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@cluster0-6lomw.mongodb.net/test?retryWrites=true&w=majority`

     }
};

module.exports= config[NODE_ENV]