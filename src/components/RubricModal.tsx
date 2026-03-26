import { mockData } from "../data/mockData";

interface RubricModalProps {
  onClose: () => void;
}

const RubricModal = ({ onClose }: RubricModalProps) => {
  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-lg w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Tab bar */}
        <div className="px-6 pt-4">
          <div className="inline-block border-b-2 border-indigo-500 pb-2">
            <span className="text-sm font-medium text-indigo-600">Overview</span>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-5">
          <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2 mb-4">
            <span className="text-xl">📋</span>
            What the Scores Mean
          </h2>

          <div className="mb-3">
            <div className="flex gap-4 text-xs font-bold text-gray-700 border-b border-gray-200 pb-2 mb-1">
              <span className="w-12">Score</span>
              <span>General Meaning (Applies Across All Skills)</span>
            </div>
          </div>

          <div className="space-y-3">
            {mockData.rubric.map((entry) => (
              <div key={entry.score} className="flex gap-4 items-start">
                <span className="text-lg font-bold text-gray-800 w-12 flex-shrink-0 text-center">
                  {entry.score}
                </span>
                <p className="text-sm text-gray-600 leading-relaxed pt-0.5">
                  {entry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RubricModal;
