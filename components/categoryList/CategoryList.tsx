import React from 'react'
import { FaCode } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import Link from 'next/link';

function CategoryList() {
  const categories = [
    ["MERN", "/blog?cat=mern", <FaReact size={24} key={"cat=mern"}/>, "#FFAEBC"],
    ["NEXT.JS", "/blog?cat=next", <SiNextdotjs size={24} key={"cat=next"}/>, "#A0E7E5"],
    ["طراحی", "/blog?cat=design", <FaPen size={24} key={"cat=design"}/>, "#B4F8C8"],
    ["کدنویسی", "/blog?cat=code", <FaCode size={24} key={"cat=code"}/>, "#FBE7C6"],
  ]
  return (
    <div className="flex flex-col gap-4">
      <h2 className='title_h2'>دسته بندی ها</h2>
      <ul className='flex gap-2 py-2 overflow-auto' key={'listItems'}>
        {categories.map((category, index) => {
          return (
            <li
              key={category[1].toString() + index.toString()}
              className={`flex rounded-xl text-black`}
              style={{ backgroundColor: category[3].toString() }}
            >
              <Link key={category[1] as string} href={category[1].toString()} className='flex flex-col gap-1 w-44 h-20 justify-center items-center'>
                {category[2]}
                <p>{category[0]}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CategoryList