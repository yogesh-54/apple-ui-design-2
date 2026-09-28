import iphone from "../assets/iphone14-lineup.png";
import macbook from "../assets/macbook-latest.jpg";
import watch from "../assets/watch-latest.jpg";

function LatestCard({ eyebrow, title, price, img, dark }) {
  return (
    <div
      className={`apple-card flex-none w-[340px] sm:w-[400px] md:w-[480px] h-[500px] rounded-[28px] overflow-hidden flex flex-col justify-between cursor-pointer ${
        dark ? "bg-black text-white" : "bg-white text-[#1d1d1f] shadow-xs border border-black/5"
      }`}
    >
      <div className="p-8 pb-0">
        <p className={`text-[12px] font-semibold tracking-wider uppercase ${dark ? "text-[#86868b]" : "text-[#6e6e73]"}`}>
          {eyebrow}
        </p>
        <h3 className="text-[26px] sm:text-[28px] font-semibold tracking-tight mt-1 leading-snug">
          {title}
        </h3>
        <p className={`text-[14px] mt-2 leading-relaxed ${dark ? "text-[#a1a1a6]" : "text-[#1d1d1f]"}`}>
          {price}
        </p>
      </div>
      <div className="flex justify-center items-end p-4 h-[260px] overflow-hidden">
        <img
          src={img}
          alt={title}
          className="max-h-full max-w-full object-contain drop-shadow-md hover:scale-105 transition-transform duration-500"
        />
      </div>
    </div>
  );
}

export default function LatestSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-8">
      <h2 className="text-[24px] sm:text-[28px] tracking-tight mb-6">
        <span className="font-semibold text-[#1d1d1f]">The latest. </span>
        <span className="font-semibold text-[#6e6e73]">Take a look at what's new, right now.</span>
      </h2>
      <div className="flex gap-5 overflow-x-auto no-scrollbar pb-4 pt-1">
        <LatestCard
          eyebrow="iPhone 14"
          title="Wonderful."
          price="From $799.00 or $33.29/mo. for 24 mo. before trade‑in"
          img={iphone}
        />
        <LatestCard
          dark
          eyebrow='MacBook Pro 14" and 16"'
          title="Mover. Maker. Boundary breaker."
          price="From $1999.00 or $166.58/mo. for 12 mo."
          img={macbook}
        />
        <LatestCard
          dark
          eyebrow="Apple Watch Series 8"
          title="A healthy leap ahead."
          price="From $399.00 or $16.62/mo. for 24 mo."
          img={watch}
        />
      </div>
    </section>
  );
}

