import { getUserInfo } from '@/utils/getUserInfo';
import moment from 'jalali-moment';
import Image from 'next/image';
import React from 'react'

async function Comment({data}: {data:{id:string, desc:string, postSlug:string, userID:string, createdAt:string}}) {
  const {id, desc, userID, createdAt} = data
  const userInfo = await getUserInfo(userID)
  return (
    <div className='flex flex-col flex-auto gap-1'>
      <div className="flex flex-row items-center gap-4">
        <div className="flex relative aspect-square w-14 rounded-[50%] overflow-hidden">
          <Image
            src={userInfo.image}
            alt={userInfo.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col font-light gap-0.5 text-sm text-[var(--softTextColor)]">
          <span>{userInfo.name}</span>
          <span>{moment(createdAt).locale('fa').format('jYYYY/jMM/jDD')}</span>
        </div>
      </div>
      <p className='p-2 font-light'>
        {desc}
      </p>
    </div>
  );
}

export default Comment