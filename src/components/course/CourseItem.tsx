import Image from "next/image";
import Link from "next/link";
import React from "react";
import IconEye from "../icons/IconEye";
import IconStar from "../icons/IconStar";
import IconClock from "../icons/IconClock";

const CourseItem = () => {
  const coureInfo = [
    {
      title: '3000',
      icon: (className?: string) => <IconEye className={className} />
    },
    {
      title: '4.5',
      icon: (className?: string) => <IconStar className={className} />
    },
    {
      title: '30h25p',
      icon: (className?: string) => <IconClock className={className} />
    },
  ]

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4">
      {/* <Link href={'#'} className='block h-[200px] relative'>
                <Image
                    className='w-full h-full object-cover rounded'
                    alt=''
                    fill
                    src='https://plus.unsplash.com/premium_photo-1718204434029-d710f571cf14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8'
                />
            </Link> */}
      <Link href={"#"} className="block h-[180px] relative">
        <Image
          className="w-full h-full object-cover rounded-lg"
          alt=""
          width={300}
          height={200}
          sizes="@media (min-width: 640px) 300px, 100vw"
          priority
          src="https://plus.unsplash.com/premium_photo-1718204434029-d710f571cf14?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
        />
        <span className="inline-block px-3 py-1 rounded-full absolute top-3 right-3 z-10 text-white font-medium bg-green-500 text-xs">
          New
        </span>
      </Link>
      <div className="pt-4">
        <h3 className="font-bold text-lg mb-5">
          Khóa học NextJS Pro - Xây dựng E-Learning system hoàn chỉnh
        </h3>
      </div>
      <div className="flex gap-5 items-center mb-5 text-xs text-gray-500">
        {
          coureInfo.map((item, index) => (
            <div className="flex items-center gap-3" key={index}>
              {item.icon('size-4')}
              <span>{item.title}</span>
            </div>
          ))
        }
        <span className="font-bold text-primary ml-auto text-base">
          799.000
        </span>
      </div>
      <Link
        href={"#"}
        className="bg-primary rounded-lg flex justify-center items-center text-white mt-10 w-full font-semibold h-12"
      >
        Xem chi tiết
      </Link>
    </div>
  );
};

export default CourseItem;
