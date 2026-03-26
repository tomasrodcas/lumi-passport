import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { mockData } from "../data/mockData";

const LumiInfoBlock = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-[#1a1a2e] text-white px-8 text-xs leading-relaxed">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-end py-2 text-gray-400 hover:text-white transition-colors"
        aria-label={expanded ? "Collapse info" : "Expand info"}
      >
        {expanded ? (
          <ChevronUp className="w-4 h-4" />
        ) : (
          <ChevronDown className="w-4 h-4" />
        )}
      </button>
      {expanded && (
        <div className="pb-4">
          {mockData.lumiInfoText.map((text, i) => (
            <p
              key={i}
              className={i < mockData.lumiInfoText.length - 1 ? "mb-2" : ""}
            >
              {text}
            </p>
          ))}
          <p className="mt-2 italic text-gray-300">
            Learn more at <span className="underline">www.lumi.network</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default LumiInfoBlock;
