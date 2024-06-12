"use client";
import { removeCompare } from "@/store/compareSlice";
import { addToCart } from "@/store/productSlice";
import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const Compare = () => {
  const dispatch = useDispatch();
  const compare = useSelector((state: any) => state.compare?.compare);

  const tabelHead = [
    "Product",
    "Description",
    "Price",
    "Weight",
    "Size",
    "Add to cart",
    "Rating",
    "Remove",
  ];

  const handleAddToCart = (product: ICart, quantity: number) => {
    if (quantity > 0) {
      const productToAdd: ICart = {
        id: product.id,
        img: product.img,
        title: product.title,
        price: product.price,
        quantity,
      };
      dispatch(addToCart(productToAdd));
    }
  };
  return (
    <div className="container mx-auto my-10 max-[992px]:mt-[115px]">
      <div className="overflow-x-auto">
        <table className="max-w-[1350px] w-full">
          <tbody>
            {compare.length ? (
              tabelHead.map((header, index) => (
                <tr key={index} className="text-center">
                  <th className="border px-4 py-2 text-center">{header}</th>
                  {compare.map((item: any, idx: number) => (
                    <td key={idx} className="border px-4 py-2">
                      <div className="flex flex-col items-center">
                        {header === "Product" && (
                          <Image
                            width={130}
                            height={130}
                            src={item.img}
                            alt="compare img"
                          />
                        )}
                        {header === "Product" && (
                          <p className="font-bold">{item.title}</p>
                        )}
                      </div>
                      {header === "Description" && (
                        <span>
                          Jabra Evolve2 75 USB-A MS Teams Stereo Headset The
                          Jabra Evolve2 75 USB-A MS Teams Stereo Headset has
                          replaced previous hybrid working standards.
                          Industry-leading call quality thanks to top-notch
                          audio engineering.
                        </span>
                      )}
                      {header === "Price" && `$${item.price}`}
                      {header === "Weight" && "-"}
                      {header === "Size" && "-"}
                      {header === "Add to cart" && (
                        <button
                          onClick={() => handleAddToCart(item, 1)}
                          className="block mx-auto px-8 py-2 border border-black mt-3 transition-colors duration-500 hover:bg-[#0c55aa] hover:text-white hover:border-white"
                        >
                          Add To Cart
                        </button>
                      )}
                      {header === "Rating" && (
                        <div className="flex items-center justify-center pt-2 pb-1">
                          <FaStar className="text-[#FFB342]" />
                          <FaStar className="text-[#FFB342]" />
                          <FaStar className="text-[#FFB342]" />
                          <FaStar className="text-[#FFB342]" />
                          <FaStar className="text-gray-400" />
                        </div>
                      )}
                      {header === "Remove" && (
                        <button
                          onClick={() => dispatch(removeCompare(item.id))}
                          className="bg-red-500 text-white px-2 py-1 rounded"
                        >
                          Remove
                        </button>
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={tabelHead.length} className="text-center">
                  <div className="flex flex-col justify-center items-center">
                    <p className="font-bold text-[28px]">
                      Your compare list is empty
                    </p>
                    <Link
                      href={"/shop"}
                      className="block px-10 py-3 text-white bg-[#010f1c] mt-8 transition-colors duration-500 hover:bg-[#0c55aa]"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Compare;
