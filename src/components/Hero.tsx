import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gaming-gradient opacity-20"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-neon-blue opacity-10 animate-pulse-neon"></div>
        <div
          className="absolute bottom-40 right-20 w-24 h-24 rounded-full bg-neon-purple opacity-10 animate-pulse-neon"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-10 w-16 h-16 rounded-full bg-neon-green opacity-10 animate-pulse-neon"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-slide-up">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-text">
            <span className="gaming-gradient bg-clip-text text-transparent">
              GAME
            </span>
            <br />
            <span className="text-white">PORTAL</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Откройте мир невероятных игр — от браузерных хитов до премиальных
            релизов
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-neon-blue text-white font-semibold rounded-lg neon-glow hover-neon transition-all duration-300 flex items-center gap-2">
              <Icon name="Play" size={20} />
              Играть сейчас
            </button>

            <button className="px-8 py-4 border border-neon-purple text-neon-purple font-semibold rounded-lg hover:bg-neon-purple hover:text-white transition-all duration-300 flex items-center gap-2">
              <Icon name="Download" size={20} />
              Скачать игры
            </button>
          </div>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-blue">1,000+</div>
            <div className="text-gray-400">Игр</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-purple">50K+</div>
            <div className="text-gray-400">Игроков</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-green">24/7</div>
            <div className="text-gray-400">Онлайн</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-pink">Free</div>
            <div className="text-gray-400">Браузерные</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
