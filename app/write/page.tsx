"use client";
import React, { useState } from "react";
import { JSONContent } from "@tiptap/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { CiSquarePlus } from "react-icons/ci";
import { FaRegImage } from "react-icons/fa";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { IoVideocamOutline } from "react-icons/io5";
import Tiptap from "@/components/tiptap/Tiptap";
import { createNewPost } from "../actions/posts";

function WritePage() {
  // const HOST_URL = "http://localhost:3000/";
  const HOST_URL = "https://blog-next-ebon.vercel.app/";
  const categorySlug = "design";
  const tempNumber = (Math.random() * 1000000).toFixed(0);
  const { status, data } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState(tempNumber);
  const [warn, setWarn] = useState("hidden");

  if (status === "loading") {
    return <div>در حال دریافت اطلاعات</div>;
  }
  if (status === "unauthenticated") {
    return router.push("/login");
  }

  async function onSubmit(value: JSONContent, text: string) {
    if (value.content && text && title && slug && categorySlug) {
      const desc = text.slice(0, 600);
      const content = JSON.stringify(value).toString();
      const body = {
        desc,
        content,
        user: data?.user?.email as string,
        title,
        slug: slug || tempNumber.toString(),
        categorySlug,
      };
      await createNewPost(body)
    } else {
      setWarn("");
    }
  }

  return (
    <div>
      <h2 className="title_h2">متن خود را بنویسید:</h2>
      <p className={`text-center text-red-500 animate-pulse ${warn}`}>
        لطفن همه اطلاعات را پر کنید.
      </p>
      <input
        placeholder="عنوان مقاله"
        className="text-2xl bg-inherit py-6 outline-none"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <div className="flex flex-row gap-1" dir="ltr">
        <p>آدرس بلاگ</p>
        <p>{HOST_URL} </p>
        <input
          placeholder="آدرس-پست-شما"
          className="flex bg-transparent px-1"
          value={slug}
          onChange={({ target }) => setSlug(target.value)}
        />
      </div>
      <div className="flex translate-x-16 items-center gap-4">
        <button
          className="text-[--softTextColor] hover:text-[--textColor]"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <CiSquarePlus size={48} />
        </button>
        {open ? (
          <div className="flex items-center text-[--softTextColor] *:border-[var(--softTextColor)] gap-2 z-50">
            <button className="border-2 p-1.5 rounded-full hover:text-[--textColor] hover:border-[--textColor]">
              <FaRegImage size={18} />
            </button>
            <button className="border-2 p-1.5 rounded-full hover:text-[--textColor] hover:border-[--textColor]">
              <AiOutlineCloudUpload size={18} />
            </button>
            <button className="border-2 p-1.5 rounded-full hover:text-[--textColor] hover:border-[--textColor]">
              <IoVideocamOutline size={18} />
            </button>
          </div>
        ) : (
          <p className="text-sm font-light text-[--softTextColor]">
            به دلیل محدودیت سرور این قابلیت در حد آپلود تصویر نیست.
          </p>
        )}
      </div>
      <Tiptap onSubmit={onSubmit} />
    </div>
  );
}

export default WritePage