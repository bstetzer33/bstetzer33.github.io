import React from "react";
import Card from "../../../components/ui/Card";
import Badge from "../../../components/ui/Badge";

export default function About() {
  return (
    <section className="container max-w-3xl mx-auto">
      <h2 className="text-2xl font-semibold">About</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6 items-start">
        <div className="sm:col-span-1">
          <div className="w-48 h-48 rounded-full overflow-hidden bg-slate-100 dark:bg-slate-700">
            <img src="/avatar.svg" alt="Benjamin Stetzer" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="sm:col-span-2">
          <Card>
            <p className="text-slate-700 dark:text-slate-200">I’m Benjamin, a web developer focused on building accessible and performant user interfaces. I enjoy solving problems and crafting delightful experiences on the web.</p>
            <h3 className="mt-4 font-semibold">Skills</h3>
            <div className="mt-2 flex gap-2 flex-wrap">
              <Badge>TypeScript</Badge>
              <Badge>React</Badge>
              <Badge>Next.js</Badge>
              <Badge>Tailwind CSS</Badge>
              <Badge>Accessibility</Badge>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
