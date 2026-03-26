import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import DrilldownPage from "./pages/DrilldownPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#f5f5f5]">
        <Header />
        <main className="max-w-5xl mx-auto">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/skill/:categoryId" element={<DrilldownPage />} />
            <Route
              path="/skill/:categoryId/sub/:subSkillId"
              element={<DetailPage />}
            />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
