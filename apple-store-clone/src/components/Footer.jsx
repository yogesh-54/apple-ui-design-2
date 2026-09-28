const COLS = [
  { h: "Shop and Learn", items: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"] },
  { h: "Apple Wallet", items: ["Wallet", "Apple Card", "Apple Pay", "Apple Cash"] },
  { h: "Account", items: ["Manage Your Apple ID", "Apple Store Account", "iCloud.com"] },
  { h: "Entertainment", items: ["Apple One", "Apple TV+", "Apple Music", "Apple Arcade", "Apple Fitness+", "Apple News+", "Apple Podcasts", "Apple Books", "App Store"] },
  { h: "Apple Store", items: ["Find a Store", "Genius Bar", "Today at Apple", "Apple Camp", "Apple Store App", "Certified Refurbished", "Financing", "Carrier Deals at Apple", "Order Status", "Shopping Help"] },
  { h: "For Business", items: ["Apple and Business", "Shop for Business"] },
  { h: "For Education", items: ["Apple and Education", "Shop for K-12", "Shop for College"] },
  { h: "For Healthcare", items: ["Apple in Healthcare", "Health on Apple Watch", "Health Records on iPhone"] },
  { h: "For Government", items: ["Shop for Government", "Shop for Veterans and Military"] },
  { h: "Apple Values", items: ["Accessibility", "Education", "Environment", "Inclusion and Diversity", "Privacy", "Racial Equity and Justice", "Supplier Responsibility"] },
  { h: "About Apple", items: ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"] },
];

const LEGAL = [
  "1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualify new device purchase, or added to an Apple Gift Card. Actual value awarded is based on receipt of a qualifying device matching the description provided when estimate was made.",
  "2. Apple Card Monthly Installments (ACMI) is a 0% APR payment option available only to eligible customers when you select it at checkout in the U.S. for qualifying Apple products purchased at Apple Store locations, apple.com, the Apple Store app, or by calling 1-800-MY-APPLE.",
  "3. To access and use all Apple Card features and products available only to Apple Card users, you must add Apple Card to Wallet on an iPhone or iPad with the latest version of iOS or iPadOS.",
  "4. Offer valid for 3 months after eligible device activation. One offer per Apple ID and one offer per family if you're part of a Family Sharing group. Plan automatically renews until cancelled. Restrictions and other terms apply.",
];

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] pt-8 pb-10 text-[#6e6e73] border-t border-[#d2d2d7]/50 mt-10">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 text-[12px] leading-relaxed space-y-3 border-b border-[#d2d2d7]/60 pb-6">
        {LEGAL.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 py-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-8 gap-y-8 text-[12px]">
        {COLS.map((c) => (
          <div key={c.h}>
            <h4 className="text-[#1d1d1f] font-semibold mb-3">{c.h}</h4>
            <ul className="space-y-2">
              {c.items.map((i) => (
                <li key={i}>
                  <a href="#" className="hover:underline text-[#424245]">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 pt-4 border-t border-[#d2d2d7]/60 text-[12px] flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <p>
          More ways to shop:{" "}
          <a href="#" className="apple-link">
            Find an Apple Store
          </a>{" "}
          or{" "}
          <a href="#" className="apple-link">
            other retailer
          </a>{" "}
          near you. Or call 1-800-MY-APPLE.
        </p>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-12 mt-4 text-[12px] flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[#6e6e73]">
        <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
        <div className="flex flex-wrap items-center gap-3">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Terms of Use
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Sales Policy
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Legal
          </a>
          <span>|</span>
          <a href="#" className="hover:underline">
            Site Map
          </a>
        </div>
        <span className="hover:underline cursor-pointer font-medium">United States</span>
      </div>
    </footer>
  );
}

