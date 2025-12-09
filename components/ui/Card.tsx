import React from "react";

export default function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={"rounded-lg border p-4 shadow-sm bg-white dark:bg-slate-800 " + className}>
      {children}
    </div>
  );
}
