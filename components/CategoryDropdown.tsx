import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoIosArrowDown } from "react-icons/io";
import { MdComputer, MdOutlineHome } from "react-icons/md";
import { PiTelevisionSimpleLight } from "react-icons/pi";
import { GoGift } from "react-icons/go";
import { IoCameraOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { CpuIcon } from "lucide-react";
import { GiSpoon } from "react-icons/gi";
import { BsShop } from "react-icons/bs";
import { RiFootballLine } from "react-icons/ri";
import Link from "next/link";

export const CategoryDropdown = () => {
  return (
    <div className="w-full">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="flex justify-between items-center w-full rounded-none bg-[#0c55aa] text-white hover:!bg-black hover:!text-white py-3 h-full">
            <div className="flex items-center gap-2">
              <HiOutlineBars3 className="text-2xl" /> <p>All Categories</p>
            </div>
            <div>
              <IoIosArrowDown />
            </div>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="!w-full">
          <DropdownMenuItem>
            <MdOutlineHome className="mr-2 text-[25px]" />
            <Link href={"/sub-categories/new-arrivals"}>New Arrivals</Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <PiTelevisionSimpleLight className="mr-2 text-[25px]" />
            <Link href={"/sub-categories/electronic"}>Electronic</Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <GoGift className="mr-2 text-[25px]" />
            <Link href={"/sub-categories/gifts"}>Gifts</Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <MdComputer className="mr-2 text-[25px]" />
            <Link href={"/sub-categories/computers"}>Computers</Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <IoPhonePortraitOutline className="mr-2 text-[25px]" />
            <Link href={"/sub-categories/smartphones"}>
              Smartphones & Tablets
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <PiTelevisionSimpleLight className="mr-2 text-[25px]" />
            <Link href={"/sub-categories/tv"}>TV, Vedio & Music</Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <IoCameraOutline className="mr-2 text-[25px]" />
            <Link href={"/sub-categories/cameras"}>Cameras</Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <GiSpoon className="mr-2 text-[25px]" />
            <Link href={"/sub-categories/cooking"}>Cooking</Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <BsShop className="mr-2 text-[25px]" />
            <Link href={"/sub-categories/accessories"}>Accessories</Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <RiFootballLine className="mr-2 text-[25px]" />
            <Link href={"/sub-categories/sports"}>Sports</Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
