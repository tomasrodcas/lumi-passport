import type { Certification } from "../data/mockData";

interface CertificationsSectionProps {
  certifications: Certification[];
  onCertClick: (cert: Certification) => void;
}

const CertificationsSection = ({ certifications, onCertClick }: CertificationsSectionProps) => {
  return (
    <section className="px-4 sm:px-8 py-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Certifications & Awards
      </h2>
      {certifications.length === 0 ? (
        <p className="text-sm text-gray-400">No certifications for this quest.</p>
      ) : (
        <div className="flex gap-4 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden w-52 sm:w-64 flex-shrink-0 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => onCertClick(cert)}
            >
              <img
                src="/images/certificate-thumbnail.png"
                alt={cert.title}
                className="w-full h-40 object-cover"
              />
              <div className="p-3">
                <p className="text-sm font-semibold text-gray-800 truncate">{cert.title}</p>
                <p className="text-xs text-gray-500">{cert.recipientName}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;
