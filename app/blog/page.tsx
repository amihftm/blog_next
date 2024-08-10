import CardList from '@/components/cardList/CardList'
import Menu from '@/components/menu/Menu'
import { getBlogInfo } from '@/utils/categories';
import React from 'react'

async function BlogPage({
  searchParams,
}: {
  searchParams: { [searchParams: string]: string };
}) {
  const page = parseInt(searchParams["page"]) || 1;
  const blog = searchParams["cat"] || "";
  const blogInfo = await getBlogInfo(blog)

  return (
    <div>
      <h1 className='flex justify-center self-center my-8 py-5 bg-red-400 font-bold text-3xl'>بلاگ های {blogInfo.title}</h1>
      <div className="flex gap-8">
        <CardList page={page} blog={blogInfo.slug}/>
        <Menu />
      </div>
    </div>
  );
}

export default BlogPage