"use client"
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import React, { useState } from 'react'

function LoginLink() {
  const {data, status} = useSession()
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
      {status === "authenticated" ? (
        <>
          <Link href={"/write"} className="primary_link">
            متن جدید
          </Link>
          <button onClick={() => signOut()} className="primary_link ">
            خروج
          </button>
        </>
      ) : (
        <Link href={"/login"} className="primary_link">
          ورود
        </Link>
      )}
      <div
        className={`bg-[var(--bg)] absolute left-0 top-12 h-[calc(100%-3rem)] w-full ${
          menuOpen ? "flex" : "hidden"
        } opacity-95 justify-center items-center z-50`}
      >
        <div className="flex flex-col justify-between items-center gap-3 *:text-3xl" onClick={() => {setMenu(!menuOpen)}}>
          <Link href={"/"}>صفحه اصلی</Link>
          <Link href={"/"}>درباره ما</Link>
          {status === "authenticated" ? (
            <Link href={"/write"}>نوشتن</Link>
          ) : (
            <Link href={"/login"} >
              ورود
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default LoginLink