import prisma from "@/utils/connect"

export const GET = async () => {
    try{
        const categories = await prisma.category.findMany()
        return Response.json(categories,{status:200})
    } catch (err) {
        console.log(err)
        return Response.json({msg: 'problem'},{status:500})
    }
}