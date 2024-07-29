import Link from "next/link";
import React from "react";

function TopPost() {
  "TEMPLATE";
  return (
    <div className="flex flex-col gap-2 my-4">
      <div className="px-3 py-1 rounded-3xl bg-blue-400 w-max font-light text-black">
        عنوان
      </div>
      <Link href={"/"}>
        <p className="font-light text-[var(--softTextColor)]">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است.
        </p>
      </Link>
      <div className="flex flex-row gap-2 font-light text-sm text-[var(--softTextColor)]">
        <span>نام</span>
        <span>-</span>
        <span>تاریخ</span>
      </div>
    </div>
  );
}

export default TopPost;
