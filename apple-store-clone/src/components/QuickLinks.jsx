const LINKS = ["Order Status", "Shopping Help", "Returns", "Your Saved Items"];

export default function QuickLinks() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-12 pt-12 pb-6">
      <h2 className="text-[22px] font-semibold text-[#1d1d1f] mb-4 tracking-tight">Quick Links</h2>
      <div className="flex flex-wrap gap-3">
        {LINKS.map((l) => (
          <button
            key={l}
            className="bg-white border border-[#d2d2d7]/70 rounded-full px-5 py-2 text-[14px] font-medium text-[#1d1d1f] hover:bg-[#e8e8ed] hover:border-black/20 transition-all cursor-pointer shadow-2xs"
          >
            {l}
          </button>
        ))}
      </div>
    </section>
  );
}

