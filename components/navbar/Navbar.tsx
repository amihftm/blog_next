import Link from 'next/link';
import React from 'react'
import { RiYoutubeLine, RiInstagramLine,RiTelegramLine  } from "react-icons/ri";
import LoginLink from './LoginLink';
import ThemeToggle from './ThemeToggle';


function Navbar() {
  return (
    <div className="flex place-items-center justify-between py-4 mb-8">
      <div className="flex gap-3 items-center md:basis-7/12 lg:basis-5/12">
        <Link href={"/"} className="primary_link">
          صفحه اصلی
        </Link>
        <Link href={"/"} className="primary_link">
          درباره ما
        </Link>
        <LoginLink />
        <ThemeToggle />
      </div>
      <div className="flex text-lg justify-center font-black lg:basis-2/12">
        <Link href={"/"}>سایت وبلاگ</Link>
      </div>
      <div className="gap-1 basis-5/12 justify-end hidden lg:flex">
        <Link href={"https://www.youtube.com"}>
          <RiYoutubeLine size={32} className="icons" />
        </Link>
        <Link href={"https://www.instagram.com"}>
          <RiInstagramLine size={32} className="icons" />
        </Link>
        <Link href={"https://www.telegram.org"}>
          <RiTelegramLine size={32} className="icons" />
        </Link>
      </div>
    </div>
  );
}

export default Navbar