"use client";
import { useState, useEffect } from "react";
import { ProductsCard } from "../Products card/ProductsCard";
import { trendingProducts } from "@/store/data";

export const TrendingProducts = () => {
  const [mainProducts, setMainProducts] = useState<IProducts[]>([]);
  const [products, setProducts] = useState<IProducts[]>([]);

  useEffect(() => {
    const fetchProducts = () => {
      setMainProducts(trendingProducts);
      setProducts(trendingProducts);
    };

    fetchProducts();
  }, []);

  const [currentActive, setActive] = useState<string>("all");

  const productFilter = (type: string) => {
    if (type === "all") {
      setProducts(mainProducts);
    } else {
      const newProducts = mainProducts.filter((item) => item.type === type);
      setProducts(newProducts);
    }
  };
  return (
    <div className="trending container mx-auto">
      <div className="flex justify-between items-center py-8 max-lg:flex-col">
        <h3 className="text-[36px] font-bold max-md:text-[24px]">
          <span className="text-[#0c55aa]">Trending</span> <span>Products</span>
        </h3>
        <span className="w-1/4 h-[2px] bg-gray-200 max-lg:hidden"></span>
        <ul className="flex gap-4 max-md:gap-[7px]">
          <li
            onClick={() => {
              setActive("all");
              setProducts(mainProducts);
            }}
            className={`cursor-pointer text-lg max-md:text-base ${
              currentActive === "all" ? "active" : null
            }`}
          >
            All
          </li>
          <li
            onClick={() => {
              setActive("featured");
              productFilter("featured");
            }}
            className={`cursor-pointer text-lg max-md:text-base ${
              currentActive === "featured" ? "active" : null
            }`}
          >
            Featured
          </li>
          <li
            onClick={() => {
              setActive("sale");
              productFilter("sale");
            }}
            className={`cursor-pointer text-lg max-md:text-base ${
              currentActive === "sale" ? "active" : null
            }`}
          >
            On sale
          </li>
          <li
            onClick={() => {
              setActive("trending");
              productFilter("trending");
            }}
            className={`cursor-pointer text-lg max-md:text-base ${
              currentActive === "trending" ? "active" : null
            }`}
          >
            Trending
          </li>
          <li
            onClick={() => {
              setActive("topRated");
              productFilter("top reated");
            }}
            className={`cursor-pointer text-lg max-md:text-base ${
              currentActive === "topRated" ? "active" : null
            }`}
          >
            Top rated
          </li>
        </ul>
      </div>

      <div className="grid xl:grid-cols-4 lg:grid-cols-2 max-md:grid-cols-1 gap-5 trending-cards">
        {products.map((item, index) => (
          <ProductsCard
            key={index}
            id={item.id}
            img={item.img}
            cat={item.cat}
            title={item.title}
            price={item.price}
            reviews={item.reviews}
            badge={item.badge}
            sale={item.sale}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};
