"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";
import { categories } from "@/store/data";

export const Categories = () => {
  return (
    <div className="categories py-8">
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        className="mySwiper container mx-auto"
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1020: {
            slidesPerView: 5,
          },
        }}
      >
        {categories.map((e, index) => (
          <SwiperSlide key={index}>
            <div className="md:container md:mx-auto">
              <Link href={e.link} className="flex items-center justify-center">
                <div className="bg-[#e4f2ff] w-[180px] h-[180px] max-md:w-[100px] max-md:h-[100px] gap-3 rounded-full flex items-center justify-center">
                  <Image
                    src={e.img}
                    width={100}
                    height={100}
                    alt="categories"
                    className="max-md:!w-[40px] scale"
                  />
                </div>
              </Link>
              <div className="pt-3">
                <Link
                  href={"/"}
                  className="text-[20px] font-bold duration-300 transition-colors hover:text-[#0c55aa]"
                >
                  {e.title}
                </Link>
                <p className="text-[14px] text-[#55585b] text-center">
                  {e.count}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
