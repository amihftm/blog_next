import Image from "next/image";
import Link from "next/link";
import React from "react";

function HotPost() {
  "TEMPLATE";
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
          عنوان
        </div>
        <Link href={"/"}>
          <p className="font-light text-[var(--softTextColor)]">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است.
          </p>
        </Link>
        <div className="flex flex-row gap-2 font-light text-sm text-[var(--softTextColor)]">
          <span>نام</span>
          <span>-</span>
          <span>تاریخ</span>
        </div>
      </div>
    </div>
  );
}

export default HotPost;
