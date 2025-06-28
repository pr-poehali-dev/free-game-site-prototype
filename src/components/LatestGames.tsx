import Icon from "@/components/ui/icon";

const LatestGames = () => {
  const latestGames = [
    {
      title: "Quantum Shift",
      type: "Новинка",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=200&fit=crop",
      genre: "Sci-Fi",
      platform: "browser",
    },
    {
      title: "Dragon's Legacy",
      type: "Обновление",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=200&fit=crop",
      genre: "Fantasy RPG",
      platform: "download",
    },
    {
      title: "Neon Streets",
      type: "Новинка",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop",
      genre: "Cyberpunk",
      platform: "browser",
    },
    {
      title: "Galactic Empire",
      type: "Бета",
      image:
        "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=200&fit=crop",
      genre: "Strategy",
      platform: "download",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Последние <span className="text-neon-green">Добавления</span>
          </h2>
          <p className="text-xl text-gray-400">
            Свежие релизы и обновления каждую неделю
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {latestGames.map((game, index) => (
            <div
              key={index}
              className="card-glow rounded-xl overflow-hidden hover-neon group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-2 left-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      game.type === "Новинка"
                        ? "bg-neon-green text-white"
                        : game.type === "Обновление"
                          ? "bg-neon-blue text-white"
                          : "bg-neon-pink text-white"
                    }`}
                  >
                    {game.type}
                  </span>
                </div>
                <div className="absolute top-2 right-2">
                  <Icon
                    name={game.platform === "browser" ? "Globe" : "Download"}
                    size={16}
                    className="text-white bg-black bg-opacity-50 rounded p-1 w-6 h-6"
                  />
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-white mb-1 group-hover:text-neon-blue transition-colors">
                  {game.title}
                </h3>
                <p className="text-sm text-gray-400">{game.genre}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 border border-neon-blue text-neon-blue font-semibold rounded-lg hover:bg-neon-blue hover:text-white transition-all duration-300 flex items-center gap-2 mx-auto">
            <Icon name="Plus" size={20} />
            Показать больше
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestGames;
