import User from "@/models/Users";
import { NextResponse } from "next/server";

export const createUser = async(user)=>{
    try{
        await dbConnect();

         const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser));
    }
    
    catch(error){
        return NextResponse.json({
            message:"Error", error
        },{status:500})
    
}
}