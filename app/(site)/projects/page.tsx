import React from "react";
import ProjectCard from "../../../components/ProjectCard";

const EXAMPLES = [
  {
    title: 'Personal Blog',
    description: 'A fast, accessible blog built with Next.js and static generation.',
    tech: ['Next.js', 'Tailwind', 'MDX'],
    github: 'https://github.com/example/blog'
  },
  {
    title: 'E‑commerce UI',
    description: 'Design system and storefront built with component-driven development.',
    tech: ['React', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/example/storefront',
    demo: '#'
  },
  {
    title: 'Design Tokens Playground',
    description: 'A tiny app showcasing design tokens and theming in CSS variables.',
    tech: ['CSS', 'Tokens', 'Accessibility'],
    github: 'https://github.com/example/tokens'
  }
];

export default function Projects() {
  return (
    <section className="container">
      <h2 className="text-2xl font-semibold">Projects</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">Selected projects and examples.</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {EXAMPLES.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </section>
  );
}
