import { FaStar } from "react-icons/fa";

interface IProducts {
  img: string;
  cat: string;
  title: string;
  price: number;
  reviews: number;
}
interface ProductComponentProps extends IProducts {
  index: number;
}
const sale: IProducts[] = [
  {
    img: "/product-5-600x600.jpg",
    cat: "GoPro",
    title: "Sonos Beam Gen 2 Soundbar",
    price: 930.0,
    reviews: 8,
  },
  {
    img: "/product-details-desc-2-150x150.jpg",
    cat: "Global Office",
    title: "Sennheiser Ambeo Soundbar (Digital)",
    price: 689.0,
    reviews: 9,
  },
  {
    img: "/product-7-150x150.jpg",
    cat: "StarKist",
    title: "Sony HT-A9 Home Theater System",
    price: 1464.0,
    reviews: 10,
  },
];
const trending: IProducts[] = [
  {
    img: "/product-11-150x150.jpg",
    cat: "Stouffer",
    title: "Elgato Stream Deck XL",
    price: 930.0,
    reviews: 8,
  },
  {
    img: "/product-20-150x150.jpg",
    cat: "GoPro",
    title: "ASUS ROG Swift PG279QM 27-Inch Gaming Monitor",
    price: 93.0,
    reviews: 9,
  },
  {
    img: "/product-2-150x150.jpg",
    cat: "StarKist",
    title: "Hisense U8G Quantum Series 4K ULED Android TV (Digital)",
    price: 762.72,
    reviews: 10,
  },
];
const topRated: IProducts[] = [
  {
    img: "/product-11-150x150.jpg",
    cat: "Stouffer",
    title: "Elgato Stream Deck XL",
    price: 930.0,
    reviews: 8,
  },
  {
    img: "/product-7-150x150.jpg",
    cat: "StarKist",
    title: "Sony HT-A9 Home Theater System",
    price: 1464.0,
    reviews: 10,
  },
  {
    img: "/product-18-150x150.jpg",
    cat: "StarKist",
    title: "Nintendo Switch OLED Model",
    price: 762.72,
    reviews: 10,
  },
];
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
