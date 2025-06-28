import Icon from "@/components/ui/icon";

const CasinoSection = () => {
  const casinoGames = [
    {
      name: "Слоты",
      icon: "Cherry",
      description: "Игровые автоматы",
      color: "neon-pink",
      players: "1.2K",
      jackpot: "🎰 777",
    },
    {
      name: "Покер",
      icon: "Spade",
      description: "Техасский Холдем",
      color: "neon-green",
      players: "856",
      jackpot: "♠️ AA",
    },
    {
      name: "Блэкджек",
      icon: "Diamond",
      description: "21 очко",
      color: "neon-blue",
      players: "634",
      jackpot: "♦️ 21",
    },
    {
      name: "Рулетка",
      icon: "Circle",
      description: "Европейская рулетка",
      color: "neon-purple",
      players: "423",
      jackpot: "🎯 36",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gaming-darker">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🎰 Казино <span className="text-neon-pink">Онлайн</span>
          </h2>
          <p className="text-xl text-gray-400 mb-6">
            Бесплатные игры казино для развлечения
          </p>
          <div className="inline-block px-6 py-2 bg-neon-green bg-opacity-20 rounded-full">
            <span className="text-neon-green font-semibold">
              🎁 Все игры бесплатны
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {casinoGames.map((game, index) => (
            <div
              key={index}
              className="card-glow rounded-xl p-6 text-center hover-neon group cursor-pointer animate-slide-up bg-gaming-dark"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-20 h-20 mx-auto mb-4 rounded-full bg-${game.color} bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-all animate-pulse-neon`}
              >
                <Icon
                  name={game.icon as any}
                  size={36}
                  className={`text-${game.color}`}
                />
              </div>

              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-pink transition-colors">
                {game.name}
              </h3>

              <p className="text-gray-400 text-sm mb-4">{game.description}</p>

              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-500 text-sm">👥 {game.players}</span>
                <span className={`text-${game.color} font-bold`}>
                  {game.jackpot}
                </span>
              </div>

              <button
                className={`w-full py-3 px-4 rounded-lg bg-${game.color} bg-opacity-20 text-${game.color} font-semibold hover:bg-opacity-30 transition-all border border-${game.color} border-opacity-30`}
              >
                Играть бесплатно
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-block p-6 bg-gradient-to-r from-neon-purple to-neon-pink bg-opacity-10 rounded-xl border border-neon-purple border-opacity-30">
            <h3 className="text-xl font-bold text-white mb-2">
              🎊 Ежедневные бонусы
            </h3>
            <p className="text-gray-400 mb-4">
              Получай бесплатные фишки каждый день
            </p>
            <button className="px-8 py-3 bg-gradient-to-r from-neon-purple to-neon-pink text-white font-bold rounded-lg hover:scale-105 transition-transform">
              Забрать бонус
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasinoSection;
