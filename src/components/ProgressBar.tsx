import React, { useEffect, useState } from 'react';

interface ProgressBarProps {
  value: number;
  max: number;
  label?: string;
  animate?: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ 
  value, 
  max, 
  label, 
  animate = true 
}) => {
  const [width, setWidth] = useState(0);
  const percentage = Math.round((value / max) * 100);
  
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setWidth(percentage);
    }
  }, [percentage, animate]);

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between mb-1">
          <span className="text-sm text-gray-600">{label}</span>
          <span className="text-sm font-medium text-gray-700">{value}/{max}</span>
        </div>
      )}
      <div className="h-2.5 w-full bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;