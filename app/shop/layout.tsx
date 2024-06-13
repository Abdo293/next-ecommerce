"use client";
import { Categories } from "@/components/Home/Categories";
import Link from "next/link";
import { BsShop } from "react-icons/bs";
import { GiSpoon } from "react-icons/gi";
import { GoGift } from "react-icons/go";
import { IoCameraOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { MdComputer, MdOutlineHome } from "react-icons/md";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { RiFootballLine } from "react-icons/ri";

const Page = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="mt-10">
      <div className="categories-section">
        <p className="container mx-auto flex items-center h-full text-[28px] font-medium">
          Shop
        </p>
      </div>

      <div>
        <Categories />
      </div>

      <div className="mt-5 container mx-auto flex gap-5 mb-16 max-[992px]:flex-col">
        <div className="w-[20%] max-md:w-full">
          <p className="text-lg font-medium border-b pb-2">Categories</p>
          <ul className="pt-2">
            <li className="pb-3">
              <Link
                href={"/sub-categories/new-arrivals"}
                className="flex items-center gap-1"
              >
                <MdOutlineHome className="mr-2 text-[25px]" />
                <span>New Arrivals</span>
              </Link>
            </li>

            <li className="pb-3">
              <Link
                href={"/sub-categories/electronic"}
                className="flex items-center gap-1"
              >
                <PiTelevisionSimpleLight className="mr-2 text-[25px]" />
                <span>Electronic</span>
              </Link>
            </li>

            <li className="pb-3">
              <Link
                href={"/sub-categories/gifts"}
                className="flex items-center gap-1"
              >
                <GoGift className="mr-2 text-[25px]" />
                <span>Gifts</span>
              </Link>
            </li>

            <li className="pb-3">
              <Link
                href={"/sub-categories/computers"}
                className="flex items-center gap-1"
              >
                <MdComputer className="mr-2 text-[25px]" />
                <span>Computers</span>
              </Link>
            </li>

            <li className="pb-3">
              <Link
                href={"/sub-categories/smartphones"}
                className="flex items-center gap-1"
              >
                <IoPhonePortraitOutline className="mr-2 text-[25px]" />
                <span>Smartphones & Tablets</span>
              </Link>
            </li>

            <li className="pb-3">
              <Link
                href={"/sub-categories/tv"}
                className="flex items-center gap-1"
              >
                <PiTelevisionSimpleLight className="mr-2 text-[25px]" />
                <span>TV, Vedio & Music</span>
              </Link>
            </li>

            <li className="pb-3">
              <Link
                href={"/sub-categories/cameras"}
                className="flex items-center gap-1"
              >
                <IoCameraOutline className="mr-2 text-[25px]" />
                <span>Cameras</span>
              </Link>
            </li>

            <li className="pb-3">
              <Link
                href={"/sub-categories/cooking"}
                className="flex items-center gap-1"
              >
                <GiSpoon className="mr-2 text-[25px]" />
                <span>Cooking</span>
              </Link>
            </li>

            <li className="pb-3">
              <Link
                href={"/sub-categories/accessories"}
                className="flex items-center gap-1"
              >
                <BsShop className="mr-2 text-[25px]" />
                <span>Accessories</span>
              </Link>
            </li>

            <li className="pb-3">
              <Link
                href={"/sub-categories/sports"}
                className="flex items-center gap-1"
              >
                <RiFootballLine className="mr-2 text-[25px]" />
                <span>Sports</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-[80%] max-md:w-full">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
