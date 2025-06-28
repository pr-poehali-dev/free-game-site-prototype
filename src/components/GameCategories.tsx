import Icon from "@/components/ui/icon";

const GameCategories = () => {
  const categories = [
    {
      name: "Браузерные",
      icon: "Globe",
      count: "500+",
      color: "neon-green",
      description: "Играй прямо в браузере",
    },
    {
      name: "Скачиваемые",
      icon: "Download",
      count: "300+",
      color: "neon-purple",
      description: "Премиальные игры на ПК",
    },
    {
      name: "Экшен",
      icon: "Zap",
      count: "200+",
      color: "neon-blue",
      description: "Динамичные приключения",
    },
    {
      name: "Стратегии",
      icon: "Target",
      count: "150+",
      color: "neon-pink",
      description: "Планируй и побеждай",
    },
    {
      name: "RPG",
      icon: "Sword",
      count: "120+",
      color: "neon-green",
      description: "Ролевые приключения",
    },
    {
      name: "Аркады",
      icon: "Gamepad2",
      count: "180+",
      color: "neon-blue",
      description: "Классические аркады",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Категории <span className="text-neon-purple">Игр</span>
          </h2>
          <p className="text-xl text-gray-400">
            Найди свой жанр среди сотен увлекательных игр
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="card-glow rounded-xl p-8 text-center hover-neon group cursor-pointer animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${category.color} bg-opacity-20 flex items-center justify-center group-hover:bg-opacity-30 transition-all`}
              >
                <Icon
                  name={category.icon as any}
                  size={32}
                  className={`text-${category.color}`}
                />
              </div>

              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-neon-blue transition-colors">
                {category.name}
              </h3>

              <p className="text-gray-400 text-sm mb-3">
                {category.description}
              </p>

              <div className={`text-2xl font-bold text-${category.color}`}>
                {category.count}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameCategories;
