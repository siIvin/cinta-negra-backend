const mongoose= require('mongoose');
const Schema = mongoose.Schema;
const books= require('./Books');

const studentSchema = new Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name:{
        type: String,
        required: true
    },
    dateOfBirth:{
        type: Date,
        required: true
    },
    profile_img:{
        type: String,
    },
    readBooks:[
        
        {
        comment:{
            type: {type: String}
        }, 
        book: {type: Schema.ObjectId, ref: books}
        }
     ],
    is_active:{
        type: Boolean,
        default: true
    }
})



const students = mongoose.model('student', studentSchema);

module.exports = students

