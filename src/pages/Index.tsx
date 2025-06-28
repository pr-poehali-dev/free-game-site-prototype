import Hero from "@/components/Hero";
import FeaturedGames from "@/components/FeaturedGames";
import GameCategories from "@/components/GameCategories";
import LatestGames from "@/components/LatestGames";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedGames />
      <GameCategories />
      <LatestGames />
    </div>
  );
};

export default Index;
