const mongoose = require('mongoose')
const Schema = mongoose.Schema

let movieSchema = new Schema({
    name:{
        type:String
    },
    img:{
        type:String
    },
    vdo_ex:{
        type:String
    },
    vdo_main:{
        type:String
    },
    story:{
        type:String
    }
},{
    collection:'name-movie'
})

module.exports = mongoose.model('Movie',movieSchema)