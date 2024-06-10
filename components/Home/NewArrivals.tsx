"use client";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";
import { Navigation, A11y } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import { MyTooltip } from "../Products card/ProductsCard";
import {
  IoCartOutline,
  IoEyeOutline,
  IoGitCompareOutline,
  IoHeartOutline,
} from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "../ui/badge";
import React, { useEffect, useState } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/store/productSlice";
import { selectProduct } from "@/store/productDetailsSlice";
import { TiMinus, TiPlus } from "react-icons/ti";
import { Button } from "../ui/button";

const data: IProducts[] = [
  {
    id: 1,
    img: "/product-5-600x600.jpg",
    cat: "GoPro",
    title: "Sonos Beam Gen 2 Soundbar",
    price: 930.0,
    reviews: 8,
    type: "sale",
    badge: "sale",
    sale: 44,
  },
  {
    id: 2,
    img: "/product-19-600x600.jpg",
    cat: "Global Office",
    title: "Bose Smart Soundbar 900",
    price: 689.0,
    reviews: 9,
    type: "featured",
    badge: "hot",
  },
  {
    id: 3,
    img: "/product-17-600x600.jpg",
    cat: "Young Shop",
    title: "JBL Bar 9.1 Soundbar with Dolby Atmos",
    price: 1464.0,
    reviews: 10,
    type: "trending",
    badge: "sale",
    sale: 44,
  },
  {
    id: 4,
    img: "/product-7-600x600.jpg",
    cat: "StarKist",
    title: "Sony HT-A9 Home Theater System",
    price: 294.0,
    reviews: 8,
    type: "top reated",
    badge: "hot",
  },
  {
    id: 5,
    img: "/product-18-150x150.jpg",
    cat: "StarKist",
    title: "Sony HT-A9 Home Theater System",
    price: 294.0,
    reviews: 8,
    type: "top reated",
    badge: "hot",
  },
];

const ArrowSwiper: React.FC = () => {
  const swiper = useSwiper();

  return (
    <div className="flex items-center">
      <button
        className="w-[35px] border rounded-full h-[35px] flex justify-center items-center mr-3"
        onClick={() => swiper.slidePrev()}
      >
        <MdKeyboardArrowLeft className="text-xl text-[#55585b]" />
      </button>
      <button
        className="w-[35px] border rounded-full h-[35px] flex justify-center items-center"
        onClick={() => swiper.slideNext()}
      >
        <MdOutlineKeyboardArrowRight className="text-xl text-[#55585b]" />
      </button>
    </div>
  );
};

