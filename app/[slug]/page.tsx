import Comment from '@/components/blog/Comment';
import CommentSection from '@/components/blog/CommentSection';
import Menu from '@/components/menu/Menu';
import Image from 'next/image'
import React from 'react'

function SignlePage() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-12 min-h-72 items-center py-10 mb-6">
        <div className="flex flex-[1] flex-col gap-12">
          <h1 className="font-bold text-4xl tracking-wider leading-relaxed">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است
          </h1>
          <div className="flex flex-row items-center gap-4">
            <div className="flex relative aspect-square w-14 rounded-[50%] overflow-hidden">
              <Image
                src={"/images/root/featured.webp"}
                alt="تصویر نویسنده"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col font-light gap-1">
              <span>نام نویسنده</span>
              <span>تاریخ</span>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-[1] h-full relative ">
          <Image
            src={"/images/root/featured.webp"}
            alt="پست اخیر"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex flex-row gap-8">
        <div className="flex flex-col md:basis-2/3">
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
          <CommentSection />
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default SignlePage