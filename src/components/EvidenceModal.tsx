interface EvidenceModalProps {
  onClose: () => void;
  title: string;
}

const EvidenceModal = ({ onClose, title }: EvidenceModalProps) => {
  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-xl shadow-2xl max-w-2xl w-full mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl font-bold w-8 h-8 flex items-center justify-center"
        >
          &times;
        </button>
        <div className="p-1">
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="bg-teal-600 text-white text-sm font-semibold px-4 py-2">
              {title}
            </div>
            <div className="p-8 flex items-center justify-center min-h-[300px]">
              <div className="text-center text-gray-400">
                <svg
                  className="w-24 h-24 mx-auto mb-3"
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
                <p className="text-sm">Document preview placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvidenceModal;
