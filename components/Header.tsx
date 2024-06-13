"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { IoGitCompareSharp } from "react-icons/io5";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { DrawerLinks } from "./Drawer";
import { CategoryDropdown } from "./CategoryDropdown";
import { useEffect } from "react";
import { Cart } from "./cart/Cart";
import { useSelector } from "react-redux";

export const Header = () => {
  useEffect(() => {
    const windowScroll = (): void => {
      const fixedDiv: HTMLDivElement | null =
        document.querySelector(".fixedLink");
      if (fixedDiv) {
        if (window.scrollY > 100) {
          fixedDiv.style.top = "0";
        } else {
          fixedDiv.style.top = "-100%";
        }
      }
    };

    window.addEventListener("scroll", windowScroll);

    return () => {
      window.removeEventListener("scroll", windowScroll);
    };
  }, []);

  const wishlist = useSelector((state: any) => state.favorites?.favorites);

  const compare = useSelector((state: any) => state.compare.compare);

  return (
    <div>
      <div className="bg-white max-[992px]:shadow-lg max-[992px]:fixed max-[992px]:top-0 max-[992px]:left-0 max-[992px]:w-full z-[100]">
        <div className="header py-[27px] max-[992px]:py-3 flex justify-between items-center container mx-auto">
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Description of the logo"
                width={135}
                height={135}
              />
            </Link>
          </div>

          <div className="flex w-full max-w-sm items-center border border-[#0c55aa] max-[992px]:hidden">
            <Input
              type="search"
              placeholder="Search For Products..."
              className="rounded-none focus:!outline-none !border-none"
            />
            <Button className="bg-[#0C55AA] rounded-none">
              <CiSearch className="text-2xl text-white" />
            </Button>
          </div>

          <div className="flex gap-2">
            <div className="pr-8">
              <Link href={"/login"}>
                <div className="flex items-center gap-3">
                  <div className="border-2 border-black rounded-full w-[44px] h-[44px] flex justify-center items-center max-[992px]:hidden">
                    <FaRegUser className="text-2xl" />
                  </div>
                  <div className="max-lg:hidden">
                    <p className="text-xs">Hello, Guest</p>
                    <p className="font-bold text-sm">Login / Register</p>
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-5">
              <div className="relative">
                <Link href={"/compare"}>
                  <IoGitCompareSharp className="text-2xl hover:text-[#0c55aa] transition-all duration-500 cursor-pointer" />
                  <Badge className="absolute top-[-13px] right-[-12px] border-2 border-white w-[15px] text-white bg-[#0c55aa] flex justify-center items-center">
                    {compare?.length > 0 ? compare?.length : 0}
                  </Badge>
                </Link>
              </div>
              <div className="relative">
                <Link href={"/wishlist"}>
                  <FaRegHeart className="text-2xl hover:text-[#0c55aa] transition-all duration-500 cursor-pointer" />
                  <Badge className="absolute top-[-13px] right-[-12px] border-2 border-white w-[15px] text-white bg-[#0c55aa] flex justify-center items-center">
                    {wishlist?.length > 0 ? wishlist?.length : 0}
                  </Badge>
                </Link>
              </div>
              <div>
                <Cart />
              </div>
            </div>
            <div>
              <DrawerLinks />
            </div>
          </div>
        </div>
      </div>

      <div className="border-y max-[992px]:hidden">
        <nav className="container mx-auto h-[47px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center w-[80%] gap-10">
              <div className="w-[20%] max-[1205px]:w-[28%]">
                <CategoryDropdown />
              </div>
              <ul className="flex items-center gap-8">
                <li>
                  <Link href={"/"} className="font-bold text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href={"/shop"} className="font-bold text-sm">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href={"/vendors"} className="font-bold text-sm">
                    Vendors
                  </Link>
                </li>
                <li>
                  <Link href={"/contact"} className="font-bold text-sm">
                    Contacts
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-3">
              <BsTelephone className="text-[20px] text-[#0c55aa]" />
              <div className="leading-[1.2]">
                <p className="text-[12px] font-bold p-0 m-0">Hotline:</p>
                <p className="text-[14px] font-bold p-0 m-0 hover:text-[#0c55aa] transition-all duration-500 cursor-pointer">
                  8 800 332 65-66
                </p>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div className="fixed w-full top-[-100%] left-0 bg-white z-50 shadow fixedLink transition-all duration-500">
        <div className="container mx-auto flex justify-between items-center py-3">
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                alt="Description of the logo"
                width={135}
                height={135}
              />
            </Link>
          </div>
          <ul className="flex items-center gap-8">
            <li>
              <Link href={"/"} className="font-bold text-sm">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/shop"} className="font-bold text-sm">
                Shop
              </Link>
            </li>
            <li>
              <Link href={"/vendors"} className="font-bold text-sm">
                Vendors
              </Link>
            </li>
            <li>
              <Link href={"/contact"} className="font-bold text-sm">
                Contacts
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-5">
            <div className="relative">
              <Link href={"/compare"}>
                <IoGitCompareSharp className="text-2xl hover:text-[#0c55aa] transition-all duration-500 cursor-pointer" />
                <Badge className="absolute top-[-13px] right-[-12px] border-2 border-white w-[15px] text-white bg-[#0c55aa] flex justify-center items-center">
                  {compare?.length > 0 ? compare?.length : 0}
                </Badge>
              </Link>
            </div>
            <div className="relative">
              <Link href={"/wishlist"}>
                <FaRegHeart className="text-2xl hover:text-[#0c55aa] transition-all duration-500 cursor-pointer" />
                <Badge className="absolute top-[-13px] right-[-12px] border-2 border-white w-[15px] text-white bg-[#0c55aa] flex justify-center items-center">
                  {wishlist?.length > 0 ? wishlist?.length : 0}
                </Badge>
              </Link>
            </div>
            <div>
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
