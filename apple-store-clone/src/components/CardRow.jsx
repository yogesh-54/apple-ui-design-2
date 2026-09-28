export default function CardRow({ eyebrow, title, cards }) {
  return (
    <section className="max-w-[1280px] mx-auto px-6 md:px-12 py-8">
      <h2 className="text-[24px] sm:text-[28px] tracking-tight mb-6">
        <span className="font-semibold text-[#1d1d1f]">{eyebrow} </span>
        <span className="font-semibold text-[#6e6e73]">{title}</span>
      </h2>
      <div className="flex gap-5 overflow-x-auto no-scrollbar pb-4 pt-1">
        {cards.map((card, i) => {
          if (card.isProduct) {
            return (
              <div
                key={i}
                className="apple-card flex-none w-[280px] sm:w-[312px] h-[500px] bg-white rounded-[28px] p-7 flex flex-col justify-between shadow-xs border border-black/5 cursor-pointer group"
              >
                <div>
                  <div className="h-[220px] flex items-center justify-center p-2">
                    <img
                      src={card.src}
                      alt={card.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {card.swatches && (
                    <div className="flex items-center justify-center gap-1.5 mt-4 mb-2">
                      {card.swatches.map((color, idx) => (
                        <span
                          key={idx}
                          style={{ backgroundColor: color }}
                          className={`w-3 h-3 rounded-full border border-black/10 inline-block ${
                            idx === 0 ? "ring-2 ring-offset-1 ring-blue-500" : ""
                          }`}
                        />
                      ))}
                    </div>
                  )}
                </div>
                <div className="pt-2">
                  {card.badge && (
                    <p className="text-[#b64400] text-[12px] font-semibold tracking-wider uppercase mb-1">
                      {card.badge}
                    </p>
                  )}
                  <h3 className="text-[17px] font-semibold text-[#1d1d1f] leading-snug group-hover:text-[#06c] transition-colors line-clamp-2">
                    {card.title}
                  </h3>
                  {card.price && (
                    <p className="text-[14px] text-[#1d1d1f] mt-2 font-normal">{card.price}</p>
                  )}
                </div>
              </div>
            );
          }

          return (
            <div
              key={i}
              className={`apple-card flex-none w-[320px] sm:w-[400px] md:w-[480px] h-[500px] rounded-[28px] overflow-hidden relative cursor-pointer group ${
                card.dark ? "bg-black text-white" : "bg-white text-[#1d1d1f] shadow-xs border border-black/5"
              }`}
            >
              {card.isImageOnly ? (
                <img
                  src={card.src}
                  alt={card.alt || ""}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
              ) : (
                <>
                  <div className="p-8 relative z-10">
                    {card.eyebrow && (
                      <p className={`text-[12px] font-semibold tracking-wider uppercase ${card.dark ? "text-[#86868b]" : "text-[#6e6e73]"}`}>
                        {card.eyebrow}
                      </p>
                    )}
                    {card.title && (
                      <h3 className="text-[26px] font-semibold tracking-tight mt-1 leading-snug">
                        {card.title}
                      </h3>
                    )}
                    {card.subtitle && (
                      <p className={`text-[14px] mt-2 leading-relaxed ${card.dark ? "text-[#a1a1a6]" : "text-[#1d1d1f]"}`}>
                        {card.subtitle}
                      </p>
                    )}
                  </div>
                  {card.src && (
                    <div className="absolute inset-0 z-0">
                      <img
                        src={card.src}
                        alt={card.title || ""}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

