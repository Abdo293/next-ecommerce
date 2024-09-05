import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Image from "next/image";
import Link from "next/link";
import { TiSocialFacebook } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

export const Footer = () => {
  return (
    <footer className="h-screen">
      <div className="bg-[#0C55AA] h-[25vh]">
        <div className="flex justify-between items-center container mx-auto h-full max-lg:flex-col max-lg:justify-center">
          <div className="w-[60%] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:w-full">
            <p className="text-white text-base font-medium">
              SALE 20% OFF ALL STORE
            </p>
            <p className="text-white text-[28px] font-bold max-md:text-center max-md:text-[22px]">
              Subscribe our Newsletter
            </p>
          </div>
          <div className="flex max-w-sm items-center border border-[#0c55aa] w-full">
            <div className="w-full flex">
              <Input
                type="text"
                placeholder="Enter Your Email"
                className="rounded-none max-md:h-[45px] focus:!outline-none !border-none bg-white rounded-s h-[60px] placeholder:text-gray-500 w-full"
              />
              <Button className="bg-[#010F1C] max-md:h-[45px] rounded-none text-white rounded-e h-[60px] hover:bg-[#010F1C]">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-2 max-md:grid-cols-1 container mx-auto bg-white mt-16 gap-5">
        <div>
          <ul>
            <li>
              <Link href={"/"}>
                <Image src="/logo.png" alt="img" width={200} height={40} />
              </Link>
            </li>
            <li className="py-5">
              Shofy is a powerful tool eCommerce Laravel script for creating a
              professional and visually appealing online store.
            </li>
            <li className="flex social-up">
              <div className="shadow p-2 mr-3 cursor-pointer rounded transition-colors duration-500 hover:bg-[#0C55AA]">
                <TiSocialFacebook className="text-xl text-gray-500 social" />
              </div>
              <div className="shadow p-2 mr-3 cursor-pointer rounded transition-colors duration-500 hover:bg-[#0C55AA]">
                <FaXTwitter className="text-xl  text-gray-500 social" />
              </div>
              <div className="shadow p-2 mr-3 cursor-pointer rounded transition-colors duration-500 hover:bg-[#0C55AA]">
                <AiOutlineYoutube className="text-xl  text-gray-500 social" />
              </div>
              <div className="shadow p-2 cursor-pointer rounded transition-colors duration-500 hover:bg-[#0C55AA]">
                <CiLinkedin className="text-xl  text-gray-500 social" />
              </div>
            </li>
          </ul>
        </div>
        <div className="flex xl:justify-center">
          <ul className="list-disc list-inside">
            <h3 className="text-xl font-bold">My Account</h3>
            <li className="pb-2 text-sm text-gray-600 font-medium pt-3">
              <Link href={"/"}>Track Orders</Link>
            </li>
            <li className="pb-2 text-sm text-gray-600 font-medium">
              <Link href={"/"}>Shipping</Link>
            </li>
            <li className="pb-2 text-sm text-gray-600 font-medium">
              <Link href={"/"}>Wishlist</Link>
            </li>
            <li className="pb-2 text-sm text-gray-600 font-medium">
              <Link href={"/"}>My Account</Link>
            </li>
            <li className="pb-2 text-sm text-gray-600 font-medium">
              <Link href={"/"}>Order History</Link>
            </li>
            <li className="pb-2 text-sm text-gray-600 font-medium">
              <Link href={"/"}>Returns</Link>
            </li>
          </ul>
        </div>
        <div className="flex xl:justify-center">
          <ul className="list-disc list-inside">
            <h3 className="text-xl font-bold">Information</h3>
            <li className="pb-2 text-sm text-gray-600 font-medium pt-3">
              <Link href={"/"}>Our Story</Link>
            </li>
            <li className="pb-2 text-sm text-gray-600 font-medium">
              <Link href={"/"}>Careers</Link>
            </li>
            <li className="pb-2 text-sm text-gray-600 font-medium">
              <Link href={"/"}>Privacy Policy</Link>
            </li>
            <li className="pb-2 text-sm text-gray-600 font-medium">
              <Link href={"/"}>Latest News</Link>
            </li>
            <li className="pb-2 text-sm text-gray-600 font-medium">
              <Link href={"/"}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex xl:justify-center">
          <div>
            <h3 className="text-xl font-bold">Talk Ta Us</h3>
            <div className="pt-3 pb-2">
              <p className="text-[#55585b] text-sm">Got Questions? Call us</p>
              <h4 className="text-[22px] font-bold transition-colors duration-500 hover:text-[#0C55AA]">
                <a href="tel:+201156721734">+20 115 6721 734</a>
              </h4>
            </div>
            <div className="flex py-2">
              <IoMailOutline className="text-2xl" />
              <p className="pl-2 font-medium text-[#55585b] transition-colors duration-500 hover:text-[#0C55AA]">
                <a href="mailto:support@shofy.com">support@shofy.com</a>
              </p>
            </div>
            <div className="flex">
              <CiLocationOn className="text-2xl" />
              <p className="pl-2 font-medium text-[#55585b] transition-colors duration-500 hover:text-[#0C55AA]">
                <a
                  href="https://maps.google.com/?q=79 Sleepy Hollow St. Jamaica, New York 1432"
                  target="_blank"
                >
                  79 Sleepy Hollow St. Jamaica, New York 1432
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
