import specialistCard from "../assets/specialist-card.png";
import deviceHelpCard from "../assets/device-help-card.png";

export default function HelpSection() {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-8">
      <h2 className="text-[24px] sm:text-[28px] tracking-tight mb-6">
        <span className="font-semibold text-[#1d1d1f]">Help is here. </span>
        <span className="font-semibold text-[#6e6e73]">Whenever and however you need it.</span>
      </h2>
      <div className="flex gap-5 overflow-x-auto no-scrollbar pb-4 pt-1">
        <div className="apple-card flex-none w-[340px] sm:w-[480px] h-[500px] rounded-[28px] overflow-hidden bg-white shadow-xs border border-black/5 relative cursor-pointer group">
          <img
            src={specialistCard}
            alt="Shop one on one with a Specialist. Online or in a store."
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
          />
        </div>
        <div className="apple-card flex-none w-[340px] sm:w-[480px] h-[500px] rounded-[28px] overflow-hidden bg-white shadow-xs border border-black/5 relative cursor-pointer group">
          <img
            src={deviceHelpCard}
            alt="Get to know your new device with a free Personal Session. Get expert service and support at the Genius Bar."
            className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
}

