import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import { mockData } from "../data/mockData";

interface QuestContextValue {
  selectedQuestId: string;
  setSelectedQuestId: (id: string) => void;
}

const QuestContext = createContext<QuestContextValue>({
  selectedQuestId: mockData.selectedQuestId,
  setSelectedQuestId: () => {},
});

export const QuestProvider = ({ children }: { children: ReactNode }) => {
  const [selectedQuestId, setSelectedQuestId] = useState(mockData.selectedQuestId);
  return (
    <QuestContext.Provider value={{ selectedQuestId, setSelectedQuestId }}>
      {children}
    </QuestContext.Provider>
  );
};

export const useQuest = () => useContext(QuestContext);
