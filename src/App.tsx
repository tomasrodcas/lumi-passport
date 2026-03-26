import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import LumiInfoBlock from "./components/LumiInfoBlock";
import RubricModal from "./components/RubricModal";
import MainPage from "./pages/MainPage";
import DrilldownPage from "./pages/DrilldownPage";
import DetailPage from "./pages/DetailPage";
import InnovationDetailPage from "./pages/InnovationDetailPage";
import { QuestProvider } from "./context/QuestContext";

function App() {
  const [showRubric, setShowRubric] = useState(false);

  return (
    <BrowserRouter>
      <QuestProvider>
        <div className="min-h-screen bg-[#f5f5f5]">
          <Header onInfoClick={() => setShowRubric(true)} />
          <LumiInfoBlock />
          <main className="max-w-5xl mx-auto">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/skill/:categoryId" element={<DrilldownPage />} />
              <Route
                path="/skill/:categoryId/sub/:subSkillId"
                element={<DetailPage />}
              />
              <Route path="/innovation/:id" element={<InnovationDetailPage />} />
            </Routes>
          </main>

          {showRubric && <RubricModal onClose={() => setShowRubric(false)} />}
        </div>
      </QuestProvider>
    </BrowserRouter>
  );
}

export default App;
