import { storeData } from "@/store/data";
import { CiSearch } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { LuMail } from "react-icons/lu";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaStore } from "react-icons/fa";

const Vendors = () => {
  return (
    <div>
      <div className="categories-section">
        <p className="container mx-auto flex items-center h-full text-[28px] font-medium">
          Stores
        </p>
      </div>
      <div className="container mx-auto my-8">
        <div className="flex justify-between items-center text-[#818487]">
          <p>Showing 1-8 of 8 stores</p>
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="border outline-none h-[50px] transition-all duration-300 hover:border-black focus:border-black pe-[50px] px-3"
            />
            <CiSearch className="absolute top-1/2 transform -translate-y-1/2 right-3 text-2xl text-black" />
          </div>
        </div>

        <div className="grid xl:grid-cols-3 lg:grid-cols-2 max-md:grid-cols-1 gap-3 mt-3">
          {storeData.map((item) => (
            <div className="border rounded" key={item.id}>
              <div className="p-4">
                <p className="font-bold text-2xl">{item.title}</p>
                <div className="flex items-center pt-2 pb-1">
                  <FaStar className="text-[#FFB342]" />
                  <FaStar className="text-[#FFB342]" />
                  <FaStar className="text-[#FFB342]" />
                  <FaStar className="text-[#FFB342]" />
                  <FaStar className="text-gray-400" />
                  <p className="pl-2 text-xs text-gray-600">
                    ({item.reviews} reviews)
                  </p>
                </div>
                <p className="flex items-center gap-1 text-gray-600 text-sm">
                  <span>
                    <CiLocationOn className="text-xl" />
                  </span>
                  <span className="truncate">{item.location}</span>
                </p>
                <p className="flex items-center gap-1 text-gray-600 py-3 text-sm">
                  <span>
                    <FiPhone className="text-lg" />
                  </span>
                  <span className="truncate">{item.phone}</span>
                </p>
                <p className="flex items-center gap-1 text-gray-600 text-sm">
                  <span>
                    <LuMail className="text-lg" />
                  </span>
                  <span className="truncate">{item.email}</span>
                </p>
              </div>
              <div className="border-t p-4 relative">
                <Button className="bg-[#0c55aa] text-white rounded hover:bg-black transition-colors duration-300">
                  <span>
                    <FaStore className="text-xl mr-1" />
                  </span>
                  Visit Store
                </Button>
                <div className="shadow-[0_0_30px_-6px_#afafaf] rounded-full absolute top-[-57px] transform right-5 z-40 bg-white">
                  <Image
                    src={`/${item.img}`}
                    width={80}
                    height={80}
                    alt="store logo"
                    className=""
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vendors;
