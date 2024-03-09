import { FaReact, FaPhp, FaLaravel,} from "react-icons/fa";
import {DiJsBadge, DiHtml5, DiWordpress, DiPython, DiMysql, DiNodejsSmall, DiMongodb} from "react-icons/di";
import { SiTailwindcss, SiGooglemybusiness, SiFlutter   } from "react-icons/si";
const LOGOS = [
  <FaReact size={80} className="text-slate-300" />,
  <DiJsBadge size={80} className="text-slate-300" />,
  <DiHtml5 size={80} className="text-slate-300" />,
  <DiWordpress size={80} className="text-slate-300" />,
  <DiPython size={80} className="text-slate-300" />,
  <DiMysql size={80} className="text-slate-300" />,
  <DiNodejsSmall size={80} className="text-slate-300" />,
  <FaPhp size={80} className="text-slate-300" />,
  <FaLaravel size={80} className="text-slate-300" />,
  <DiMongodb size={80} className="text-slate-300" />,
  <SiTailwindcss size={80} className="text-slate-300" />,
  <SiGooglemybusiness  size={80} className="text-slate-300" />,
  <SiFlutter size={80} className="text-slate-300" />,
];

export default function TechBlock() {
  return (
    <div className="space-y-20">
      <div className="relative flex m-auto w-full overflow-hidden bg-transparent before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:content-['']">
        <div className="w-14 lg:w-32 z-10 absolute h-full shrink-0 -right-1 bg-gradient-to-r from-transparent to-backGround"></div>
        <div className="w-14 lg:w-32 z-10 absolute h-full shrink-0 bg-gradient-to-l from-transparent to-backGround" style={{ transform: "translateX(-3px)" }}></div>
        <div className="animate-infinite-slider flex w-[calc(250px*10)]">
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[125px] items-center justify-center px-2 shrink-0"
              key={index}
            >
              {logo}
            </div>
          ))}
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[125px] items-center justify-center px-2 shrink-0"
              key={index}
            >
              {logo}
            </div>
          ))}
          {LOGOS.map((logo, index) => (
            <div
              className="slide flex w-[125px] items-center justify-center px-2 shrink-0"
              key={index}
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
