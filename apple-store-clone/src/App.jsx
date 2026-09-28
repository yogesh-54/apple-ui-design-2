import Header from "./components/Header.jsx";
import StoreHero from "./components/StoreHero.jsx";
import CategoryIcons from "./components/CategoryIcons.jsx";
import LatestSection from "./components/LatestSection.jsx";
import HelpSection from "./components/HelpSection.jsx";
import DifferenceSection from "./components/DifferenceSection.jsx";
import CardRow from "./components/CardRow.jsx";
import QuickLinks from "./components/QuickLinks.jsx";
import Footer from "./components/Footer.jsx";

import accessoriesIntro from "./assets/accessories-intro.png";
import caseYellow from "./assets/case-yellow.png";
import caseInk from "./assets/case-ink.png";
import bandPeek from "./assets/band-peek.png";
import homepodMidnight from "./assets/homepod-midnight.png";
import airpodsPro from "./assets/airpods-pro.png";
import homepodMiniPeek from "./assets/homepod-mini-peek.png";
import appleMusicFree from "./assets/apple-music-free.png";
import rihanna from "./assets/rihanna.png";
import appleOne from "./assets/apple-one.png";
import applecarePeek from "./assets/applecare-peek.png";
import education from "./assets/education.png";
import business from "./assets/business.png";
import government from "./assets/government.png";

export default function App() {
  return (
    <div className="min-h-screen bg-[#f5f5f7]">
      <Header />
      <StoreHero />
      <CategoryIcons />
      <LatestSection />
      <HelpSection />
      <DifferenceSection />

      <CardRow
        eyebrow="Accessories."
        title="Essentials that pair perfectly with your favorite devices."
        cards={[
          {
            isImageOnly: true,
            src: accessoriesIntro,
            alt: "In with the new. Discover fresh new colors for your favorite accessories.",
          },
          {
            isProduct: true,
            badge: "NEW",
            title: "iPhone 14 Silicone Case with MagSafe - Canary Yellow",
            price: "$49.00",
            swatches: ["#fbe300", "#a89bce", "#314358", "#b82b35", "#1f2022", "#e2e2e2"],
            src: caseYellow,
          },
          {
            isProduct: true,
            badge: "NEW",
            title: "iPhone 14 Pro Leather Case with MagSafe - Ink",
            price: "$59.00",
            swatches: ["#3c3b4d", "#7c5541", "#334139", "#212226"],
            src: caseInk,
          },
          {
            isProduct: true,
            badge: "NEW",
            title: "45mm Bright Yellow Sport Loop",
            price: "$49.00",
            swatches: ["#fbe300", "#e07833", "#435d49", "#1f2022"],
            src: bandPeek,
          },
        ]}
      />

      <CardRow
        eyebrow="Loud and clear."
        title="Unparalleled choices for rich, high-quality sound."
        cards={[
          {
            isImageOnly: true,
            src: appleMusicFree,
            alt: "Get 6 months of Apple Music free. Included with your purchase of select AirPods or HomePod.",
          },
          {
            isProduct: true,
            badge: "NEW",
            title: "HomePod - Midnight",
            price: "$299.00",
            swatches: ["#1f2022", "#f2f2f2"],
            src: homepodMidnight,
          },
          {
            isProduct: true,
            badge: "FREE ENGRAVING",
            title: "AirPods Pro (2nd generation)",
            price: "$249.00",
            src: airpodsPro,
          },
          {
            isProduct: true,
            badge: "NEW",
            title: "HomePod mini",
            price: "$99.00",
            swatches: ["#e3663a", "#fbe300", "#317496", "#f2f2f2", "#3a3b3e"],
            src: homepodMiniPeek,
          },
        ]}
      />

      <CardRow
        eyebrow="The Apple experience."
        title="Do even more with Apple products and services."
        cards={[
          {
            isImageOnly: true,
            src: rihanna,
            alt: "Apple Music: Rihanna's iconic hits now in Spatial Audio.",
          },
          {
            isImageOnly: true,
            src: appleOne,
            alt: "Six Apple services. One easy subscription.",
          },
          {
            isImageOnly: true,
            src: applecarePeek,
            alt: "We've got you covered. AppleCare+ now comes with repairs for accidental damage.",
          },
        ]}
      />

      <CardRow
        eyebrow="Special stores."
        title="Exclusive savings for businesses, school, and more."
        cards={[
          {
            isImageOnly: true,
            src: education,
            alt: "Education: Save on Mac or iPad with education pricing.",
          },
          {
            isImageOnly: true,
            src: business,
            alt: "Business: From enterprise to small business, we'll work with you.",
          },
          {
            isImageOnly: true,
            src: government,
            alt: "Government: Special pricing is available for state, local, and federal agencies.",
          },
        ]}
      />

      <QuickLinks />
      <Footer />
    </div>
  );
}

