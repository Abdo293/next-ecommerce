"use client";
import { addToCart } from "@/store/productSlice";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { TiMinus, TiPlus } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const dispatch = useDispatch();
  const selectedProduct = useSelector(
    (state: any) => state.productDetails.product
  );
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const productToAdd = {
      id: selectedProduct.id,
      img: selectedProduct.img,
      title: selectedProduct.title,
      price: selectedProduct.price,
      quantity: quantity,
    };
    dispatch(addToCart(productToAdd));
  };

  return (
    <div className="container mx-auto my-16">
      <div>
        {selectedProduct && (
          <div className=" flex gap-5 items-center max-md:flex-col">
            <div className="w-1/2 max-md:w-full flex justify-center items-center">
              <Image
                src={selectedProduct.img}
                width={300}
                height={300}
                alt={selectedProduct.title}
              />
            </div>
            <div className="w-1/2 max-md:w-full">
              <p className="text-gray-500">Shofy</p>
              <p className="text-[26px] font-bold leading-[1] mb-[15px]">
                {selectedProduct.title}
              </p>
              <div>
                <div className="flex gap-3 items-center mb-[10px]">
                  <p className="bg-[rgba(9,137,255,.06)] text-[#0C55AA] py-[4px] px-3">
                    {selectedProduct.cat}
                  </p>
                  <div className="flex items-center pt-2 pb-1">
                    <FaStar className="text-[#FFB342]" />
                    <FaStar className="text-[#FFB342]" />
                    <FaStar className="text-[#FFB342]" />
                    <FaStar className="text-[#FFB342]" />
                    <FaStar className="text-gray-400" />
                    <p className="pl-2">({selectedProduct.reviews} reviews)</p>
                  </div>
                </div>
                <p className="text-[15px] leading-[1.7] mb-[20px] text-gray-600">
                  It complies with Microsoft's Open Office criteria and is
                  specially tuned for outstanding conversations in open-plan
                  workplaces and other loud environments when the microphone
                  boom arm is lowered in Performance Mode
                </p>
                <p className="text-xl font-medium mb-[20px]">
                  ${selectedProduct.price}
                </p>
                <p className="text-green-700 text-sm">10 products available</p>
                <p className="text-base mb-[13px] mt-[20px]">Quantity</p>
                <div className="flex max-md:flex-col gap-5">
                  <div className="w-[25%]">
                    <div className="bg-gray-200 w-[122px] flex items-center justify-between px-3 h-[46px]">
                      <span>
                        <TiMinus
                          className="cursor-pointer"
                          onClick={() =>
                            setQuantity(quantity <= 1 ? 1 : quantity - 1)
                          }
                        />
                      </span>
                      <span>{quantity}</span>
                      <span>
                        <TiPlus
                          className="cursor-pointer"
                          onClick={() => setQuantity(quantity + 1)}
                        />
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className="border-[#e0e2e3] border  text-center py-[9px] px-[30px] w-full transition-colors duration-500 hover:bg-[#010f1c] hover:text-white"
                  >
                    Add To Cart
                  </button>
                </div>
                <button className="mt-3 text-center w-full bg-[#0C55AA] py-[13px] px-[30px] text-white font-medium transition-colors duration-500 hover:bg-[#010f1c]">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
