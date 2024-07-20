import mongoose from "mongoose";

const 
EventSchema = new mongoose.Schema({
    occasion: String,
    destination: String,
    address: String,
   
},{
    timestamps:true,
});


const Event = mongoose.models.Event || mongoose.model('Event', EventSchema);
export default Event;