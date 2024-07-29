import CardList from '@/components/cardList/CardList'
import Menu from '@/components/menu/Menu'
import React from 'react'

function BlogPage() {
  return (
    <div>
      <h1 className='flex justify-center self-center my-8 py-5 bg-red-400 font-bold text-3xl'>بلاگ های طراحی</h1>
      <div className="flex gap-8">
        <CardList />
        <Menu />
      </div>
    </div>
  );
}

export default BlogPage