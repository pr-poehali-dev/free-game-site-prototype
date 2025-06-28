import Icon from "@/components/ui/icon";

interface GameCardProps {
  title: string;
  category: string;
  image: string;
  type: "browser" | "download";
  rating: number;
  players: string;
}

const GameCard = ({
  title,
  category,
  image,
  type,
  rating,
  players,
}: GameCardProps) => {
  return (
    <div className="card-glow rounded-xl p-6 hover-neon group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-2 right-2">
          <span
            className={`px-2 py-1 rounded text-xs font-semibold ${
              type === "browser"
                ? "bg-neon-green text-white"
                : "bg-neon-purple text-white"
            }`}
          >
            {type === "browser" ? "Браузер" : "Скачать"}
          </span>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-white group-hover:text-neon-blue transition-colors">
          {title}
        </h3>

        <p className="text-sm text-gray-400">{category}</p>

        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1">
            <Icon
              name="Star"
              size={16}
              className="text-neon-green fill-current"
            />
            <span className="text-sm text-gray-300">{rating}</span>
          </div>

          <div className="flex items-center gap-1 text-sm text-gray-400">
            <Icon name="Users" size={16} />
            <span>{players}</span>
          </div>
        </div>

        <button className="w-full mt-4 py-2 bg-neon-blue text-white rounded-lg hover:bg-blue-600 transition-colors flex items-center justify-center gap-2">
          <Icon name={type === "browser" ? "Play" : "Download"} size={16} />
          {type === "browser" ? "Играть" : "Скачать"}
        </button>
      </div>
    </div>
  );
};

export default GameCard;
