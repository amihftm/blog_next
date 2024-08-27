"use server"
import prisma from "@/utils/connect";
import { redirect } from "next/navigation";

export async function getAllPosts(pageNum: string, category?: string) {
  try {
    const pNumber = parseInt(pageNum);
    const POSTS_PER_PAGE = 2;
    let posts;
    let count;
    if (category) {
      [posts, count] = await prisma.$transaction([
        prisma.post.findMany({
          take: POSTS_PER_PAGE,
          skip: POSTS_PER_PAGE * (pNumber - 1),
          where: { categorySlug: { equals: category } },
          orderBy: { createdAt: "desc" },
        }),
        prisma.post.count({where:{categorySlug:{ equals: category }}}),
      ]);
    } else {
      [posts, count] = await prisma.$transaction([
        prisma.post.findMany({
          take: POSTS_PER_PAGE,
          skip: POSTS_PER_PAGE * (pNumber - 1),
          orderBy: { createdAt: "desc" },
        }),
        prisma.post.count(),
      ]);
    }
    const lastPage = Math.ceil(count/POSTS_PER_PAGE)
    return { posts, lastPage, status: 200 };
  } catch (err) {
    console.log(err);
    return { msg: "error", status: 500, posts:[], lastPage:1 };
  }
}

export async function createNewPost(body: {
  content: string;
  title: string;
  desc: string;
  slug: string;
  user: string;
  categorySlug: string;
}) {
  let redirectPath: string | null = null
  try {
    let userID
    if(body.user) userID = (await prisma.user.findUnique({where:{email:body.user}}))?.id as string
    else userID = process.env.DEFAULT_EMAIL as string
    await prisma.post.create({
      data: {
        content: body.content,
        title: body.title,
        desc: body.desc,
        slug: body.slug,
        userID,
        categorySlug: body.categorySlug,
      },
    });
    redirectPath = `/${body.slug}`
  } catch (err) {
    console.log(err);
    return { msg: "problem", status: 500 };
  } finally {
    if(redirectPath) redirect(redirectPath);
  }
}

export async function getPostContent(slug: string) {
  try {
    const post_info = await prisma.post.findUnique({
      where: { slug },
    });
    if (post_info) {
      const result = await prisma.post.update({
        where: { id: post_info.id },
        data: { views: { increment: 1 } },
      });
      return { post_info, status: 200 };
    } else {
      return { msg: "not found", status: 404 };
    }
  } catch (e) {
    console.log(e);
    return { msg: "error", status: 500 };
  }
}

export async function getTopPosts(category?: string) {
  try {
    let posts;
    if (category) {
      posts = await prisma.post.findMany({
        take: 3,
        where: { categorySlug: category },
        orderBy: { views: "desc" },
        select: { slug: true, title: true, desc: true, createdAt: true },
      });
    } else {
      posts = await prisma.post.findMany({
        take: 3,
        orderBy: { views: "desc" },
        select: { slug: true, title: true, desc: true, createdAt: true },
      });
    }
    return { posts, status: 200 };
  } catch (err) {
    console.log(err);
    return { msg: "error", status: 500 };
  }
}
