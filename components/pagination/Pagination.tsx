import React from 'react'

function Pagination() {
  return (
    <div className='flex justify-between text-black'>
      <button className='py-2 px-4 bg-red-400 rounded-md'>صفحه بعد</button>
      <button className='py-2 px-4 bg-red-400 rounded-md'>صفحه قبل</button>
    </div>
  )
}

export default Pagination