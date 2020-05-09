const jwt= require('jsonwebtoken');

module.exports ={
    verifyToken: (req,res, next)=>{
        try {
            const {authorization} = req.headers;
            //auth contiene: Bearer token
            const token = authorization.split(" ")[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            console.log('process.env.JWT_SECRET')
            console.log(process.env.JWT_SECRET)
            req.decoded = decoded;
            console.log('token')
            console.log(token)
            next()
            
        } catch (error) {
            res.status(403).send({error})
        }
    }
}