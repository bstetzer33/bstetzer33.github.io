import React from "react";

export default function Footer() {
  return (
    <footer className="border-t py-6 mt-12">
      <div className="container text-sm text-slate-600 dark:text-slate-400 flex justify-between items-center">
        <div>© {new Date().getFullYear()} Benjamin Stetzer</div>
        <div>Built with Next.js, Tailwind, shadcn-style UI</div>
      </div>
    </footer>
  );
}
