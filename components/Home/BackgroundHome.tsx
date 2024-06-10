"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";

interface ISliderProps {
  img: string;
  price: number;
  title: string;
  offer: string;
}

const Slider: React.FC<ISliderProps> = ({ img, price, title, offer }) => {
  return (
    <div className="flex justify-between items-center w-full container mx-auto max-md:flex-col">
      <div className="text-left text-white">
        <p className="text-base">Starting at ${price}</p>
        <h3 className="text-[56px] font-bold w-[68%] leading-[1.2] max-[1194px]:w-[97%] max-md:w-full max-md:text-[35px]">
          {title}
        </h3>
        <p className="Oregano text-[28px] mb-[40px]">
          Exclusive offer <span className="text-[#ffd43a]">{offer}</span> off
          this week
        </p>
        <Button className="bg-white text-black rounded hover:border duration-500 transition-all hover:text-white px-8 py-6">
          Shop Now <FaArrowRight />
        </Button>
      </div>
      <div className="max-md:mt-5">
        <Image
          src={img}
          width={500}
          height={500}
          alt="slider imgs"
          className="max-md:w-[200px]"
        />
      </div>
    </div>
  );
};

export const BackgroundHome = () => {
  return (
    <div className="background-home">
      <Swiper
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="bg-[#115061]">
          <Slider
            img={"/slider-1.png"}
            price={274.0}
            title={"The best watch collection 2024"}
            offer={"-35%"}
          />
        </SwiperSlide>
        <SwiperSlide className="bg-[#115061]">
          <Slider
            img={"/slider-2.png"}
            price={999.0}
            title={"The best note book collection 2024"}
            offer={"-10%"}
          />
        </SwiperSlide>
        <SwiperSlide className="bg-[#115061]">
          <Slider
            img={"/slider-3.png"}
            price={999.0}
            title={"The best phone collection 2024"}
            offer={"-10%"}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
