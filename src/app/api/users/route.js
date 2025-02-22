import { auth, currentUser } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET(){
    const {userId} = auth();
    const user = await currentUser();

    if(!userId){
        return NextResponse.json({
            message:"Not authenticated"},{status:404}
            
        )
    }

    return NextResponse.json({
        message:"Authenticated",
        users:{userId:userId, username: user?.username}
    },{
        status:200
    })
}