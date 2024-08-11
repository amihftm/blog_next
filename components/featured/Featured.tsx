import Image from 'next/image'
import React from 'react'

function Featured() {
  return (
    <div className="flex gap-6 flex-col">
      <h1 className="text-3xl md:text-5xl tracking-wide md:leading-snug font-bold">
        وب اپلیکیشن بلاگ نویسی کد نویسی شده به زبان Next.js با اتصال به دیتابیس
        MongoDB
      </h1>
      <div className="flex flex-col-reverse lg:flex-row gap-3 items-center">
        <div className="flex md:flex-1 flex-col justify-center p-4 gap-2">
          <h2 className="title_h2">به راحتی بنویسید</h2>
          <p className="font-light text-[var(--softTextColor)]">
            این برنامه که در حال مشاهده آن میباشید با قابلیت دریافت متن و تصویر،
            مجهز به ویرایشگر متن سارگار با زبان فارسی و انواع حالت دهی به متن
            (شامل ایتالیک، لینک و بولد) که قابلیت توسعه نیز دارد. این برنامه به
            صورت فول استک کد نویسی شده است و در آن برای بک اند از APIهای next.js
            استفاده شده است که در صورت نیاز قابل جایگزینی به server actions را
            نیز دارد. در این برنامه از پایگاه داده MongoDB استفاده شده است اما
            مشکلی از بابت استفاده از سایر پایگاه داده های SQL و NOSQL وجود
            ندارد. همچنین در صورت نیاز قابلیت تولید این پروژه با استفاده از MERN
            نیز وجود دارد. پروژه فوق به صورت سرورلس بر روی VERCEL اجرا شده است.
            احراز هویت با کمک oauth با هر سرویسی امکان پذیر میباشد. (در حال حاضر صرفن گیت هاب قرار گرفته.)
          </p>
        </div>
        <div className="md:flex-1 min-h-[300px] w-full relative">
          <Image
            src={"/images/root/featured.webp"}
            alt="قابلیت ها"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Featured