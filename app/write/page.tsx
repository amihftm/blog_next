"use client"
import React, { useState } from 'react'
import { CiSquarePlus } from "react-icons/ci";
import { FaRegImage } from "react-icons/fa";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { IoVideocamOutline } from "react-icons/io5";
import './writePage.module.css'
import Tiptap from '@/components/tiptap/Tiptap';

function WritePage() {
    const [value, setValue] = useState('')
    const [open, setOpen] = useState(false)


  return (
    <div className="flex flex-col p-4">
      <h2 className="title_h2">متن خود را بنویسید:</h2>
      <input
        placeholder="عنوان مقاله"
        className="text-2xl bg-inherit py-6 outline-none"
      />
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
            هنوز محتوای تصویری بارگزاری نشده است.
          </p>
        )}
      </div>
      <Tiptap onChange={(val: any) => {setValue(val)}}/>
    </div>
  );
}

export default WritePage