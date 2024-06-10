import { BackgroundHome } from "@/components/Home/BackgroundHome";
import { Categories } from "@/components/Home/Categories";
import { ReactNode } from "react";
import { FaTruckFast } from "react-icons/fa6";
import { TbCurrencyDollar } from "react-icons/tb";
import { CiDiscount1 } from "react-icons/ci";
import { MdHeadphones } from "react-icons/md";
import { TrendingProducts } from "@/components/Home/TrendingProducts";
import { Features } from "@/components/Home/Features";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { Deal } from "@/components/Home/Deal";
import { ComputeSection } from "@/components/Home/ComputeSection";
import { TabSection } from "@/components/Home/TabSection";
import { TopProducts } from "@/components/Home/TopProducts";
import { NewArrivals } from "@/components/Home/NewArrivals";

export default function Home() {
  return (
    <div className="home">
      <BackgroundHome />

      <Categories />

      <div className="grid xl:grid-cols-4 lg:grid-cols-2 max-md:grid-cols-1 container mx-auto gap-3">
        <Features
          icon={
            <FaTruckFast className="h-[2.5rem] w-[2.5rem] text-[#fd4b6b]" />
          }
          title={"Free Delivery"}
          description={"Orders from all item"}
        />
        <Features
          icon={
            <TbCurrencyDollar className="h-[2.5rem] w-[2.5rem] text-[#fd4b6b]" />
          }
          title={"Return & Refund"}
          description={"Money-back guarantee"}
        />
        <Features
          icon={
            <CiDiscount1 className="h-[2.5rem] w-[2.5rem] text-[#fd4b6b]" />
          }
          title={"Member Discount"}
          description={"Every order over $140.00"}
        />
        <Features
          icon={
            <MdHeadphones className="h-[2.5rem] w-[2.5rem] text-[#fd4b6b]" />
          }
          title={"Support 24/7"}
          description={"Contact us 24 hours a day"}
        />
      </div>

      <TrendingProducts />

      <div className="container mx-auto py-8 pt-16 flex gap-5 max-md:flex-col">
        <div className="sale-home relative w-[65%] max-md:w-full">
          <div className="h-[280px]">
            <img
              src="/tab.jpg"
              alt="bg"
              className="object-cover rounded w-full h-full"
            />
          </div>
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col items-start">
            <p className="text-[18px]">Sale 20% off all store</p>
            <Link
              href={"/"}
              className="text-[28px] font-bold leading-[1.29] pt-2 transition-colors duration-500 hover:text-[#0c55aa]"
            >
              Smartphone <br /> BLU G91 Pro 2022
            </Link>
            <Button className="pl-0 mt-2 btn">
              <span className="pr-1">Shop Now</span>{" "}
              <FaArrowRight className="arrow-right" />
            </Button>
          </div>
        </div>

        <div className="w-[35%] h-full relative max-md:w-full">
          <div className="h-[280px]">
            <img
              src="/headphone.jpg"
              alt="bg"
              className="w-full object-cover rounded h-full"
            />
          </div>
          <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col items-start">
            <p className="text-[18px]">Sale 20% off all store</p>
            <Link
              href={"/"}
              className="text-[28px] font-bold leading-[1.29] pt-2 transition-colors duration-500 hover:text-[#0c55aa]"
            >
              HyperX Cloud || <br></br> Wireless
            </Link>
            <Button className="pl-0 mt-2 btn">
              <span className="pr-1">Shop Now</span>{" "}
              <FaArrowRight className="arrow-right" />
            </Button>
          </div>
        </div>
      </div>

      <Deal />

      <ComputeSection />

      <TabSection />

      <NewArrivals />

      <TopProducts />
    </div>
  );
}
