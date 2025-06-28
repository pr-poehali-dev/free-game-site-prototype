import Hero from "@/components/Hero";
import FeaturedGames from "@/components/FeaturedGames";
import GameCategories from "@/components/GameCategories";
import CasinoSection from "@/components/CasinoSection";
import LatestGames from "@/components/LatestGames";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedGames />
      <GameCategories />
      <CasinoSection />
      <LatestGames />
    </div>
  );
};

export default Index;
