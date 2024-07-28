import React from 'react'
import { FaCode } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import Link from 'next/link';

function CategoryList() {
  const categories = [
    // ["", "", "", ""],
    ["MERN", "/blog?cat=mern", <FaReact size={24}/>, "#FFAEBC"],
    ["NEXT.JS", "/blog?cat=next", <SiNextdotjs size={24}/>, "#A0E7E5"],
    ["طراحی", "/blog?cat=design", <FaPen size={24}/>, "#B4F8C8"],
    ["کدنویسی", "/blog?cat=code", <FaCode size={24}/>, "#FBE7C6"],
  ]
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-medium text-2xl">دسته بندی ها</h1>
      <ul className='flex gap-2 py-2' key={'listItems'}>
        {categories.map((category) => {
          return (
            <li
              key={category[0] as string}
              className={`flex rounded-xl text-black`}
              style={{ backgroundColor: category[3].toString() }}
            >
              <Link key={category[0] as string} href={category[1].toString()} className='flex flex-col gap-1 w-44 h-20 justify-center items-center'>
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