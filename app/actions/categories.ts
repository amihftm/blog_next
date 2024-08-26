"use server"
import prisma from "@/utils/connect"

export async function getBlogInfo(blog:string) {
    try{
        const CategoryInfo = await prisma.category.findUnique({where:{slug:blog}})
        return {CategoryInfo, status:200}
    } catch (err) {
        console.log(err)
        return {msg:'error', status:500}
    }
}

export async function getCategories() {
    try{
        const categories = await prisma.category.findMany()
        return {categories, status:200}
    } catch (err) {
        console.log(err)
        return {msg:'error', status:500}
    }
}