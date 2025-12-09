import React from "react";

export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-100">
      {children}
    </span>
  );
}
