import { useState, useRef, useEffect } from "react";
import { mockData } from "../data/mockData";

interface QuestSelectorProps {
  selectedQuestId: string;
  onQuestChange: (questId: string) => void;
}

const QuestSelector = ({ selectedQuestId, onQuestChange }: QuestSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedQuest = mockData.quests.find(
    (q) => q.id === selectedQuestId
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="px-4 sm:px-8 py-4 relative" ref={dropdownRef}>
      <button
        className="text-indigo-500 hover:text-indigo-600 font-medium text-base flex items-center gap-1 transition-colors min-h-[44px]"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedQuest?.name}
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
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
      {isOpen && (
        <div className="absolute top-full left-4 sm:left-8 right-4 sm:right-auto mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-50 sm:min-w-[340px]">
          {mockData.quests.map((quest) => (
            <button
              key={quest.id}
              className={`w-full text-left px-4 py-3 sm:py-2 text-base hover:bg-gray-50 flex items-center gap-2 ${
                quest.id === selectedQuestId
                  ? "text-gray-900 font-medium"
                  : "text-gray-600"
              }`}
              onClick={() => {
                onQuestChange(quest.id);
                setIsOpen(false);
              }}
            >
              {quest.id === selectedQuestId && (
                <svg className="w-4 h-4 text-indigo-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              )}
              {quest.id !== selectedQuestId && <span className="w-4 flex-shrink-0" />}
              {quest.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default QuestSelector;
