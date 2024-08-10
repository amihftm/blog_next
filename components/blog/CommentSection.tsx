import React from 'react'
import Comment from './Comment'
import SendComment from './SendComment';
import { getComments } from '@/utils/recieveComment';

async function CommentSection({slug}:{slug:string}) {

  const comments = await getComments(slug) as {id:string, desc:string, postSlug:string, userID:string, createdAt:string}[]

  return (
    <div className="flex flex-col gap-4 py-8">
      <SendComment slug={slug} />
      {comments ? (
        <div className="flex flex-col gap-8 py-5">
          {comments.map((comment) => {
            return <Comment data={comment} key={comment.id}/>;
          })}
        </div>
      ) : (
        <div className="flex py-8">
          <p>هنوز هیچ نظری ارسال نشده!</p>
        </div>
      )}
    </div>
  );
}

export default CommentSection