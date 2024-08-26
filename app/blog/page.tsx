import CardList from '@/components/cardList/CardList'
import Menu from '@/components/menu/Menu'
import React from 'react'
import { getBlogInfo } from '../actions/categories';

async function BlogPage({
  searchParams,
}: {
  searchParams: { pageNum?:string, cat:string };
}) {
  const currentPage = parseInt(searchParams.pageNum || '1');
  const blog = searchParams.cat;
  const blogInfo = (await getBlogInfo(blog)).CategoryInfo

  return (
    <div>
      <h1 className='flex justify-center self-center my-8 py-5 bg-red-400 font-bold text-3xl'>بلاگ های {blogInfo?.title}</h1>
      <div className="flex gap-8">
        <CardList page={currentPage} blog={blogInfo?.slug as string}/>
        <Menu category={searchParams.cat}/>
      </div>
    </div>
  );
}

export default BlogPage