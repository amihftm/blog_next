import prisma from "@/utils/connect"
import { NextRequest } from "next/server"

export const GET = async (req:NextRequest) => {
  const { searchParams } = new URL(req.url as string);
    try{
      const cat = searchParams.get("cat") as string;
      const posts = await prisma.post.findMany({
        take: 3,
        where: { categorySlug: cat },
        orderBy: { views: "desc" },
        select: { slug: true, title: true, desc: true, createdAt:true },
      });

      return Response.json(posts, { status: 200 });
    } catch (err) {
        // console.log(err)
        return Response.json({msg: 'problem'},{status:500})
    }
}