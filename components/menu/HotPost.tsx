import moment from "jalali-moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function HotPost({data}: {data:{
  slug: string;
  title: string;
  desc: string;
  createdAt: string
}}) {
  const {slug,title, createdAt, desc } = data
  return (
    <div className="flex flex-row gap-4 items-center  my-4">
      <div className="flex flex-[1] relative aspect-square rounded-[50%] overflow-hidden border-[3px] bg-gray-400">
        <Image
          src={"/images/root/featured.webp"}
          alt="پست اخیر"
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-[4] flex-col gap-2">
        <div className="px-3 py-1 rounded-3xl bg-blue-400 w-max font-light text-black">
        {title}
        </div>
        <Link href={"/"}>
          <p className="font-light text-[var(--softTextColor)]">
          {desc.slice(0, 150)} ...
          </p>
        </Link>
        <div className="flex flex-row gap-2 font-light text-sm text-[var(--softTextColor)]">
          <span>طراحی</span>
          <span>-</span>
          <span>{moment(createdAt).locale('fa').format('jYYYY/jMM/jDD')}</span>
        </div>
      </div>
    </div>
  );
}

export default HotPost;
