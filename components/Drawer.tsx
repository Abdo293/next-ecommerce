import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import Image from "next/image";
import Link from "next/link";
import { CategoryDropdown } from "./CategoryDropdown";

export const DrawerLinks = () => {
  return (
    <div className="min-[992px]:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="!px-0 !pl-2">
            <HiMiniBars3BottomRight className="text-2xl cursor-pointer" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <div className="w-fit">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Description of the logo"
                  width={135}
                  height={135}
                />
              </Link>
            </div>
          </SheetHeader>
          <div className="py-10">
            <CategoryDropdown />
          </div>
          <ul className="flex flex-col gap-3">
            <li className="border-b pb-3">
              <Link
                href={"/"}
                className="transition-all duration-300 hover:text-[#0c55aa]"
              >
                Home
              </Link>
            </li>
            <li className="border-b pb-3">
              <Link
                href={"/shop"}
                className="transition-all duration-300 hover:text-[#0c55aa]"
              >
                Shop
              </Link>
            </li>
            <li className="border-b pb-3">
              <Link
                href={"/vendors"}
                className="transition-all duration-300 hover:text-[#0c55aa]"
              >
                Vendors
              </Link>
            </li>
            <li>
              <Link
                href={"/contact"}
                className="transition-all duration-300 hover:text-[#0c55aa]"
              >
                Contacts
              </Link>
            </li>
          </ul>
          <SheetFooter>
            <Button className="border rounded transition-all duration-300 hover:bg-[#0c55aa] hover:text-white">
              <a href="mailto:abdoelsayed293@gmail.com">Contact Us</a>
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
};
