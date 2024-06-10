import { ReactNode } from "react";

interface ISliderProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export const Features: React.FC<ISliderProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex items-center  gap-3 bg-[#F6F7F9] py-8 pl-10 rounded">
      <div>{icon}</div>
      <div>
        <p className="font-bold text-base">{title}</p>
        <p className="text-sm text-[#55585b]">{description}</p>
      </div>
    </div>
  );
};
