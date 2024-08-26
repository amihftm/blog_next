"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

function Pagination({page, hasNext,hasPrev}:{page:number, hasNext:boolean, hasPrev:boolean}) {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const router = useRouter()
  function handleNextPage(){
    const params = new URLSearchParams(searchParams);
    if(hasNext) {
      params.set('pageNum', (page + 1).toString())
      router.replace(`${pathname}?${params.toString()}`)
    }
  }
  function handleBackPage(){
    const params = new URLSearchParams(searchParams);
    if(hasPrev) {
      params.set('pageNum', (page - 1).toString())
    } else {
      params.delete('pageNum')
    }
    router.replace(`${pathname}?${params.toString()}`)
  }
  return (
    <div className='flex justify-between text-black'>
      <button className='py-2 px-4 bg-red-400 rounded-md disabled:bg-gray-500 disabled:cursor-not-allowed' onClick={handleNextPage} disabled={!hasNext}>صفحه بعد</button>
      <button className='py-2 px-4 bg-red-400 rounded-md disabled:bg-gray-500 disabled:cursor-not-allowed' onClick={handleBackPage} disabled={!hasPrev}>صفحه قبل</button>
    </div>
  )
}

export default Pagination