"use client"
import Link from 'next/link'
import React, { useState } from 'react'

function LoginLink() {
  const [userIn, setUserIn] = useState(false)
  const [menuOpen, setMenu] = useState(false)
  return (
    <>
      <div
        className="flex py-2 justify-center size-8 border-[var(--textColor)] border-2 rounded-md md:hidden"
        onClick={() => setMenu(!menuOpen)}
      >
        <div
          className={`flex flex-col justify-between items-center transition-transform ${
            menuOpen && "rotate-90"
          }`}
        >
          <div className="h-0.5 w-4 bg-[var(--textColor)]"></div>
          <div className="h-0.5 w-4 bg-[var(--textColor)]"></div>
          <div className="h-0.5 w-4 bg-[var(--textColor)]"></div>
        </div>
      </div>
      {userIn ? (
        <Link href={"/write"}>متن جدید</Link>
      ) : (
        <Link href={"/login"}>ورود</Link>
      )}
      <div
        className={`bg-[var(--bg)] absolute left-0 top-12 h-[calc(100%-3rem)] w-full ${
          menuOpen ? "flex" : "hidden"
        } opacity-90 justify-center items-center`}
      >
        <div className='flex flex-col justify-between items-center gap-3 *:text-3xl'>
          <Link href={"/"}>صفحه اصلی</Link>
          <Link href={"/"}>درباره ما</Link>
        </div>
      </div>
    </>
  );
}

export default LoginLink