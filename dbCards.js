const mongoose=require('mongoose');

const cardSchema= mongoose.Schema({
    name: String,
    imgUrl:String
})
const cards=mongoose.model("cards", cardSchema)
//exports.cards=cards;
module.exports=cards
//export default mongoose.model("cards", cardSchema)