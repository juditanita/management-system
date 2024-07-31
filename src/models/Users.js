import mongoose from "mongoose";

const 
UserSchema = new mongoose.Schema({
    clerkId:{type:String,required:true,unique:true},
    firstName: String,
    lastName: String,
    username: {
        type:String, required:true},
    email: {
        type:String, required:true},
    photo:String,
   
},{
    timestamps:true,
});


const User = mongoose.models.User || mongoose.model('User', UserSchema);
export default User;