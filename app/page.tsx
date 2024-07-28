import CardList from '@/components/cardList/CardList';
import CategoryList from '@/components/categoryList/CategoryList';
import Featured from '@/components/featured/Featured';
import Menu from '@/components/menu/Menu';
import React from 'react'

function Home() {
  return (
    <div className='flex flex-col w-screen'>
      <Featured />
      <CategoryList />
      <div>
        <CardList />
        <Menu />
      </div>
    </div>
  );
}

export default Home