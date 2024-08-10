import prisma from "@/utils/connect"
import { NextApiRequest } from "next"
import { NextRequest } from "next/server"

export const GET = async (req:NextRequest) => {
    const {searchParams} = new URL(req.url as string)
    try{
        const cat = searchParams.get("blog") as string

        const CategoryInfo = await prisma.category.findUnique({where:{slug:cat}})
        return Response.json(CategoryInfo,{status:200})
    } catch (err) {
        console.log(err)
        return Response.json({msg: 'problem'},{status:500})
    }
}