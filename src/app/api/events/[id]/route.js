import { dbConnect } from "@/libs";
import Events from "@/models/Events";
import { NextResponse } from "next/server";

export async function PUT(req, {params}){
    const {id} = params;

    const {newOccasion: occasion, newDetails:details, newAddress:address} = await req.json();

    await dbConnect();

    await Events.findByIdAndUpdate(id, {occasion, address, details});
    return NextResponse.json({
        message:"event updated"
    }, {status:200})


}

export async function GET(req, {params}){
    const {id} = params;

    await dbConnect();
    const res = await Events.findOne({_id:id});

    return NextResponse.json(res,{status:200});
}