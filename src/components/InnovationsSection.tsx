import type { Innovation } from "../data/mockData";

interface InnovationsSectionProps {
  innovations: Innovation[];
}

const InnovationsSection = ({ innovations }: InnovationsSectionProps) => {
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
              className="bg-white rounded-xl shadow-sm overflow-hidden flex w-96"
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
              <div className="w-32 bg-gradient-to-br from-blue-50 to-gray-100 flex items-center justify-center">
                <div className="text-gray-300">
                  <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default InnovationsSection;
