import mongoose from"mongoose"

const tiktokschema=mongoose.Schema({
    url:String,
    channel:String,
    song:String,
    likes:String,
    messages:String,
    description:String,
    shares:String,
   
});

export default mongoose.model("tiktokVideos",tiktokschema)