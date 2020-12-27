const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name:String,
    category:[String],
    menu:[{
        type:mongoose.Schema.Types.ObjectID ,ref:"CATEGORY"
    }],
    img:String,
})

module.exports= mongoose.model('CATEGORY',recipeSchema)