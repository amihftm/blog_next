import React from 'react'

import RecentPosts from './RecentPosts';
import Pagination from '../pagination/Pagination';
import { getBlogInfo } from '@/utils/categories';

async function getRecentPosts(page:number, blog:string) {
  const res = await fetch(`${process.env.HOST_URL}/api/posts?pageNum=${page}&blog=${blog}`, {cache:'no-cache'});

  if (!res.ok) throw new Error("failed");

  return res.json();
}

async function CardList({ page, blog }: { page: number; blog: string }) {
  const res = await getRecentPosts(page, blog);
  const POSTS_PER_PAGE = 2;
  const canNext = POSTS_PER_PAGE * page < res[1];
  const canPrev = page > 1;

  return (
    <div className="flex flex-col md:basis-2/3">
      <h2 className="title_h2">پست های اخیر</h2>
      {res[0].map(async function
        (post: {
          id: string;
          slug: string;
          image: string;
          title: string;
          desc: string;
          views: number;
          userID: string;
          categorySlug: string;
          createdAt: string;
        }) {
          const catName = await getBlogInfo(post.categorySlug);
          console.log(post.categorySlug)
          return (
            <RecentPosts
              cat={'design'}
              date={post.createdAt}
              desc={post.desc}
              title={post.title}
              key={post.id}
              slug={post.slug}
            />
          );
        }
      )}
      <Pagination page={page} blog={blog} hasPrev={canPrev} hasNext={canNext} />
    </div>
  );
}

export default CardList