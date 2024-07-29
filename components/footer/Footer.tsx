import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { RiInstagramLine, RiTelegramLine, RiYoutubeLine } from 'react-icons/ri';

function Footer() {
  const linksLinks = [
    ["صفحه اصلی", '/'],
    ["بلاگ", '/blog'],
    ["درباره ما", '/about'],
    ["ارتباط با ما ما", '/contact'],
  ]
  
  const tagsLinks = [
    ["طراحی", "/"],
    ["کدنویسی", "/"],
    ["next", "/"],
    ["MERN", "/"],
  ]
  return (
    <div className="flex flex-col lg:flex-row py-10 gap-4 lg:gap-20">
      <div className="flex lg:flex-[2] flex-col gap-3">
        <span className="flex items-center gap-3">
          <div className="flex relative aspect-square rounded-[50%] h-10">
            <Image src={"/logo.png"} alt="logo" fill />
          </div>
          <h2 className="title_h2">وبلاگ</h2>
        </span>
        <span>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است،
          </p>
        </span>
        <span className="flex gap-2">
          <Link href={"https://www.youtube.com"}>
            <RiYoutubeLine size={24} className="icons" />
          </Link>
          <Link href={"https://www.instagram.com"}>
            <RiInstagramLine size={24} className="icons" />
          </Link>
          <Link href={"https://www.telegram.org"}>
            <RiTelegramLine size={24} className="icons" />
          </Link>
        </span>
      </div>
      <div className="flex lg:flex-[1] justify-between">
        <span className='gap-3 flex flex-col'>
          <h2 className='font-bold text-xl'>لینک ها</h2>
          <ul>
            {linksLinks.map((link) => (
              <Link href={link[1]} key={link[1]}>
                <li className='font-light'>{link[0]}</li>
              </Link>
            ))}
          </ul>
        </span>
        <span>
        <h2 className='font-bold text-xl'>تگ ها</h2>
          <ul>
            {tagsLinks.map((link) => (
              <Link href={link[1]} key={link[1]}>
                <li className='font-light'>{link[0]}</li>
              </Link>
            ))}
          </ul>
        </span>
      </div>
    </div>
  );
}

export default Footer