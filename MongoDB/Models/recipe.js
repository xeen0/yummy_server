const mongoose = require('mongoose')

const recipeSchema = new mongoose.Schema({
    name:String,
    duration:String,
    ingredients:[String],
    steps:[String],
    imgURL:String,

})

module.exports= mongoose.model('RECIPE',recipeSchema)