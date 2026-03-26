import type { Certification } from "../data/mockData";

interface CertificateModalProps {
  certification: Certification;
  onClose: () => void;
}

const CertificateModal = ({ certification, onClose }: CertificateModalProps) => {
  const { detail } = certification;

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg max-w-xl w-full mx-4 relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Certificate content */}
        <div className="p-5 sm:p-10 relative overflow-hidden">
          {/* Decorative corner triangles */}
          <div className="absolute top-0 right-0 w-32 h-32">
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[128px] border-t-[#2d2d6b] border-l-[128px] border-l-transparent" />
            <div className="absolute top-2 right-2 w-0 h-0 border-t-[100px] border-t-[#4a4a8a] border-l-[100px] border-l-transparent opacity-60" />
          </div>
          <div className="absolute bottom-0 left-0 w-24 h-24">
            <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[96px] border-b-[#2dd4a8]/20 border-r-[96px] border-r-transparent" />
          </div>

          {/* Logos */}
          <div className="flex items-center gap-3 mb-6">
            <div className="text-xs font-bold text-gray-700 tracking-wide uppercase leading-tight">
              <div>Singapore</div>
              <div>Biodesign</div>
            </div>
            <div className="h-8 w-px bg-gray-300" />
            <div className="text-xl font-bold text-[#1a1a2e]">
              Lumi
              <span className="text-indigo-400 text-[6px] align-top ml-0.5">●</span>
            </div>
            <span className="text-[10px] text-gray-400 italic -ml-1">Igniting Futures</span>
          </div>

          {/* Certificate title */}
          <h2 className="text-xl sm:text-3xl font-serif font-bold text-gray-800 mb-2">
            {detail.certTitle}
          </h2>
          <p className="text-sm text-gray-500 mb-4">This certificate is presented to</p>

          {/* Recipient */}
          <h3 className="text-lg sm:text-2xl font-bold text-gray-800 mb-2 underline decoration-1 underline-offset-4">
            {certification.recipientName}
          </h3>
          <p className="text-xs text-gray-500 italic mb-8">
            for completing all requirements for {detail.courseName}
          </p>

          {/* Signatories and rocket */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div className="flex gap-4 sm:gap-8 flex-wrap">
              {detail.signatories.map((sig) => (
                <div key={sig.name} className="text-center">
                  <div className="text-lg italic text-gray-400 mb-1 font-serif">~</div>
                  <div className="text-xs font-bold text-gray-700">{sig.name}</div>
                  <div className="text-[10px] text-gray-400 max-w-[140px] leading-tight">
                    {sig.role}
                  </div>
                </div>
              ))}
            </div>
            {/* Rocket illustration */}
            <div className="text-right">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="text-indigo-400 opacity-40">
                <path d="M32 8 L40 24 L56 32 L40 40 L32 56 L24 40 L8 32 L24 24 Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <circle cx="32" cy="32" r="4" stroke="currentColor" strokeWidth="1.5" />
                <path d="M20 44 L8 56" stroke="currentColor" strokeWidth="1.5" />
                <path d="M44 44 L56 56" stroke="currentColor" strokeWidth="1.5" />
                <path d="M32 48 L32 60" stroke="currentColor" strokeWidth="1.5" />
              </svg>
              <div className="text-[9px] text-gray-400 mt-1">
                Certification ID: {detail.dateIssued}
              </div>
            </div>
          </div>
        </div>

        {/* Action bar */}
        <div className="flex items-center justify-between px-6 py-3 bg-gray-900 rounded-b-lg">
          <button className="text-white text-sm flex items-center gap-2 hover:text-gray-300 transition-colors">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download
          </button>
          <button
            className="text-white text-sm hover:text-gray-300 transition-colors"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateModal;
