import mongoose from"mongoose"

const tiktokschema=mongoose.Schema({
    url:String,
    channel:String,
    song:String,
    Likes:String,
    Messages:String,
    description:String,
    Shares:String,
   
});

export default mongoose.model("tiktokVideos",tiktokschema)