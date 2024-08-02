import React from 'react'
import Comment from './Comment'

function CommentSection() {
  return (
    <div className="flex flex-col gap-4 py-8">
        <h2 className="title_h2">نظرات</h2>
        <form>
          <div className="flex">
            <textarea
              placeholder="نظر خود را وارد کنید..."
              className="flex flex-auto py-2 px-2 min-h-24 text-[var(--bg)] rounded-md"
            ></textarea>
            <button
              type="submit"
              className="flex px-5 py-3 mx-4 rounded-lg bg-teal-800 text-white justify-center items-center self-center"
            >
              ثبت
            </button>
          </div>
        </form>
        <div className='flex flex-col gap-8 py-5'>
          <Comment />
          <Comment />
          <Comment />
        </div>
      </div>
  )
}

export default CommentSection