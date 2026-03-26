import { Share2, Settings } from "lucide-react";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { mockData } from "../data/mockData";

interface HeaderProps {
  onInfoClick: () => void;
}

const Header = ({ onInfoClick }: HeaderProps) => {
  return (
    <header className="bg-[#1a1a2e] text-white px-4 sm:px-8 py-4 sm:py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-6 min-w-0">
          <div className="text-2xl sm:text-3xl font-bold tracking-tight flex-shrink-0">
            <span className="text-white">Lumi</span>
            <span className="text-indigo-400 text-xs align-top ml-0.5">●</span>
          </div>
          <div className="min-w-0">
            <h1 className="text-base sm:text-xl font-semibold flex items-center gap-2">
              <span className="truncate">{mockData.title}</span>
              <button
                className="text-gray-400 hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center flex-shrink-0"
                onClick={onInfoClick}
                title="What the Scores Mean"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="10" strokeWidth={2} />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 16v-4m0-4h.01"
                  />
                </svg>
              </button>
            </h1>
            <p className="text-gray-400 text-xs max-w-2xl leading-relaxed mt-1 hidden sm:block">
              {mockData.description}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1 sm:gap-3 text-gray-400 flex-shrink-0">
          <a
            href="https://www.linkedin.com/company/lumi-network"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            title="LinkedIn"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/lumi.network"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            title="Instagram"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
          <button
            className="hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            title="Share"
          >
            <Share2 className="w-5 h-5" />
          </button>
          <button
            className="hover:text-white transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
            onClick={onInfoClick}
            title="Settings"
          >
            <Settings className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
