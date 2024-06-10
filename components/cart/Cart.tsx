import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { TbShoppingBag } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "@/store/productSlice";
import { HiOutlineXMark } from "react-icons/hi2";
import { TiMinus } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";
import Image from "next/image";
import Link from "next/link";

export const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.cart?.products);

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

  const totalPrice = () => {
    return products.reduce((total: number, item: ICart) => {
      return total + item.price * item.quantity;
    }, 0);
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative p-0 m-0 h-full">
          <TbShoppingBag className="text-3xl hover:text-[#0c55aa] transition-all duration-500 cursor-pointer" />
          <Badge className="absolute top-[-8px] right-[-12px] border-2 border-white w-[15px] text-white bg-[#0c55aa] flex justify-center items-center">
            {products.length > 0 ? products.length : 0}
          </Badge>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="mt-5">
          {products.length > 0 &&
            products.map((item: ICart) => (
              <div
                className="flex justify-between mb-3 mt-5 border-b pb-3"
                key={item.id}
              >
                <div className="flex gap-4">
                  <div>
                    <Image
                      src={item.img}
                      width={70}
                      height={70}
                      alt="cart img"
                      className="border"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-base">{item.title}</p>
                    <div className="flex items-center justify-between px-3 mt-3 border w-[90px] h-[40px] rounded-full">
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
                    <p className="text-[#0c55aa] pt-3 font-medium text-sm">
                      ${item.price}
                    </p>
                  </div>
                </div>
                <div>
                  <button
                    className="cursor-pointer"
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    <HiOutlineXMark className="text-red-700" />
                  </button>
                </div>
              </div>
            ))}
        </div>

        <SheetFooter className="!w-full block">
          <div className="flex justify-between">
            <p className="font-medium">Subtotal:</p>
            <p className="font-medium">${totalPrice()}</p>
          </div>
          <div>
            <Link
              href={"/"}
              className="block w-full text-center py-3 text-white bg-[#010f1c] mt-8 transition-colors duration-500 hover:bg-[#0c55aa]"
            >
              Checkout
            </Link>
            <Link
              href={"/veiw-cart"}
              className="block w-full text-center py-3 border border-black mt-3 transition-colors duration-500 hover:bg-[#0c55aa] hover:text-white hover:border-white"
            >
              View Cart
            </Link>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};
