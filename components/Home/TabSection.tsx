"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";
import { Button } from "../ui/button";
import React from "react";

type TData = {
  img: string;
};

const SwiperComponent: React.FC<TData> = ({ img }) => {
  return (
    <div className="flex justify-between items-center w-full px-10 max-md:flex-col">
      <div className="text-left w-1/2 max-md:w-full">
        <p className="text-[hsla(0,0%,100%,.8)] text-base">
          TABLET COLLECTION 2024
        </p>
        <p className="text-[56px] text-white font-bold leading-[1.15] mb-3 max-md:text-[30px]">
          Samsung Galaxy Tab S6, Wifi Tablet
        </p>
        <Button className="bg-[#010f1c] text-white rounded px-10 py-6 hover:bg-white hover:text-black transition-colors duration-500">
          Shop Now
        </Button>
      </div>
      <div className="w-1/2 max-md:w-3/4">
        <img src={img} alt="img" className="w-full h-full max-md:mt-5" />
      </div>
    </div>
  );
};
export const TabSection = () => {
  return (
    <div className="h-[100vh] pt-3 container mx-auto tab-sec">
      <Swiper
        slidesPerView={1}
        direction="vertical"
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-[#0c55aa] rounded">
          <SwiperComponent img="/tab1.png" />
        </SwiperSlide>
        <SwiperSlide className="bg-[#0c55aa] rounded">
          <SwiperComponent img="/tab2.png" />
        </SwiperSlide>
        <SwiperSlide className="bg-[#0c55aa] rounded">
          <SwiperComponent img="/tab3.png" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
