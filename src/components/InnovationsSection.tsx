import { useNavigate } from "react-router-dom";
import type { Innovation } from "../data/mockData";

interface InnovationsSectionProps {
  innovations: Innovation[];
}

const InnovationsSection = ({ innovations }: InnovationsSectionProps) => {
  const navigate = useNavigate();

  return (
    <section className="px-8 py-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4 italic">
        Innovations
      </h2>
      {innovations.length === 0 ? (
        <p className="text-sm text-gray-400">No innovations for this quest.</p>
      ) : (
        <div className="flex gap-4">
          {innovations.map((innovation) => (
            <div
              key={innovation.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden flex w-96 cursor-pointer hover:shadow-md transition-shadow"
              onClick={() => navigate(`/innovation/${innovation.id}`)}
            >
              <div className="p-4 flex-1">
                <h3 className="font-semibold text-gray-800 text-sm">
                  {innovation.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {innovation.completedDate}
                </p>
                <div className="mt-2 flex flex-col gap-1">
                  {innovation.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-teal-500 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="w-32 overflow-hidden">
                <img
                  src="/images/innovation-mountain.jpg"
                  alt={innovation.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default InnovationsSection;
