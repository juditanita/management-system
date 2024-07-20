import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    occasion:String,
    destination:String,
    address:String,
   
},{
    timestamps:true,
});


const Event= mongoose.models.Event || mongoose.model('Event', eventSchema);
export default Event;