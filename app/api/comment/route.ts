import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req:NextRequest) => {
    try{
        const {searchParams} = new URL(req.url as string)
        const postSlug = searchParams.get("post") as string
        const comments = await prisma.comment.findMany({where:{postSlug:{equals:postSlug}}, orderBy:{createdAt:'desc'}})
        return NextResponse.json(comments, { status: 200 })
        
    } catch(e) {
        console.log(e)
        return NextResponse.json({msg:'failed'}, {status:500})
    }
}

export const POST = async (req:NextRequest) => {
    try{
        const body = await req.json()
        await prisma.comment.create({
            data: {
                desc: body.desc,
                postSlug: body.postSlug,
                userID: body.userEmail
            }
        })
        return Response.json({msg: 'hello', status:200})
    } catch(err) {
        console.log(err)
        return Response.json({msg: 'problem'},{status:500})
    }
}