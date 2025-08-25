import React from "react";
import { IconArrowRight } from '@tabler/icons-react';

const StatusPing: React.FC = () => {
  const date = new Date();
  const month = date.toLocaleString("en-US", { month: "short" });
  const year = date.getFullYear();

  return (
    <div className="flex items-center space-x-1">
      {/* Ping Indicator */}
      <div className="relative flex items-center justify-center pr-2">
        <span className="absolute inline-flex h-4 w-4 rounded-full bg-green-400 opacity-30"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
      </div>

      {/* Text + Divider + Date */}
      <div className="flex items-center space-x-3 text-sm text-gray-800">
        <span className="font-semibold">Join the next cohort</span>
        <span className="h-4 w-px bg-gray-300"></span>
        <span>{month} {year}</span>
      </div>

      {/* Arrow */}
      <IconArrowRight size={16} className="text-gray-600" />
    </div>
  );
};

export default StatusPing;