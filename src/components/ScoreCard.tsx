import { useNavigate } from "react-router-dom";
import ScoreRing from "./ScoreRing";
import type { SkillCategory } from "../data/mockData";

interface ScoreCardProps {
  category: SkillCategory;
}

const ScoreCard = ({ category }: ScoreCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-xl shadow-sm p-8 cursor-pointer hover:shadow-md transition-shadow flex flex-col items-center"
      onClick={() => navigate(`/skill/${category.id}`)}
    >
      <h3 className="text-sm font-medium text-gray-600 mb-4">
        {category.name}
      </h3>
      <ScoreRing score={category.score} maxScore={category.maxScore} />
    </div>
  );
};

export default ScoreCard;
