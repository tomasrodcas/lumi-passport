import { mockData } from "../data/mockData";
import QuestSelector from "../components/QuestSelector";
import ScoreCard from "../components/ScoreCard";
import CertificationsSection from "../components/CertificationsSection";
import InnovationsSection from "../components/InnovationsSection";

const MainPage = () => {
  return (
    <div className="pb-8">
      <QuestSelector />
      <div className="px-8 grid grid-cols-2 gap-6 mb-8">
        {mockData.skillCategories.map((category) => (
          <ScoreCard key={category.id} category={category} />
        ))}
      </div>
      <CertificationsSection />
      <InnovationsSection />
    </div>
  );
};

export default MainPage;
