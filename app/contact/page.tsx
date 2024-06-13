import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AiOutlineYoutube } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { TiSocialFacebook } from "react-icons/ti";

const Contact = () => {
  return (
    <div className="max-[992px]:mt-16">
      <div className="categories-section">
        <p className="container mx-auto flex items-center h-full text-[28px] font-medium">
          Shop
        </p>
      </div>

      <div className="container mx-auto my-5 shadow-xl py-5">
        <p className="text-[28px] font-medium">Sent A Message</p>

        <div className="flex gap-[90px] max-[992px]:flex-col">
          <div className="w-3/4 max-[992px]:w-full">
            <form className="mt-5">
              <div className="flex gap-3 max-[992px]:flex-col">
                <div className="flex flex-col w-[50%] max-[992px]:w-full">
                  <label htmlFor="name" className="mb-2 text-gray-600">
                    Name <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    id="name"
                    className="border h-[56px] px-5 outline-none transition-all duration-500 focus:border-black"
                  />
                </div>
                <div className="flex flex-col w-[50%] max-[992px]:w-full">
                  <label htmlFor="email" className="mb-2 text-gray-600">
                    Email <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Email"
                    id="email"
                    className="border h-[56px] px-5 outline-none transition-all duration-300 focus:border-black"
                  />
                </div>
              </div>

              <div className="flex gap-3 max-[992px]:flex-col my-4">
                <div className="flex flex-col w-[50%] max-[992px]:w-full">
                  <label htmlFor="address" className="mb-2 text-gray-600">
                    Address <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Address"
                    id="address"
                    className="border h-[56px] px-5 outline-none transition-all duration-500 focus:border-black"
                  />
                </div>
                <div className="flex flex-col w-[50%] max-[992px]:w-full">
                  <label htmlFor="phone" className="mb-2 text-gray-600">
                    Phone <span className="text-red-700">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Phone"
                    id="phone"
                    className="border h-[56px] px-5 outline-none transition-all duration-300 focus:border-black"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="subject" className="mb-2 text-gray-600">
                  Subject <span className="text-red-700">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Subject"
                  id="subject"
                  className="border h-[56px] px-5 outline-none transition-all duration-300 focus:border-black"
                />
              </div>

              <div className="flex flex-col mt-4">
                <label htmlFor="subject" className="mb-2 text-gray-600">
                  Subject <span className="text-red-700">*</span>
                </label>
                <textarea
                  placeholder="Write Your Message Here"
                  id="subject"
                  className="border h-[130px] px-5 outline-none transition-all duration-300 focus:border-black pt-[17px]"
                />
              </div>

              <Button className="block px-8 text-center text-white bg-[#010f1c] mt-8 transition-colors duration-500 hover:bg-[#0c55aa]">
                Send
              </Button>
            </form>
          </div>

          <div className="w-1/4 max-[992px]:w-full">
            <div className="flex flex-col">
              <Image
                src={"/icon-1.png"}
                width={60}
                height={60}
                alt="icon img"
              />
              <p className="text-lg mt-5">contact@shofy.com</p>
              <p className="font-bold text-lg">+670 413 90 762</p>
            </div>

            <div className="flex flex-col my-8">
              <Image
                src={"/icon-2.png"}
                width={60}
                height={60}
                alt="icon img"
              />
              <p className="text-lg mt-5">
                502 New St, Brighton VIC 3186, Australia
              </p>
            </div>

            <div className="flex flex-col">
              <Image
                src={"/icon-3.png"}
                width={60}
                height={60}
                alt="icon img"
              />
              <p className="text-lg mt-5">Find on social media</p>
              <div className="flex items-center mt-3">
                <div className="border p-2 mr-3 cursor-pointer transition-colors duration-500 hover:bg-[#0C55AA] contact">
                  <TiSocialFacebook className="text-xl text-[#0c55aa] social-contact" />
                </div>
                <div className="border p-2 mr-3 cursor-pointer transition-colors duration-500 hover:bg-[#0C55AA] contact">
                  <FaXTwitter className="text-xl text-[#0c55aa] social-contact" />
                </div>
                <div className="border p-2 mr-3 cursor-pointer transition-colors duration-500 hover:bg-[#0C55AA] contact">
                  <AiOutlineYoutube className="text-xl text-[#0c55aa] social-contact" />
                </div>
                <div className="border p-2 cursor-pointer transition-colors duration-500 hover:bg-[#0C55AA] contact">
                  <CiLinkedin className="text-xl text-[#0c55aa] social-contact" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
