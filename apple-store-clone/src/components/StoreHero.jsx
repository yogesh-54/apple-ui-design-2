import specialistAvatar from "../assets/specialist-avatar.jpg";

export default function StoreHero() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-12 pt-12 pb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      <h1 className="text-[36px] sm:text-[44px] md:text-[48px] leading-[1.1] tracking-tight">
        <span className="font-semibold text-[#1d1d1f]">Store. </span>
        <span className="font-semibold text-[#6e6e73]">
          The best way to buy
          <br className="hidden sm:inline" /> the products you love.
        </span>
      </h1>
      <div className="flex flex-col gap-4 text-[14px] text-[#1d1d1f] shrink-0 pt-1">
        <div className="flex items-center gap-3">
          <img
            src={specialistAvatar}
            alt="Specialist"
            className="w-[38px] h-[38px] rounded-full object-cover shadow-xs border border-black/5"
          />
          <div className="leading-tight">
            <p className="font-semibold text-[#1d1d1f]">Need shopping help?</p>
            <a href="#" className="apple-link text-[14px]">
              Ask a Specialist
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[38px] h-[38px] rounded-full bg-white border border-[#d2d2d7] flex items-center justify-center text-[#1d1d1f]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M3 21h18M3 7l9-4 9 4v14H3V7zM9 21v-6h6v6" />
            </svg>
          </div>
          <div className="leading-tight">
            <p className="font-semibold text-[#1d1d1f]">Visit an Apple Store</p>
            <a href="#" className="apple-link text-[14px]">
              Find one near you
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

