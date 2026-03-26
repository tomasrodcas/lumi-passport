interface ScoreRingProps {
  score: number;
  maxScore: number;
  size?: number;
}

const ScoreRing = ({ score, maxScore, size = 140 }: ScoreRingProps) => {
  const strokeWidth = 10;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = score / maxScore;
  const dashOffset = circumference * (1 - progress);

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg
        width={size}
        height={size}
        className="transform -rotate-90"
      >
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
        />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#2dd4a8"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={dashOffset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-4xl font-bold text-gray-800">{score}</span>
      </div>
      <div className="absolute bottom-1 right-1 text-base font-medium text-gray-400">
        /{maxScore}
      </div>
    </div>
  );
};

export default ScoreRing;
