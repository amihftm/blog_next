import Image from 'next/image'
import React from 'react'
import CommentSection from '../blog/CommentSection'
import Menu from '../menu/Menu'
import Rendere from '../tiptap/Rendere'
import moment from 'jalali-moment'
import { getUserInfo } from '@/utils/getUserInfo'
import { getBlogContent } from '@/utils/getBlogContent'

async function ArticleTemp({slug}: {slug:string | string[]}) {
  const res = await getBlogContent(slug as string)
  if (!res.ok) {
    return (
      <>
        <h1 className="text-7xl text-center pt-72">-404-</h1>
        <p className="text-center pb-72 text-xl">یافت می نشود، گشته ایم ما</p>
      </>
    );
  }
  const res_json = await res.json()
  const post_content = JSON.parse(res_json.content)
  const userInfo = await getUserInfo(res_json.userID)
  
  return (
    <div className="flex flex-col">
      <div className="flex gap-12 min-h-72 items-center py-10 mb-6">
        <div className="flex flex-[1] flex-col gap-12">
          <h1 className="font-bold text-4xl tracking-wider leading-relaxed">
            {res_json.title}
          </h1>
          <div className="flex flex-row items-center gap-4">
            <div className="flex relative aspect-square w-14 rounded-[50%] overflow-hidden">
              <Image
                src={userInfo.image}
                alt={userInfo.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col font-light gap-1">
              <span>{userInfo.name}</span>
              <span>{moment(res_json.createdAt).locale('fa').format('jYYYY/jMM/jDD')}</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-[1] h-full relative ">
          <Image
            src={res_json.image || "/images/root/featured.webp"}
            alt="پست اخیر"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-row gap-8">
        <div className="flex flex-col md:basis-2/3">
          <Rendere json={post_content}/>
          <CommentSection slug={slug as string}/>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default ArticleTemp