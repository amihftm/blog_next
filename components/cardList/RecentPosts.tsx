import moment from 'jalali-moment';
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function RecentPosts({date, cat, title, desc, slug}:{date:string, cat:string, title:string, desc:string, slug:string}) {
  return (
    <div className="flex w-full min-h-72 justify-between gap-8 py-6">
      <div className="flex-1 relative hidden 2xl:flex">
        <Image
          src={"/images/root/featured.webp"}
          alt="پست اخیر"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex-1 gap-2 flex flex-col">
        <div className="flex gap-2">
          <p className='font-light text-[var(--softTextColor)]'>{moment(date).locale('fa').format('jYYYY/jMM/jDD')}</p>
          <p>-</p>
          <p className="text-red-600">{cat}</p>
        </div>
        <h2 className="title_h2">{title}</h2>
        <p className='font-light text-[var(--softTextColor)]'>
          {desc} ...
        </p>
        <Link href={slug}>
        <p className="font-normal border-b-2 w-max border-b-red-600">
          بیشتر
        </p>
        </Link>
      </div>
    </div>
  );
}

export default RecentPosts