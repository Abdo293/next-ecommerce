"use client";
import { removeItem, updateQuantity } from "@/store/productSlice";
import Image from "next/image";
import { TiMinus, TiPlus } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { IoTrashOutline } from "react-icons/io5";
import Link from "next/link";

const ViewCart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.cart?.products);
  const totalPrice = () => {
    let total = 0;
    if (products && products.length > 0) {
      products.forEach((item: ICart) => (total += item.quantity * item.price));
    }
    return total.toFixed(2);
  };

  const increaseQuantity = (id: number) => {
    const item = products.find((item: ICart) => item.id === id);
    if (item) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity + 1,
        })
      );
    }
  };

  const decreaseQuantity = (id: number) => {
    const item = products.find((item: ICart) => item.id === id);
    if (item && item.quantity > 1) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: item.quantity - 1,
        })
      );
    }
  };
  return (
    <div>
      <div className="veiw-cart">
        <div className="container mx-auto flex items-center h-full text-[28px] font-medium">
          <p>Shoping Cart</p>
        </div>
      </div>

      <div className="container mx-auto flex items-center gap-4 my-8">
        <table className="w-3/4">
          <tr className="bg-[#F1F3F4] text-left">
            <th className="py-3 pl-5 w-[44%]">Product</th>
            <th className="py-3">Price</th>
            <th className="py-3">Quantity</th>
            <th className="py-3">Total</th>
            <th></th>
          </tr>

          {products.length > 0 &&
            products.map((item: ICart) => (
              <tr key={item.id}>
                <td className="flex items-center gap-3">
                  <span>
                    <Image
                      src={item.img}
                      width={70}
                      height={70}
                      alt="cart img"
                    />
                  </span>
                  <span>{item.title}</span>
                </td>
                <td>${item.price}</td>
                <td>
                  <div className="flex items-center justify-between px-3 border w-[90px] h-[40px] rounded-full">
                    <span>
                      <TiMinus
                        className="cursor-pointer"
                        onClick={() => decreaseQuantity(item.id)}
                      />
                    </span>
                    <span>{item.quantity}</span>
                    <span>
                      <TiPlus
                        className="cursor-pointer"
                        onClick={() => increaseQuantity(item.id)}
                      />
                    </span>
                  </div>
                </td>
                <td>${item.quantity * item.price}</td>
                <td>
                  <IoTrashOutline
                    className="cursor-pointer text-red-700 text-xl"
                    onClick={() => dispatch(removeItem(item.id))}
                  />
                </td>
              </tr>
            ))}
        </table>

        <div className="w-1/4 px-3 shadow-lg py-5">
          <div className="flex justify-between items-center border-b py-3">
            <p className="text-xl font-medium">Subtotal:</p>
            <p className="text-xl font-medium">${totalPrice()}</p>
          </div>
          <div className="flex justify-between items-center py-5">
            <p className="textgray400">Tax:</p>
            <p className="textgray400">$0.00</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xl font-medium">Subtotal:</p>
            <p className="text-xl font-medium">${totalPrice()}</p>
          </div>

          <Link
            href={"/"}
            className="block w-full text-center py-3 text-white mt-3 bg-[#010f1c] transition-colors duration-500 hover:bg-[#0c55aa]"
          >
            Proceed to checkout
          </Link>
          <Link
            href={"/shop"}
            className="w-full text-center pt-3 underline block text-gray-600"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ViewCart;
