import React from 'react'

import RecentPosts from './RecentPosts';
import Pagination from '../pagination/Pagination';

function CardList() {
  return (
      <div className="flex flex-col md:basis-2/3">
        <h2 className="title_h2">پست های اخیر</h2>
        <RecentPosts />
        <RecentPosts />
        <RecentPosts />
        <RecentPosts />
        <Pagination />
      </div>
  );
}

export default CardList