export const NewArrivals = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const selectedProduct = useSelector(
    (state: any) => state.productDetails.product
  );
  const [viewProductData, setViewProductData] =
    useState<IproductDetails | null>(null);

  useEffect(() => {
    if (selectedProduct) {
      setViewProductData(selectedProduct);
    }
  }, [selectedProduct]);

  const handleOpenModal = (product: IProducts) => {
    const productToView: IproductDetails = {
      id: product.id,
      img: product.img,
      title: product.title,
      price: product.price,
      cat: product.cat,
      reviews: product.reviews,
    };
    dispatch(selectProduct(productToView));
  };

  const handleAddToCart = (product: IproductDetails) => {
    const productToAdd: ICart = {
      id: product.id,
      img: product.img,
      title: product.title,
      price: product.price,
      quantity,
    };
    dispatch(addToCart(productToAdd));
  };

  /* start product details */
  const handleSelectProduct = (product: IproductDetails) => {
    const productToView: IproductDetails = {
      id: product.id,
      img: product.img,
      title: product.title,
      price: product.price,
      cat: product.cat,
      reviews: product.reviews,
    };
    dispatch(selectProduct(productToView));
  };
  /* end product details */

  return (
    <div className="container mx-auto arrivals relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation, A11y]}
        navigation={false}
        className="mySwiper arrivals"
      >
        <div className="flex justify-between items-center pt-10 pb-6 max-md:flex-col absolute top-0 left-0 z-50 w-full">
          <h3 className="text-[36px] font-bold max-lg:text-[24px]">
            <span className="text-[#0c55aa]">New</span> <span>Arrivals</span>
          </h3>
          <span className="w-1/2 h-[2px] bg-gray-200 max-md:hidden"></span>
          <div>
            <ArrowSwiper />
          </div>
        </div>
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="border rounded relative z-10 transition-all duration-500 hover:shadow-xl products-box bg-white products-card">
              {item.badge === "sale" ? (
                <div className="absolute right-5 top-3 z-50 sale">
                  <Badge>-{item.sale}%</Badge>
                </div>
              ) : (
                <div className="absolute right-5 top-3 z-50 hot">
                  <Badge variant="destructive">hot</Badge>
                </div>
              )}
              <div className="flex items-center flex-col relative">
                <Link href={`/product/${item.id}`}>
                  <Image
                    src={item.img}
                    width={300}
                    height={300}
                    alt="trending products"
                    onClick={() => handleSelectProduct(item)}
                  />
                </Link>

                <div className="w-full absolute bottom-0 left-0">
                  <div className="w-full bg-black text-white flex justify-center items-center h-0 opacity-0 hover:bg-[#0c55aa] cursor-pointer add-to-cart">
                    <div
                      className="py-3 flex items-center gap-2"
                      onClick={() => handleAddToCart(item)}
                    >
                      <IoCartOutline className="text-2xl" /> Add To Cart
                    </div>
                  </div>
                </div>

                <div className="absolute right-0 bottom-12 flex flex-col justify-center items-center rounded w-0 overflow-hidden bg-white icons">
                  <MyTooltip
                    icon={<IoGitCompareOutline className="text-2xl" />}
                    txt="Add to compare"
                  />
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button onClick={() => handleOpenModal(item)}>
                        <MyTooltip
                          icon={<IoEyeOutline className="text-2xl" />}
                          txt="Quick view"
                        />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[800px] overflow-hidden">
                      {viewProductData && (
                        <div className="flex gap-5 items-center max-md:flex-col">
                          <div className="w-1/2 max-md:w-full">
                            <Image
                              src={viewProductData.img}
                              width={300}
                              height={300}
                              alt={viewProductData.title}
                            />
                          </div>
                          <div className="w-1/2 max-md:w-full">
                            <p className="text-gray-500">Shofy</p>
                            <Link
                              href={`/product/${viewProductData.id}`}
                              className="text-[26px] font-bold leading-[1] mb-[15px]"
                            >
                              {viewProductData.title}
                            </Link>
                            <div>
                              <div className="flex gap-3 items-center mb-[10px]">
                                <p className="bg-[rgba(9,137,255,.06)] text-[#0C55AA] py-[4px] px-3">
                                  {viewProductData.cat}
                                </p>
                                <div className="flex items-center pt-2 pb-1">
                                  <FaStar className="text-[#FFB342]" />
                                  <FaStar className="text-[#FFB342]" />
                                  <FaStar className="text-[#FFB342]" />
                                  <FaStar className="text-[#FFB342]" />
                                  <FaStar className="text-gray-400" />
                                  <p className="pl-2">
                                    ({viewProductData.reviews} reviews)
                                  </p>
                                </div>
                              </div>
                              <p className="text-[15px] leading-[1.7] mb-[20px] text-gray-600">
                                It complies with Microsoft's Open Office
                                criteria and is specially tuned for outstanding
                                conversations in open-plan workplaces and other
                                loud environments when the microphone boom arm
                                is lowered in Performance Mode
                              </p>
                              <p className="text-xl font-medium mb-[20px]">
                                ${viewProductData.price}
                              </p>
                              <p className="text-green-700 text-sm">
                                10 products available
                              </p>
                              <p className="text-base mb-[13px] mt-[20px]">
                                Quantity
                              </p>
                              <div className="flex max-md:flex-col gap-5">
                                <div className="bg-gray-200 w-[122px] flex items-center justify-between px-3 h-[46px]">
                                  <span>
                                    <TiMinus
                                      className="cursor-pointer"
                                      onClick={() =>
                                        setQuantity(
                                          quantity <= 1 ? 1 : quantity - 1
                                        )
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
                                <button
                                  onClick={() =>
                                    handleAddToCart(viewProductData)
                                  }
                                  className="border-[#e0e2e3] border text-center py-[9px] px-[30px] w-[70%] transition-colors duration-500 hover:bg-[#010f1c] hover:text-white"
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
                    </DialogContent>
                  </Dialog>
                  <MyTooltip
                    icon={<IoHeartOutline className="text-2xl" />}
                    txt={"Add to wishlist"}
                  />
                </div>
              </div>

              <div className="px-8 py-4 border-t flex flex-col justify-center text-left">
                <p className="text-xs text-gray-600 font-medium">{item.cat}</p>
                <p className="text-base font-bold cursor-pointer transition-colors duration-300 hover:text-[#0c55aa] product-title">
                  {item.title}
                </p>
                <div className="flex items-center pt-2 pb-1 max-lg:flex-col max-lg:items-start">
                  <div className="flex">
                    <FaStar className="text-[#FFB342]" />
                    <FaStar className="text-[#FFB342]" />
                    <FaStar className="text-[#FFB342]" />
                    <FaStar className="text-[#FFB342]" />
                    <FaStar className="text-gray-400" />
                  </div>
                  <p className="pl-2 max-lg:pl-0">({item.reviews} reviews)</p>
                </div>
                <p className="text-base font-bold text-[#0c55aa]">
                  ${item.price}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
