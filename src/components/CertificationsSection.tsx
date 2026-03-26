import type { Certification } from "../data/mockData";

interface CertificationsSectionProps {
  certifications: Certification[];
  onCertClick: (cert: Certification) => void;
}

const CertificationsSection = ({ certifications, onCertClick }: CertificationsSectionProps) => {
  return (
    <section className="px-8 py-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Certifications & Awards
      </h2>
      {certifications.length === 0 ? (
        <p className="text-sm text-gray-400">No certifications for this quest.</p>
      ) : (
        <div className="flex gap-4">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden w-64 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => onCertClick(cert)}
            >
              <div className="bg-gradient-to-br from-blue-50 to-teal-50 p-4 relative">
                <div className="border-2 border-gray-200 rounded-lg p-4 bg-white">
                  <div className="text-[10px] text-gray-400 mb-1 flex items-center gap-1">
                    <span className="font-bold text-[#1a1a2e]">Lumi</span>
                    <span className="text-teal-400 text-[6px]">●</span>
                  </div>
                  <div className="bg-teal-500 text-white text-[10px] px-2 py-1 rounded mb-2">
                    {cert.title}
                  </div>
                  <div className="text-xs text-gray-600">
                    for
                  </div>
                  <div className="text-sm font-semibold text-gray-800">
                    {cert.recipientName}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;
