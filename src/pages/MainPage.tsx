import { useState } from "react";
import { mockData } from "../data/mockData";
import type { Certification } from "../data/mockData";
import { useQuest } from "../context/QuestContext";
import QuestSelector from "../components/QuestSelector";
import ScoreCard from "../components/ScoreCard";
import CertificationsSection from "../components/CertificationsSection";
import InnovationsSection from "../components/InnovationsSection";
import CertificateModal from "../components/CertificateModal";

const MainPage = () => {
  const { selectedQuestId, setSelectedQuestId } = useQuest();
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  const questData = mockData.questData[selectedQuestId];

  return (
    <div className="pb-8">
      <QuestSelector
        selectedQuestId={selectedQuestId}
        onQuestChange={setSelectedQuestId}
      />
      <div className="px-4 sm:px-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8">
        {questData.skillCategories.map((category) => (
          <ScoreCard key={category.id} category={category} />
        ))}
      </div>
      <CertificationsSection
        certifications={questData.certifications}
        onCertClick={setSelectedCert}
      />
      <InnovationsSection innovations={questData.innovations} />

      {selectedCert && (
        <CertificateModal
          certification={selectedCert}
          onClose={() => setSelectedCert(null)}
        />
      )}
    </div>
  );
};

export default MainPage;
