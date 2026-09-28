import macImg from "../assets/macbook-latest.jpg";
import iphoneImg from "../assets/iphone14-lineup.png";
import watchImg from "../assets/watch-latest.jpg";
import airpodsImg from "../assets/airpods-pro.png";
import homepodImg from "../assets/homepod-midnight.png";
import caseImg from "../assets/case-yellow.png";
import educationImg from "../assets/education.png";

const CATEGORIES = [
  { label: "Mac", img: macImg },
  { label: "iPhone", img: iphoneImg },
  { label: "iPad", img: educationImg },
  { label: "Apple Watch", img: watchImg },
  { label: "AirPods", img: airpodsImg },
  {
    label: "AirTag",
    svgIcon: (
      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-gray-200 via-white to-gray-300 flex items-center justify-center shadow-xs border border-black/10">
        <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border border-gray-300">
          <span className="text-[16px] font-semibold text-gray-700"></span>
        </div>
      </div>
    ),
  },
  {
    label: "Apple TV 4K",
    svgIcon: (
      <div className="w-16 h-16 rounded-xl bg-black flex items-center justify-center shadow-md">
        <span className="text-[12px] font-bold text-white tracking-widest">tv 4K</span>
      </div>
    ),
  },
  { label: "HomePod", img: homepodImg },
  { label: "Accessories", img: caseImg },
  {
    label: "Apple Gift Card",
    svgIcon: (
      <div className="w-16 h-14 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-sm">
        <span className="text-[18px] font-bold text-white"></span>
      </div>
    ),
  },
];

export default function CategoryIcons() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-6 overflow-x-auto no-scrollbar">
      <div className="flex items-center gap-9 min-w-max pb-2">
        {CATEGORIES.map((cat, idx) => (
          <a
            key={idx}
            href="#"
            className="group flex flex-col items-center gap-3 text-center cursor-pointer transition-transform duration-200 hover:scale-105"
          >
            <div className="w-[120px] h-[78px] flex items-center justify-center overflow-hidden">
              {cat.img ? (
                <img
                  src={cat.img}
                  alt={cat.label}
                  className="max-h-[74px] max-w-[110px] object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
                />
              ) : (
                cat.svgIcon
              )}
            </div>
            <span className="text-[14px] font-semibold text-[#1d1d1f] group-hover:text-[#06c] transition-colors whitespace-nowrap">
              {cat.label}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

