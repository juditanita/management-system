import mongoose from "mongoose";

const 
EventSchema = new mongoose.Schema({
    occasion: String,
    details: String,
    address: String,
    // img:String,
    // category:String,
    //author:String
    //date
    //trending:boolean default:false
   
},{
    timestamps:true,
});


const Event = mongoose.models.Event || mongoose.model('Event', EventSchema);
export default Event;