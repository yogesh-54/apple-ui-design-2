const FEATURES = [
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-[#008800]">
        <path d="M1 3h15v13H1z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M16 8h4l3 4v4h-7V8z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <circle cx="5.5" cy="18.5" r="2.5" fill="white" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="18.5" cy="18.5" r="2.5" fill="white" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
    text: (
      <>
        Enjoy <span className="text-[#008800] font-semibold">two‑hour delivery</span> from an Apple Store,{" "}
        <span className="text-[#008800] font-semibold">free delivery</span>, or easy pickup.<sup>2</sup>
      </>
    ),
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-[#8e24aa]">
        <path d="M4 12a8 8 0 0113.85-5.5L20 4m-4 0v4h4M20 12a8 8 0 01-13.85 5.5L4 20m4 0v-4H4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    text: (
      <>
        <span className="text-[#8e24aa] font-semibold">Trade in your current device.</span> Get credit toward a new one.<sup>3</sup>
      </>
    ),
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-[#008800]">
        <rect x="2" y="5" width="20" height="14" rx="3" stroke="currentColor" strokeWidth="1.8" />
        <line x1="2" y1="10" x2="22" y2="10" stroke="currentColor" strokeWidth="1.8" />
        <line x1="6" y1="15" x2="10" y2="15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    text: (
      <>
        Pay in full or <span className="text-[#008800] font-semibold">pay over time.</span> Your choice.
      </>
    ),
  },
  {
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" className="text-[#0071e3]">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="9" cy="9.5" r="1.2" fill="currentColor" />
        <circle cx="15" cy="9.5" r="1.2" fill="currentColor" />
        <path d="M8 14.5c1 1.5 2.5 2 4 2s3-.5 4-2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    text: (
      <>
        <span className="text-[#0071e3] font-semibold">Make them yours.</span> Engrave a mix of emoji, names, and numbers for free.
      </>
    ),
  },
];

export default function DifferenceSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-8">
      <h2 className="text-[24px] sm:text-[28px] tracking-tight mb-6">
        <span className="font-semibold text-[#1d1d1f]">The Apple Store difference. </span>
        <span className="font-semibold text-[#6e6e73]">Even more reasons to shop with us.</span>
      </h2>
      <div className="flex gap-5 overflow-x-auto no-scrollbar pb-4 pt-1">
        {FEATURES.map((f, i) => (
          <div
            key={i}
            className="apple-card flex-none w-[280px] sm:w-[312px] h-[230px] bg-white rounded-[24px] p-6 flex flex-col justify-between shadow-xs border border-black/5 cursor-pointer"
          >
            <div className="mb-4">{f.icon}</div>
            <p className="text-[15px] leading-snug text-[#1d1d1f] tracking-tight">{f.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

