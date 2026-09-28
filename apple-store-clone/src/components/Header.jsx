import logo from "../assets/logo.png";

const NAV_LINKS = ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "Entertainment", "Accessories", "Support"];

export default function Header() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-[#161617]/95 backdrop-blur-md text-[#f5f5f7] text-[12px] font-normal tracking-tight border-b border-white/10">
        <div className="max-w-[1080px] mx-auto flex items-center justify-between px-6 h-11">
          <a href="#" className="hover:opacity-70 transition-opacity">
            <img src={logo} alt="Apple" className="h-4 w-auto invert opacity-90" />
          </a>
          <ul className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <li key={l}>
                <a href="#" className="hover:text-white opacity-80 hover:opacity-100 transition-opacity whitespace-nowrap">
                  {l}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-6 opacity-80">
            <button aria-label="Search" className="hover:opacity-100 transition-opacity">
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path d="M11 11l4 4M12.5 7A5.5 5.5 0 111.5 7a5.5 5.5 0 0111 0z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </button>
            <button aria-label="Shopping Bag" className="hover:opacity-100 transition-opacity">
              <svg width="15" height="17" viewBox="0 0 16 18" fill="none">
                <path d="M3 6h10l-.7 9.5a1 1 0 01-1 .9H4.7a1 1 0 01-1-.9L3 6z" stroke="currentColor" strokeWidth="1.2" />
                <path d="M5.5 6V4.5a2.5 2.5 0 015 0V6" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      <div className="bg-[#f5f5f7] text-center text-[14px] text-[#1d1d1f] py-3 px-4 border-b border-[#d2d2d7]/40 shadow-xs">
        Get $200-$600 in credit toward iPhone 14 or iPhone 14 Pro when you trade in iPhone 11 or higher.{" "}
        <a href="#" className="apple-link font-normal inline-flex items-center gap-0.5">
          Shop iPhone <span className="text-[12px]">&gt;</span>
        </a>
      </div>
    </header>
  );
}

