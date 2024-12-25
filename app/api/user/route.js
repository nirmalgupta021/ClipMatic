import { db } from "@/configs/db";
import { USER_TABLE } from "@/configs/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req){
    const {user} = await req.json();

    //check is User exist in database
    const userResult = await db.select().from(USER_TABLE).where(eq(USER_TABLE.email, user?.primaryEmailAddress.emailAddress));

    if(userResult?.length==0){
        //Adding user if user doesn't exist in database
        const result = await db.insert(USER_TABLE).values({
            name: user.fullName,
            email: user?.primaryEmailAddress.emailAddress
        }).returning(USER_TABLE);

        return NextResponse.json(result[0]);
    }

    

    return NextResponse.json(userResult[0]);
}