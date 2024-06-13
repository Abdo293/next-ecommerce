import { sale, topRated, trending } from "@/store/data";
import { FaStar } from "react-icons/fa";

const ProductComponent: React.FC<ProductComponentProps> = ({
  img,
  cat,
  title,
  price,
  reviews,
  index,
}) => {
  return (
    <div
      className={`flex items-center ${
        index === 1 ? "border-t border-b py-3" : ""
      } h-full`}
    >
      <div className="mr-[25px] flex-shrink-0">
        <img src={img} alt="img" className="w-[140px] rounded" />
      </div>
      <div className="flex-1">
        <p className="text-xs">{cat}</p>
        <p className="text-[15px] font-medium">{title}</p>
        <div className="flex items-center pt-2 pb-1">
          <FaStar className="text-[#FFB342]" />
          <FaStar className="text-[#FFB342]" />
          <FaStar className="text-[#FFB342]" />
          <FaStar className="text-[#FFB342]" />
          <FaStar className="text-gray-400" />
          <p className="pl-2 font-medium text-xs">({reviews} reviews)</p>
        </div>
        <p className="text-[#0c55aa] font-bold text-[15px]">${price}</p>
      </div>
    </div>
  );
};

export const TopProducts = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1 gap-4">
        <div className="h-full flex flex-col">
          <h3 className="text-[26px] font-bold">On Sale</h3>
          {sale.map((item, index) => (
            <div key={index} className="flex-1 flex items-stretch">
              <ProductComponent
                img={item.img}
                cat={item.cat}
                title={item.title}
                price={item.price}
                reviews={item.reviews}
                index={index}
              />
            </div>
          ))}
        </div>
        <div className="h-full flex flex-col">
          <h3 className="text-[26px] font-bold">Trending Products</h3>
          {trending.map((item, index) => (
            <div key={index} className="flex-1 flex items-stretch">
              <ProductComponent
                img={item.img}
                cat={item.cat}
                title={item.title}
                price={item.price}
                reviews={item.reviews}
                index={index}
              />
            </div>
          ))}
        </div>
        <div className="h-full flex flex-col">
          <h3 className="text-[26px] font-bold">Top Rated</h3>
          {topRated.map((item, index) => (
            <div key={index} className="flex-1 flex items-stretch">
              <ProductComponent
                img={item.img}
                cat={item.cat}
                title={item.title}
                price={item.price}
                reviews={item.reviews}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
