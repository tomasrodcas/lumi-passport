import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { mockData } from "../data/mockData";
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
} from "recharts";

const evidenceItems = [
  { id: "evidence-1", title: "Empathy Map" },
  { id: "evidence-2", title: "Design Document" },
];

const DetailPage = () => {
  const { categoryId, subSkillId } = useParams<{
    categoryId: string;
    subSkillId: string;
  }>();
  const navigate = useNavigate();
  const { selectedQuestId } = useQuest();
  const [selectedEvidence, setSelectedEvidence] = useState<string | null>(null);

  const questData = mockData.questData[selectedQuestId];
  const category = questData.skillCategories.find((c) => c.id === categoryId);
  const subSkill = category?.subSkills.find((s) => s.id === subSkillId);

  if (!category || !subSkill) {
    return <div className="p-8">Skill not found</div>;
  }

  const chartData = [
    { session: 1, score: 1.5 },
    { session: 2, score: 2.0 },
    { session: 3, score: 1.8 },
    { session: 4, score: 2.5 },
    { session: 5, score: subSkill.score },
  ];

  const currentSubIndex = category.subSkills.findIndex(
    (s) => s.id === subSkillId
  );
  const nextSubSkill = category.subSkills[currentSubIndex + 1];

  return (
    <div>
      {/* Lumi Info Text */}
      <div className="bg-[#1a1a2e] text-white px-8 py-4 text-xs leading-relaxed">
        {mockData.lumiInfoText.map((text, i) => (
          <p key={i} className={i < mockData.lumiInfoText.length - 1 ? "mb-2" : ""}>
            {text}
          </p>
        ))}
        <p className="mt-2 italic text-gray-300">
          Learn more at <span className="underline">www.lumi.network</span>
        </p>
      </div>

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
              <div className="flex gap-3">
                {evidenceItems.map((item) => (
                  <div
                    key={item.id}
                    className="w-32 h-24 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-300 cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => setSelectedEvidence(item.title)}
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-2">
              <p className="text-xs text-gray-400">(Test only)Supporting Evidence:</p>
              <div className="flex justify-center mt-2">
                <div className="text-teal-400">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
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
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-teal-500 text-xs font-medium">
                  Session /
                </span>
                <span className="text-teal-500 text-xs font-medium">
                  Score /
                </span>
              </div>
              <div className="mb-3">
                <h5 className="font-semibold text-gray-700 text-sm mb-1">
                  What went well:
                </h5>
                <p className="text-xs text-gray-500">
                  {subSkill.sessionFeedback.whatWentWell}
                </p>
              </div>
              <div>
                <h5 className="font-semibold text-gray-700 text-sm mb-1">
                  Areas for improvement:
                </h5>
                <p className="text-xs text-gray-500">
                  {subSkill.sessionFeedback.areasForImprovement}
                </p>
              </div>
              {nextSubSkill && (
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() =>
                      navigate(`/skill/${categoryId}/sub/${nextSubSkill.id}`)
                    }
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
              )}
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
