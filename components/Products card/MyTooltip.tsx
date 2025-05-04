import { ReactNode } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

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
