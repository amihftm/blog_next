"use server"
import prisma from "@/utils/connect";

export async function getComments(slug:string) {
    try{
        const comments = await prisma.comment.findMany({
          where: { postSlug: { equals: slug } },
          orderBy: { createdAt: "desc" },
        });
        if(comments.length>0) return {comments, status:200}
        else return {comments:null, status:404}
        
    } catch(e) {
        console.log(e)
        return {msg:'error', status:500}
    }
}

export async function sendComment(body:{desc:string, postSlug:string, userEmail?:string}) {
    try{
        const createdAt = new Date()
        let userID
        if(body.userEmail === null) userID = process.env.DEFAULT_EMAIL as string
        else userID = (await prisma.user.findUnique({where:{email:body.userEmail}}))?.id as string
        await prisma.comment.create({
            data: {
                desc: body.desc,
                postSlug: body.postSlug,
                userID,
                createdAt,
            }
        })
        return {msg:'done!', status:201}
    } catch(err) {
        console.log(err)
        return {msg:'error!', status:500}
    }
}