"use client";
import { ProductsCard } from "@/components/Products card/ProductsCard";
import { bluetooth } from "@/store/data";

const Cooking = () => {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 max-md:grid-cols-1 gap-3">
      {bluetooth.map((item, index) => (
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
  );
};

export default Cooking;
