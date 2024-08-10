import prisma from "@/utils/connect"
import { NextRequest } from "next/server"

export const GET = async (req:NextRequest) => {
  const { searchParams } = new URL(req.url as string);
    try{
        const user = searchParams.get("user") as string

        const userInfo = await prisma.user.findUnique({
          where: { id: user },
          select: {
            id: true,
            name: true,
            image: true,
            createdAt: false,
            updatedAt: false,
          },
        });
        return Response.json(userInfo,{status:200})
    } catch (err) {
        console.log(err)
        return Response.json({msg: 'problem'},{status:500})
    }
}