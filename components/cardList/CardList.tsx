import React from 'react'

import RecentPosts from './RecentPosts';
import Pagination from '../pagination/Pagination';
import { getBlogInfo } from '@/app/actions/categories';
import { getAllPosts } from '@/app/actions/posts';


async function CardList({ page, blog }: { page: number; blog?: string }) {
  const res = await getAllPosts(page.toString(), blog);
  const canNext = res.lastPage > page;
  const canPrev = page > 1;

  return (
    <div className="flex flex-col md:basis-2/3">
      <h2 className="title_h2">پست های اخیر</h2>
      {res.posts.map(async function
        (post) {
          const catName = (await getBlogInfo(post.categorySlug)).CategoryInfo;
          return (
            <RecentPosts
              cat={catName?.title as string}
              date={post.createdAt}
              desc={post.desc}
              title={post.title}
              key={post.id}
              slug={post.slug}
            />
          );
        }
      )}
      <Pagination page={page} hasPrev={canPrev} hasNext={canNext} />
    </div>
  );
}

export default CardList