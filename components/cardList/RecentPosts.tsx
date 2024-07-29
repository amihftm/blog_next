import Image from 'next/image'
import React from 'react'

function RecentPosts() {
  "TEMPLATE"
  return (
    <div className="flex w-full min-h-72 justify-between gap-8 py-6">
      <div className="flex-1 relative hidden 2xl:flex">
        <Image
          src={"/images/root/featured.webp"}
          alt="پست اخیر"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex-1 gap-2 flex flex-col">
        <div className="flex gap-2">
          <p className='font-light text-[var(--softTextColor)]'>11.02.2023</p>
          <p>-</p>
          <p className="text-red-600">طراحی</p>
        </div>
        <h2 className="title_h2">لورم ایپسوم</h2>
        <p className='font-light text-[var(--softTextColor)]'>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
        <p className="font-normal border-b-2 w-max border-b-red-600 cursor-pointer">
          بیشتر
        </p>
      </div>
    </div>
  );
}

export default RecentPosts