import HeroSection from "./components/HeroSection";
import LoveStorySection from "./components/LoveStorySection";
import WeddingDetailsSection from "./components/WeddingDetailsSection";
import ProgramOutlineSection from "./components/ProgramOutlineSection";
import FunctionariesSection from "./components/FunctionariesSection";
import CounsellorsSection from "./components/CounsellorsSection";
import GallerySection from "./components/GallerySection";
import MerryMakingSection from "./components/MerryMakingSection";
import ThankYouSection from "./components/ThankYouSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <LoveStorySection />
      <WeddingDetailsSection />
      <ProgramOutlineSection />
      <FunctionariesSection />
      <CounsellorsSection />
      <GallerySection />
      <MerryMakingSection />
      <ThankYouSection />
      <Footer />
    </main>
  );
}
