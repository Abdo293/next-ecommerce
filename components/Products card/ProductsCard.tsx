import Image from "next/image";
import { ReactNode, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { IoCartOutline } from "react-icons/io5";
import { IoGitCompareOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Link from "next/link";
import { addToCart } from "@/store/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { TiMinus } from "react-icons/ti";
import { TiPlus } from "react-icons/ti";
import { selectProduct } from "@/store/productDetailsSlice";
import { addFavorite, removeFavorite } from "@/store/favoritesSlice";
import { addCompare, removeCompare } from "@/store/compareSlice";

interface IProduct extends IProducts {
  children?: ReactNode;
}

/* tooltip */
interface ITooltipData {
  icon: ReactNode;
  txt: string;
}

export const MyTooltip: React.FC<ITooltipData> = ({ icon, txt }) => {
  return (
    <div className="border-b p-2 cursor-pointer transition-all duration-500 hover:bg-[#0c55aa] hover:text-white">
      <TooltipProvider skipDelayDuration={300} delayDuration={300}>
        <Tooltip delayDuration={0}>
          <TooltipTrigger asChild>
            <span>{icon}</span>
          </TooltipTrigger>
          <TooltipContent side="left" sideOffset={20}>
            <p>{txt}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};
/* end tooltip */

export const ProductsCard: React.FC<IProduct> = ({
  id,
  img,
  cat,
  title,
  price,
  reviews,
  type,
  badge,
  sale,
  children,
}) => {
  const dispatch = useDispatch();
  /* wish list */
  const wishlist = useSelector((state: any) => state.favorites?.favorites);
  const isFavorite = wishlist.some((product: ICart) => product.id === id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite({ id, img, title, price, quantity }));
    }
  };
  /* end wish list */

  // compare
  const compare = useSelector((state: any) => state.compare.compare);
  const isCompare = compare.some((product: ICart) => product.id === id);

  const handleToggleCompare = () => {
    if (isCompare) {
      dispatch(removeCompare(id));
    } else {
      dispatch(addCompare({ id, img, title, price, quantity }));
    }
  };
  // end compare

  const handleAddToCart = (quantity: number) => {
    if (quantity > 0) {
      const productToAdd: ICart = {
        id,
        img,
        title,
        price,
        quantity,
      };
      dispatch(addToCart(productToAdd));
    }
  };

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

  const handleOpenModal = () => {
    const productToView: IproductDetails = {
      id,
      img,
      title,
      price,
      cat,
      reviews,
    };
    dispatch(selectProduct(productToView));
  };

  const [quantity, setQuantity] = useState(1);

  /* start product details */
  const handleSelectProduct = () => {
    const productToView: IproductDetails = {
      id,
      img,
      title,
      price,
      cat,
      reviews,
    };
    dispatch(selectProduct(productToView));
  };
  /* end product details */
  return (
    <div className="max-lg:flex max-lg:justify-center max-lg:items-center w-full">
      <div className="border rounded relative z-10 transition-all duration-500 hover:shadow-xl products-box bg-white products-card">
        {badge === "sale" ? (
          <div className="absolute right-5 top-3 z-50 sale">
            <Badge>-{sale}%</Badge>
          </div>
        ) : (
          <div className="absolute right-5 top-3 z-50 hot">
            <Badge variant="destructive">hot</Badge>
          </div>
        )}
        <div className="flex items-center flex-col relative cards-img">
          <Link
            href={`/product/${id}`}
            className="h-[300px] flex items-center justify-center p-2"
          >
            <Image
              src={img}
              width={250}
              height={250}
              alt="trending products"
              onClick={handleSelectProduct}
              className="object-cover"
            />
          </Link>

          <div className="w-full absolute bottom-0 left-0">
            <button
              onClick={() => handleAddToCart(1)}
              className="w-full bg-black text-white flex justify-center items-center h-0 opacity-0 hover:bg-[#0c55aa] cursor-pointer add-to-cart"
            >
              <div className="py-3 flex items-center gap-2">
                <IoCartOutline className="text-2xl" /> Add To Cart
              </div>
            </button>
          </div>

          <div className="absolute right-0 bottom-12 flex flex-col justify-center items-center rounded w-0 overflow-hidden bg-white icons">
            <Button
              onClick={handleToggleCompare}
              className={
                isCompare ? "bg-[#0C55AA] text-white" : "bg-white text-black"
              }
            >
              <MyTooltip
                icon={<IoGitCompareOutline className="text-2xl" />}
                txt="Add to compare"
              />
            </Button>

            <Dialog>
              <DialogTrigger asChild>
                <Button onClick={handleOpenModal}>
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
                        className="max-w-[300px] max-h-[300px] w-full h-auto object-cover"
                      />
                    </div>
                    <div className="w-1/2 max-md:w-full">
                      <p className="text-gray-500">Shofy</p>

                      <Link
                        href={`/product/${id}`}
                        className="text-[26px] font-bold leading-[1] mb-[15px]"
                      >
                        {viewProductData?.title}
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
                            <p className="pl-2 text-sm">
                              ({viewProductData.reviews} reviews)
                            </p>
                          </div>
                        </div>
                        <p className="text-[15px] leading-[1.7] mb-[20px] text-gray-600">
                          It complies with Microsoft&apos;s Open Office criteria
                          and is specially tuned for outstanding conversations
                          in open-plan workplaces and other loud environments
                          when the microphone boom arm is lowered in Performance
                          Mode
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
                          <button
                            onClick={() => handleAddToCart(quantity)}
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

            <Button
              onClick={handleToggleFavorite}
              className={
                isFavorite ? "bg-[#0C55AA] text-white" : "bg-white text-black"
              }
            >
              <MyTooltip
                icon={<IoHeartOutline className="text-2xl" />}
                txt="Add to wishlist"
              />
            </Button>
          </div>
        </div>

        <div className="px-8 py-4 border-t flex flex-col justify-center">
          <p className="text-xs text-gray-600 font-medium">{cat}</p>
          <p className="text-base font-bold cursor-pointer transition-colors duration-300 hover:text-[#0c55aa] product-title">
            {title}
          </p>
          <div className="flex items-center pt-2 pb-1">
            <FaStar className="text-[#FFB342]" />
            <FaStar className="text-[#FFB342]" />
            <FaStar className="text-[#FFB342]" />
            <FaStar className="text-[#FFB342]" />
            <FaStar className="text-gray-400" />
            <p className="pl-2">({reviews} reviews)</p>
          </div>
          <p className="text-base font-bold text-[#0c55aa]">${price}</p>
        </div>
        {children && <div>{children}</div>}
      </div>
    </div>
  );
};
