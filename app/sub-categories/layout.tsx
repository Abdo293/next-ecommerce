"use client";
import { ShopLayout } from "@/components/layout/ShopLayout";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Page = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const getTitle = () => {
    switch (pathname) {
      case "/sub-categories/new-arrivals":
        return "New Arrivals";
      case "/sub-categories/electronic":
        return "Electronic";
      case "/sub-categories/gifts":
        return "Gifts";
      case "/sub-categories/computers":
        return "Computers";
      case "/sub-categories/smartphones":
        return "Smart phones";
      case "/sub-categories/tv":
        return "TV, Vedio & Music";
      case "/sub-categories/cameras":
        return "Cameras";
      case "/sub-categories/cooking":
        return "Cooking";
      case "/sub-categories/accessories":
        return "Accessories";
      case "/sub-categories/sports":
        return "Sports";
    }
  };

  return (
    <div>
      <div className="categories-section">
        <p className="container mx-auto flex items-center h-full text-[28px] font-medium">
          {getTitle()}
        </p>
      </div>

      <div className="mt-5 container mx-auto flex gap-5 mb-16">
        <div className="w-[20%] max-md:w-full">
          <ShopLayout />
        </div>

        <div className="w-[80%] max-md:w-full">
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Page;
