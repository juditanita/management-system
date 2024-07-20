
import  { dbConnect } from "@/libs";
import Events from "@/models/Events";
import { NextResponse } from "next/server";

export async function POST(req){
    try{
        const {occasion, destination, address} = await req.json();
        await dbConnect();
        await Events.create({occasion, destination, address});
    
        return NextResponse.json({
            message:"Events successfully created"
        },{status:201});
    }
    
    catch(error){
        return NextResponse.json({
            message:"Error", error
        },{status:500})
    
}
}

export async function GET(){
    await dbConnect();
    const eventList = await Events.find();
    return NextResponse.json({
        eventList})
}

export async function DELETE(req){
    const id = req.nextUrl.searchParams.get('id');
    await dbConnect();
    await Events.findByIdAndDelete(id);
    return NextResponse.json({message:"Event deleted"},{status:200})
}