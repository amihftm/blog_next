import React from 'react'
import TopPost from './TopPost'
import HotPost from './HotPost'

function Menu() {
  return (
    <div className="md:flex flex-col hidden md:basis-1/3 gap-8">
        <div>
          <div>
            <p className="font-light text-sm">آنچه بازدیدکننده زیاد داشته...</p>
            <h2 className="title_h2">محبوب ترین پست ها</h2>
          </div>
          <div>
            <TopPost />
            <TopPost />
            <TopPost />
          </div>
        </div>
        <div>
          <div>
            <p className="font-light text-sm">موضوعات انتخابی سردبیر</p>
            <h2 className="title_h2">انتخاب سردبیر</h2>
          </div>
          <div>
            <HotPost />
            <HotPost />
            <HotPost />
            <HotPost />
          </div>
        </div>
      </div>
  )
}

export default Menu