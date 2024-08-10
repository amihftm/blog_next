import CardList from '@/components/cardList/CardList';
import CategoryList from '@/components/categoryList/CategoryList';
import Featured from '@/components/featured/Featured';
import Menu from '@/components/menu/Menu';
import React from 'react'

function Home({
  searchParams,
}: {
  searchParams: { [searchParams: string]: string };
}) {
  const page = parseInt(searchParams["page"]) || 1;
  return (
    <div className="flex flex-col w-full gap-6 mt-6">
      <Featured />
      <CategoryList />
      <div className="flex gap-8">
        <CardList page={page} blog='design'/>
        <Menu />
      </div>
    </div>
  );
}

export default Home