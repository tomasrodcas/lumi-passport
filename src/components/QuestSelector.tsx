import { mockData } from "../data/mockData";

const QuestSelector = () => {
  const selectedQuest = mockData.quests.find(
    (q) => q.id === mockData.selectedQuestId
  );

  return (
    <div className="px-8 py-4">
      <button className="text-teal-500 hover:text-teal-600 font-medium text-sm flex items-center gap-1 transition-colors">
        {selectedQuest?.name}
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
  );
};

export default QuestSelector;
