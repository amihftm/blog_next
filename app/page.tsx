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
      <p className='text-yellow-400 sm:text-red-600 md:text-blue-500 lg:text-gray-500 xl:text-orange-400 2xl:text-lime-800'>TEXT FROM NOw</p>
    </div>
  );
}

export default Home