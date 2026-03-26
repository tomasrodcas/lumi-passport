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
      <div className="relative h-64 overflow-hidden">
        <img
          src="/images/innovation-mountain.jpg"
          alt={innovation.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent" />
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
