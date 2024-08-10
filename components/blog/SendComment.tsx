"use client";
import { writeComment } from '@/utils/comment';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Router } from 'next/router';
import React, { useState } from 'react'

function SendComment({slug}: {slug:string}) {
    const {data} = useSession()
    const [value, setVal] = useState('')
    const router = useRouter()
    async function onSubmitBtn() {
        if(data) {
            const body = {
                desc:value,
                postSlug: slug,
                userEmail: data?.user?.email
            }
            await writeComment(JSON.stringify(body))
            router.refresh()
            setVal('')
        }
    }

  return (
    <>
      <h2 className="title_h2">نظرات</h2>
      {data ? (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmitBtn();
          }}
        >
          <div className="flex">
            <textarea
              placeholder="نظر خود را وارد کنید..."
              className="flex flex-auto py-2 px-2 min-h-24 text-[var(--textColor)] rounded-md bg-[var(--softBg)]"
              value={value}
              onChange={({ target }) => {
                setVal(target.value);
              }}
            ></textarea>
            <button
              type="submit"
              className="flex px-5 py-3 mx-4 rounded-lg bg-teal-800 text-white justify-center items-center self-center"
            >
              ثبت
            </button>
          </div>
        </form>
      ) : (
        <Link href={"/login"}>
          <div className="border-2 rounded-2xl p-3 cursor-pointer">
            <p>لطفن برای ارسال نظر، ابتدا وارد شوید</p>
          </div>
        </Link>
      )}
    </>
  );
}

export default SendComment