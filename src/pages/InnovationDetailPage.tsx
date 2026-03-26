import { useParams, useNavigate } from "react-router-dom";
import { mockData } from "../data/mockData";
import { useQuest } from "../context/QuestContext";

const InnovationDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { selectedQuestId } = useQuest();

  const questData = mockData.questData[selectedQuestId];
  const innovation = questData.innovations.find((i) => i.id === id);

  if (!innovation) {
    return <div className="p-8">Innovation not found</div>;
  }

  return (
    <div>
      {/* Hero banner with mountain image placeholder */}
      <div className="relative h-64 bg-gradient-to-r from-gray-200 to-gray-300 overflow-hidden">
        {/* Mountain illustration placeholder */}
        <div className="absolute inset-0 flex items-end">
          <svg viewBox="0 0 1200 300" className="w-full" preserveAspectRatio="xMidYMax slice">
            <defs>
              <linearGradient id="mountain1" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#e5e7eb" />
                <stop offset="100%" stopColor="#d1d5db" />
              </linearGradient>
              <linearGradient id="mountain2" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#f3f4f6" />
                <stop offset="100%" stopColor="#e5e7eb" />
              </linearGradient>
            </defs>
            <polygon points="0,300 200,80 400,200 500,100 700,180 900,50 1100,150 1200,120 1200,300" fill="url(#mountain1)" />
            <polygon points="0,300 100,180 300,120 500,200 600,140 800,190 1000,90 1200,170 1200,300" fill="url(#mountain2)" opacity="0.7" />
            {/* Snow caps */}
            <polygon points="880,50 900,50 920,70 880,70" fill="white" opacity="0.8" />
            <polygon points="490,100 510,100 520,115 480,115" fill="white" opacity="0.8" />
          </svg>
        </div>
        {/* Text overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <p className="text-xs text-gray-600 mb-1 font-medium tracking-wider uppercase">
            {innovation.sprintTitle || "Sprint Innovation"}
          </p>
          <h1 className="text-2xl font-bold text-gray-800">
            {innovation.subtitle || innovation.tags[0]}
          </h1>
        </div>
        {/* Back button */}
        <div className="absolute top-4 right-4">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-1 text-gray-600 hover:text-gray-800 text-sm bg-white/80 rounded px-3 py-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            Back
          </button>
        </div>
      </div>

      {/* Name heading */}
      <div className="px-8 py-6">
        <h2 className="text-xl font-bold text-gray-800">
          Name: {innovation.title}
        </h2>
      </div>

      {/* Problem & Solution cards */}
      <div className="px-8 grid grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-bold text-gray-800 mb-2">The Problem</h3>
          <p className="text-gray-600 text-sm">{innovation.problem || "LLM"}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="font-bold text-gray-800 mb-2">The Solution</h3>
          <p className="text-gray-600 text-sm">{innovation.solution || "SLM"}</p>
        </div>
      </div>

      {/* Video embed placeholder */}
      <div className="px-8 pb-8">
        <div className="bg-gray-700 rounded-xl h-64 flex items-center justify-center">
          <div className="text-center text-gray-400">
            <div className="w-12 h-12 rounded-full border-2 border-gray-400 flex items-center justify-center mx-auto mb-2">
              <span className="text-2xl font-bold">!</span>
            </div>
            <p className="text-sm">This video is unavailable</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovationDetailPage;
