"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Navigation, A11y } from "swiper/modules";

const ArrowSwiper: React.FC = () => {
  const swiper = useSwiper();

  return (
    <div className="flex items-center">
      <button
        className="w-[35px] border rounded-full h-[35px] flex justify-center items-center mr-3"
        onClick={() => swiper.slidePrev()}
      >
        <MdKeyboardArrowLeft className="text-xl text-[#55585b]" />
      </button>
      <button
        className="w-[35px] border rounded-full h-[35px] flex justify-center items-center"
        onClick={() => swiper.slideNext()}
      >
        <MdOutlineKeyboardArrowRight className="text-xl text-[#55585b]" />
      </button>
    </div>
  );
};

import { useEffect, useState } from "react";
import { ProductsCard } from "../Products card/ProductsCard";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { dealOfTheDay } from "@/store/data";
import {
  MdKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

export const NewArrivals = () => {
  const [days, setDays] = useState(9);
  const [hours, setHours] = useState(11);
  const [minutes, setMinutes] = useState(47);
  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        setSeconds(59);
        if (minutes > 0) {
          setMinutes(minutes - 1);
        } else {
          setMinutes(59);
          if (hours > 0) {
            setHours(hours - 1);
          } else {
            setHours(23);
            if (days > 0) {
              setDays(days - 1);
            } else {
              clearInterval(interval);
            }
          }
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds]);
  return (
    <div className="pb-6 mt-8 deal">
      <div className="container mx-auto">
        <div className="container mx-auto arrivals relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            modules={[Navigation, A11y]}
            navigation={false}
            className="mySwiper arrivals"
          >
            <div className="flex justify-between items-center pt-10 pb-6 max-md:flex-col absolute top-0 left-0 z-50 w-full">
              <h3 className="text-[36px] font-bold max-lg:text-[24px]">
                <span className="text-[#0c55aa]">New</span>{" "}
                <span>Arrivals</span>
              </h3>
              <span className="w-1/2 h-[2px] bg-gray-200 max-md:hidden"></span>
              <div>
                <ArrowSwiper />
              </div>
            </div>
            {dealOfTheDay.map((item) => (
              <SwiperSlide className="flex-col" key={item.id}>
                <ProductsCard
                  id={item.id}
                  key={item.id}
                  img={item.img}
                  cat={item.cat}
                  title={item.title}
                  price={item.price}
                  reviews={item.reviews}
                  badge={item.badge}
                  sale={item.sale}
                  type={item.type}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
