"use server"
import prisma from "@/utils/connect";

export async function getUserInfo(userID: string) {
    try{
        let userInfo = await prisma.user.findUnique({
          where: { id: userID },
          select: {
            id: true,
            name: true,
            image: true,
            createdAt: false,
            updatedAt: false,
          },
        });
        if(!userInfo) userInfo = {
          id: "error",
          name: "نام کاربر",
          image: "/temp/profile.png",
        }
        return {
          userInfo: {
            id: userInfo.id as string,
            name: userInfo.name as string,
            image: userInfo.image as string,
          },
          status: 200,
        };
    } catch (err) {
        console.log(err)
        let userInfo = {
          id: "error",
          name: "نام کاربر",
          image: "/temp/profile.png",
        }
        return {userInfo, msg:'error', status:500}
    }
}