const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
    title : {
        type : String,
        required: true
        },
    img :{
        type : String,
        required : true,
    },
    createDate : {
        type : Date,
    },    
    src : {
        type : String,
        required : true,
        unique:true        
    },
    isActive : {
        type : Boolean,
        default : true
    }    
})

const songModel = mongoose.model('Song',songSchema)
module.exports = songModel


