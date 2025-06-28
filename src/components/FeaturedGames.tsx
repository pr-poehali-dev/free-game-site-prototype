import GameCard from "./GameCard";

const FeaturedGames = () => {
  const games = [
    {
      title: "Cyber Runner 2077",
      category: "Экшен",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      type: "browser" as const,
      rating: 4.8,
      players: "125K",
    },
    {
      title: "Space Odyssey",
      category: "Стратегия",
      image:
        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
      type: "download" as const,
      rating: 4.9,
      players: "89K",
    },
    {
      title: "Neon Racer",
      category: "Гонки",
      image:
        "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop",
      type: "browser" as const,
      rating: 4.6,
      players: "203K",
    },
    {
      title: "Mystic Legends",
      category: "RPG",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      type: "download" as const,
      rating: 4.7,
      players: "156K",
    },
    {
      title: "Pixel Warriors",
      category: "Аркада",
      image:
        "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?w=400&h=300&fit=crop",
      type: "browser" as const,
      rating: 4.5,
      players: "178K",
    },
    {
      title: "Dark Realm",
      category: "Хоррор",
      image:
        "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&h=300&fit=crop",
      type: "download" as const,
      rating: 4.8,
      players: "92K",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Популярные <span className="text-neon-blue">Игры</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Самые горячие игры сезона — выбирай между браузерными хитами и
            премиальными релизами
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div
              key={index}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <GameCard {...game} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
