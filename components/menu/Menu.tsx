import React from 'react'
import TopPost from './TopPost'
import HotPost from './HotPost'
import { getTopPosts } from '@/app/actions/posts';

async function Menu({category}: {category?:string}) {
  const posts = (await getTopPosts(category)).posts

  return (
    <div className="md:flex flex-col hidden md:basis-1/3 gap-8">
      <div>
        <div>
          <p className="font-light text-sm">آنچه بازدیدکننده زیاد داشته...</p>
          <h2 className="title_h2">محبوب ترین پست ها</h2>
        </div>
        <div>
          {posts && posts.map((post) => {
            return <TopPost data={post} key={post.slug + post.createdAt}/>;
          })}
        </div>
      </div>
      <div>
        <div>
          <p className="font-light text-sm">موضوعات انتخابی سردبیر</p>
          <h2 className="title_h2">انتخاب سردبیر</h2>
        </div>
        <div>
          {posts && posts.map((post) => {
            return <HotPost data={post} key={post.createdAt + post.slug}/>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Menu