import moment from "jalali-moment";
import Link from "next/link";
import React from "react";

function TopPost({data}: {data:{
  slug: string;
  title: string;
  desc: string;
  createdAt: Date
}}) {
  const {slug,title, createdAt, desc } = data
  return (
    <div className="flex flex-col gap-2 my-4">
      <div className="px-3 py-1 rounded-3xl bg-blue-400 w-max font-light text-black">
      {title}
      </div>
      <Link href={slug}>
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
  );
}

export default TopPost;
