"use client";
import { Button } from "@/components/ui/button";
import { removeFavorite } from "@/store/favoritesSlice";
import { addToCart } from "@/store/productSlice";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { TiMinus, TiPlus } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state: any) => state.favorites?.favorites);

  const [quantities, setQuantities] = useState<{ [id: number]: number }>({});

  const handleIncreaseQuantity = (id: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 0) + 1,
    }));
  };

  const handleDecreaseQuantity = (id: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max((prevQuantities[id] || 0) - 1, 0),
    }));
  };

  const handleAddToCart = (product: ICart) => {
    const quantity = quantities[product.id] || 1;
    dispatch(addToCart({ ...product, quantity }));
    setQuantities((prevQuantities) => ({ ...prevQuantities, [product.id]: 0 }));
  };

  return (
    <div>
      <div className="veiw-cart">
        <div className="container mx-auto flex items-center h-full text-[28px] font-medium">
          <p>Wishlist</p>
        </div>
      </div>

      <div className="container mx-auto my-8 overflow-x-auto">
        {wishlist.length > 0 ? (
          <table className="max-lg:w-[1000px] w-full text-sm sm:text-base">
            <thead>
              <tr className="bg-[#F1F3F4] text-left">
                <th className="py-2 sm:py-3 pl-5 w-[44%]">Product</th>
                <th className="py-2 sm:py-3">Price</th>
                <th className="py-2 sm:py-3">Quantity</th>
                <th className="py-2 sm:py-3">Action</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map((item: ICart) => (
                <tr key={item.id}>
                  <td className="flex items-center gap-2 sm:gap-3">
                    <Image
                      src={item.img}
                      width={70}
                      height={70}
                      alt="cart img"
                    />
                    <span>{item.title}</span>
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <div className="flex items-center justify-between px-3 border w-[70px] sm:w-[90px] h-[40px] rounded-full">
                      <TiMinus
                        onClick={() => handleDecreaseQuantity(item.id)}
                        className="cursor-pointer"
                      />
                      <span>{quantities[item.id] || item.quantity}</span>
                      <TiPlus
                        onClick={() => handleIncreaseQuantity(item.id)}
                        className="cursor-pointer"
                      />
                    </div>
                  </td>
                  <td>
                    <Button
                      onClick={() => handleAddToCart(item)}
                      className="bg-[#0c55aa] text-white rounded hover:bg-black transition-colors duration-300"
                    >
                      Add To Cart
                    </Button>
                  </td>
                  <td onClick={() => dispatch(removeFavorite(item.id))}>
                    <div className="flex items-center gap-1 text-sm text-gray-600 cursor-pointer">
                      <HiOutlineXMark />
                      <span>Remove</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex flex-col justify-center items-center w-full">
            <p className="font-bold text-[28px]">Your wishlist is empty</p>
            <Link
              href="/shop"
              className="block px-10 py-3 text-white bg-[#010f1c] mt-8 transition-colors duration-500 hover:bg-[#0c55aa]"
            >
              Continue Shopping
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
