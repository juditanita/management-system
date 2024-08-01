import mongoose from "mongoose";

const 
EventSchema = new mongoose.Schema({
    occasion: String,
    details: String,
    address: String,
    //location:String rather than address
    // imgUrl:String,
    //startDateTime:{type:Date, required:true, default:Date.now}
    //finishDateTime:{type:Date, required:true, default:Date.now},
    //price:String,
    //isFree:{type:Boolean, default:false}
    // category:{type:Schema.Types.ObjectId, ref:'Category'},
    // organizer:{type:Schema.Types.ObjectId, ref:'User'},
    
    //date
    //trending:boolean default:false
   
},{
    timestamps:true,
});


const Event = mongoose.models.Event || mongoose.model('Event', EventSchema);
export default Event;