"use client";
import { useEffect, useState } from "react";
import { ProductsCard } from "../Products card/ProductsCard";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Pagination } from "swiper/modules";
import { dealOfTheDay } from "@/store/data";

export const Deal = () => {
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
    <div className="bg-[#ECF2F7] pb-6 deal">
      <div className="container mx-auto">
        <div className="flex justify-between items-center pt-10 pb-6 max-md:flex-col">
          <h3 className="text-[36px] font-bold max-lg:text-[24px]">
            <span className="text-[#0c55aa]">Deal</span> <span>Of The Day</span>
          </h3>
          <span className="w-1/2 h-[2px] bg-white max-md:hidden"></span>
          <div>
            <Button className="bg-[#0c55aa] text-white rounded hover:bg-black transition-colors duration-300">
              View All Deals <FaArrowRight />
            </Button>
          </div>
        </div>

        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1020: {
              slidesPerView: 3,
            },
          }}
          className="mySwiper"
        >
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
              >
                <div className="px-8 pb-3 flex">
                  <div className="border w-[50px] h-[50px] rounded mr-3">
                    <p className="flex flex-col leading-[1] h-full justify-center items-center">
                      <span className="text-[20px] font-bold">{days}</span>{" "}
                      <span className="text-xs">days</span>
                    </p>
                  </div>
                  <div className="border w-[50px] h-[50px] rounded text-center mr-3">
                    <p className="flex flex-col leading-[1] h-full justify-center items-center">
                      <span className="text-[20px] font-bold">{hours}</span>{" "}
                      <span className="text-xs">hour</span>
                    </p>
                  </div>
                  <div className="border w-[50px] h-[50px] rounded text-center mr-3">
                    <p className="flex flex-col leading-[1] h-full justify-center items-center">
                      <span className="text-[20px] font-bold">{minutes}</span>{" "}
                      <span className="text-xs">mins</span>
                    </p>
                  </div>
                  <div className="border w-[50px] h-[50px] rounded text-center">
                    <p className="flex flex-col leading-[1] h-full justify-center items-center">
                      <span className="text-[20px] font-bold">{seconds}</span>{" "}
                      <span className="text-xs">secs</span>
                    </p>
                  </div>
                </div>
              </ProductsCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
