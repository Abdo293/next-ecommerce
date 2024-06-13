"use client";
import Link from "next/link";
import { ProductsCard } from "../Products card/ProductsCard";
import { Button } from "../ui/button";
import { FaArrowRight } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import { computerSection } from "@/store/data";

export const ComputeSection = () => {
  return (
    <div className="container mx-auto flex gap-5 py-8 max-lg:flex-col computer-sec">
      <div className="w-[30%] flex flex-col max-lg:w-full">
        <div className="flex justify-between items-center border-[3px] border-[#ff3494] rounded-xl">
          <div className="pl-5">
            <div className="border-b border-[#0C55AA] mb-[22px]">
              <h3 className="text-[20px] font-medium pb-2">Computer</h3>
            </div>
            <ul className="list-disc list-inside">
              <li className="text-sm mb-[10px] transition-colors duration-500 hover:text-[#0C55AA]">
                <Link href={"/"}>Desktop</Link>
              </li>
              <li className="text-sm mb-[10px] transition-colors duration-500 hover:text-[#0C55AA]">
                <Link href={"/"}>Laptop</Link>
              </li>
              <li className="text-sm mb-[10px] transition-colors duration-500 hover:text-[#0C55AA]">
                <Link href={"/"}>Tablet</Link>
              </li>
              <li className="text-sm mb-[10px] transition-colors duration-500 hover:text-[#0C55AA]">
                <Link href={"/"}>Accessories</Link>
              </li>
            </ul>
            <Button className="pl-0 mt-2 text-[13px] font-medium btn">
              <span className="pr-1">More Products</span>{" "}
              <FaArrowRight className="arrow-right" />
            </Button>
          </div>
          <div>
            <img src="/gadget-girl.png" alt="girl" />
          </div>
        </div>
        <div className="h-[25vh] pt-3">
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
            <SwiperSlide className="relative">
              <img src="/head1.jpg" alt="img" className="rounded-xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-white">
                <p className="text-sm font-medium">Only $99.00</p>
                <Link href={""} className="text-2xl font-bold">
                  Selected Novelty Products
                </Link>
              </div>
            </SwiperSlide>
            <SwiperSlide className="relative">
              {" "}
              <img src="/head2.jpg" alt="img" className="rounded-xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-white">
                <p className="text-sm font-medium">Only $55.00</p>
                <Link href={""} className="text-2xl font-bold">
                  Top Rated Products
                </Link>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="w-[70%] max-lg:w-full">
        <div className="grid g xl:grid-cols-3 lg:grid-cols-2 max-md:grid-cols-1 gap-5 computer-cards">
          {computerSection.map((item) => (
            <ProductsCard
              key={item.id}
              id={item.id}
              img={item.img}
              cat={item.cat}
              title={item.title}
              price={item.price}
              reviews={item.reviews}
              badge={item.badge}
              sale={item.sale}
              type={item.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
