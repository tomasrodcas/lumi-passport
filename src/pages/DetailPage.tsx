import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockData } from "../data/mockData";
import type { EvidenceItem } from "../data/mockData";
import { useQuest } from "../context/QuestContext";
import EvidenceModal from "../components/EvidenceModal";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceDot,
} from "recharts";

const evidenceColorMap: Record<EvidenceItem["color"], { bg: string; fg: string }> = {
  green: { bg: "#d1fae5", fg: "#059669" },
  purple: { bg: "#ede9fe", fg: "#8b5cf6" },
  blue: { bg: "#dbeafe", fg: "#3b82f6" },
};

const evidenceIcon = (type: EvidenceItem["type"]) => {
  switch (type) {
    case "video":
      return "🎥";
    case "image":
      return "🖼️";
    default:
      return "📋";
  }
};

const EvidenceCard = ({
  item,
  onClick,
  keyPrefix,
}: {
  item: EvidenceItem;
  onClick: () => void;
  keyPrefix: string;
}) => {
  const colors = evidenceColorMap[item.color];
  return (
    <div
      key={`${keyPrefix}-${item.id}`}
      className="w-32 h-24 rounded-lg shadow-sm overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
      style={{ backgroundColor: colors.bg }}
      onClick={onClick}
    >
      <div
        className="h-5 flex items-center px-2"
        style={{ backgroundColor: colors.fg }}
      >
        <span className="text-white text-[9px] font-medium truncate">
          {item.title}
        </span>
      </div>
      <div className="flex flex-col items-center justify-center h-[calc(100%-1.25rem)] p-1">
        <span className="text-2xl mb-0.5">{evidenceIcon(item.type)}</span>
        <span
          className="text-[8px] font-medium"
          style={{ color: colors.fg }}
        >
          {item.type === "video" ? "Video" : "Document"}
        </span>
      </div>
    </div>
  );
};

const DetailPage = () => {
  const { categoryId, subSkillId } = useParams<{
    categoryId: string;
    subSkillId: string;
  }>();
  const navigate = useNavigate();
  const { selectedQuestId } = useQuest();
  const [selectedEvidence, setSelectedEvidence] = useState<string | null>(null);
  const [currentSessionIndex, setCurrentSessionIndex] = useState<number | null>(null);

  const questData = mockData.questData[selectedQuestId];
  const category = questData.skillCategories.find((c) => c.id === categoryId);
  const subSkill = category?.subSkills.find((s) => s.id === subSkillId);

  if (!category || !subSkill) {
    return <div className="p-8">Skill not found</div>;
  }

  const sessions = subSkill.sessions;
  // Default to last session
  const activeIndex = currentSessionIndex ?? sessions.length - 1;
  const activeSession = sessions[activeIndex];

  const chartData = sessions.map((s) => ({
    session: s.session,
    score: s.score,
  }));

  const handleNext = () => {
    const nextIndex = (activeIndex + 1) % sessions.length;
    setCurrentSessionIndex(nextIndex);
  };

  return (
    <div>
      <div className="p-8">
        <div className="flex justify-end mb-4">
          <button
            onClick={() => navigate(`/skill/${categoryId}`)}
            className="flex items-center gap-1 text-gray-600 hover:text-gray-800 text-sm"
          >
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
                d="M9 5l7 7-7 7"
              />
            </svg>
            Back
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Left column */}
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-xl shadow-sm p-6 flex items-center justify-between">
              <span className="text-gray-700 font-medium">{subSkill.name}</span>
              <span className="text-3xl font-bold text-gray-800">
                {subSkill.score}
              </span>
            </div>

            <div className="bg-gray-100 rounded-xl p-6">
              <h4 className="font-semibold text-gray-700 text-sm mb-1">
                Skill Description
              </h4>
              <p className="text-xs text-gray-500">{subSkill.description}</p>
            </div>

            <div>
              <h4 className="font-medium text-gray-700 text-sm mb-3">
                Supporting Evidence:
              </h4>
              <div className="flex flex-wrap gap-3">
                {subSkill.evidence.map((item) => (
                  <EvidenceCard
                    key={item.id}
                    item={item}
                    onClick={() => setSelectedEvidence(item.title)}
                    keyPrefix="main"
                  />
                ))}
              </div>
            </div>

            <div className="mt-2">
              <h4 className="font-medium text-gray-400 text-sm mb-3">
                (Test only)Supporting Evidence:
              </h4>
              <div className="flex flex-wrap gap-3">
                {subSkill.evidence.map((item) => (
                  <EvidenceCard
                    key={`test-${item.id}`}
                    item={item}
                    onClick={() => setSelectedEvidence(item.title)}
                    keyPrefix="test"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h4 className="font-semibold text-gray-700 text-sm mb-4">
                Skill Progress
              </h4>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-teal-400" />
                <span className="text-xs text-gray-500">{subSkill.name}</span>
              </div>
              <ResponsiveContainer width="100%" height={160}>
                <LineChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis
                    dataKey="session"
                    tick={{ fontSize: 11 }}
                    label={{
                      value: "Session Number",
                      position: "bottom",
                      fontSize: 11,
                    }}
                  />
                  <YAxis domain={[0, 5]} tick={{ fontSize: 11 }} />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="#2dd4a8"
                    strokeWidth={2}
                    dot={{ fill: "#2dd4a8", r: 3 }}
                  />
                  <ReferenceDot
                    x={activeSession.session}
                    y={activeSession.score}
                    r={6}
                    fill="#2dd4a8"
                    stroke="#fff"
                    strokeWidth={2}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-indigo-500 text-xs font-semibold">
                  Session: {activeSession.session}
                </span>
                <span className="text-indigo-500 text-xs font-semibold">
                  Score: {activeSession.score}
                </span>
              </div>
              <div className="mb-3">
                <h5 className="font-semibold text-gray-700 text-sm mb-1">
                  What went well:
                </h5>
                <p className="text-xs text-gray-500">
                  {activeSession.whatWentWell}
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-700 text-sm mb-1">
                  Areas for improvement:
                </h5>
                <p className="text-xs text-gray-500">
                  {activeSession.areasForImprovement}
                </p>
              </div>
              <div className="mt-4 flex justify-end">
                <button
                  onClick={handleNext}
                  className="text-teal-500 text-xs font-medium flex items-center gap-1 hover:text-teal-600"
                >
                  Next
                  <svg
                    className="w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedEvidence && (
        <EvidenceModal
          title={selectedEvidence}
          onClose={() => setSelectedEvidence(null)}
        />
      )}
    </div>
  );
};

export default DetailPage;
