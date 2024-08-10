import prisma from "@/utils/connect"
import { NextRequest } from "next/server"

export const GET = async (req:NextRequest) => {
  const {searchParams} = new URL(req.url as string)
    try{
        const pageNum = parseInt(searchParams.get("pageNum") as string)
        const blog = searchParams.get("blog") as string || ''
        const POSTS_PER_PAGE = 2
        const [posts, count] = await prisma.$transaction([
          prisma.post.findMany({
            take: POSTS_PER_PAGE,
            skip: POSTS_PER_PAGE * (pageNum - 1),
            where: { categorySlug: { equals: blog } },
            orderBy: {createdAt:'desc'},
          }),
          prisma.post.count(),
        ]);
        
        return Response.json([posts,count],{status:200})
    } catch (err) {
        // console.log(err)
        return Response.json({msg: 'problem'},{status:500})
    }
}

export const POST = async (req:NextRequest) => {
  const body = await req.json()
    try{
        await prisma.post.create({
          data: {
            content: body.content,
            title: body.title,
            desc: body.desc,
            slug: body.slug,
            userID: body.user,
            categorySlug: body.categorySlug
          },
        });
        return Response.json({msg: 'hello', status:300})
    } catch(err) {
        console.log(err)
        return Response.json({msg: 'problem'},{status:500})
    }
}