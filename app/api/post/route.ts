import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req:NextRequest) => {
  const {searchParams} = new URL(req.url as string)
    try{
        const postSlug = searchParams.get("post") as string
        const post_info = await prisma.post.findUnique({
          where: { slug: postSlug },
        });
        if(post_info) {
          const result = await prisma.post.update({
            where: { id: post_info.id },
            data: { views: { increment: 1 } },
          });
          return NextResponse.json(post_info, { status: 200 })
        } else {
          return NextResponse.json({ msg: "not found" }, { status: 404});
        }
    } catch(e) {
        console.log(e)
        return NextResponse.json({msg:'failed'}, {status:500})
    }
}