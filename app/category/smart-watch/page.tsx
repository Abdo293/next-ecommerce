"use client";
import { ProductsCard } from "@/components/Products card/ProductsCard";
import { cpu } from "@/store/data";

const SmartWatch = () => {
  return (
    <div className="grid xl:grid-cols-3 lg:grid-cols-2 max-md:grid-cols-1 gap-3">
      {cpu.map((item, index) => (
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

export default SmartWatch;
