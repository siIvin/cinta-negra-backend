const Users = require('../models/Users');
const bcrypt= require('bcrypt')
module.exports = {
create: (body)=> Users.create(body),
find: ()=> Users.find(),
findbyId: (id)=> Users.findById(id),
findByEmail: (email)=>Users.findOne({email}),
update: (user,body)=> {
    Object.assign(user,body);
    return user.save()  
},
comparePasswords:(candidatePassword, password)=>{
    return bcrypt.compareSync(candidatePassword, password)
}
}