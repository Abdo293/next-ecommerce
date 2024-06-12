"use client";
import { usePathname } from "next/navigation";
import { ShopLayout } from "@/components/layout/ShopLayout";

const Page = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathname = usePathname();
  const getTitle = () => {
    switch (pathname) {
      case "/category/bluetooth":
        return "Bluetooth";
      case "/category/headphones":
        return "Headphones";
      case "/category/mobile":
        return "Mobile Phone";
      case "/category/cpu":
        return "Cpu Heat Pipes";
      case "/category/smart-watch":
        return "Smart Watch";
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
