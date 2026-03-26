import { useParams, useNavigate } from "react-router-dom";
import { mockData } from "../data/mockData";
import { useQuest } from "../context/QuestContext";
import ScoreRing from "../components/ScoreRing";

const DrilldownPage = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const navigate = useNavigate();
  const { selectedQuestId } = useQuest();

  const questData = mockData.questData[selectedQuestId];
  const category = questData.skillCategories.find((c) => c.id === categoryId);

  if (!category) {
    return <div className="p-8">Category not found</div>;
  }

  return (
    <div className="p-4 sm:p-8">
      <div className="flex justify-end mb-4">
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-1 text-gray-600 hover:text-gray-800 text-sm min-h-[44px] min-w-[44px] justify-center"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
          Back
        </button>
      </div>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
        <div className="bg-white rounded-xl shadow-sm p-6 sm:p-8 flex flex-col items-center">
          <h3 className="text-sm font-medium text-gray-600 mb-4">
            {category.name}
          </h3>
          <ScoreRing score={category.score} maxScore={category.maxScore} />
        </div>
        <div className="flex-1 flex flex-col gap-3">
          {category.subSkills.map((subSkill) => (
            <div
              key={subSkill.id}
              className="bg-white rounded-xl shadow-sm px-6 py-4 flex items-center justify-between cursor-pointer hover:shadow-md transition-shadow"
              onClick={() =>
                navigate(`/skill/${categoryId}/sub/${subSkill.id}`)
              }
            >
              <span className="text-gray-700 font-medium text-sm">
                {subSkill.name}
              </span>
              <span className="text-2xl font-bold text-gray-800">
                {subSkill.score}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrilldownPage;
