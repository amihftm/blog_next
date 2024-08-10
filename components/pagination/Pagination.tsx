"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

function Pagination({page, hasNext,blog ,hasPrev}:{page:number, hasNext:boolean, hasPrev:boolean, blog:string}) {
  const router = useRouter()
  return (
    <div className='flex justify-between text-black'>
      <button className='py-2 px-4 bg-red-400 rounded-md disabled:bg-gray-500 disabled:cursor-not-allowed' onClick={() => router.push(blog ? `?page=${page+1}&cat=${blog}`:`?page=${page+1}`)} disabled={!hasNext}>صفحه بعد</button>
      <button className='py-2 px-4 bg-red-400 rounded-md disabled:bg-gray-500 disabled:cursor-not-allowed' onClick={() => router.push(blog ? `?page=${page-1}&cat=${blog}`:`?page=${page+1}`)} disabled={!hasPrev}>صفحه قبل</button>
    </div>
  )
}

export default Pagination