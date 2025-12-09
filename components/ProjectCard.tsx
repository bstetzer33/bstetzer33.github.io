import React from "react";
import Card from "./ui/Card";
import Badge from "./ui/Badge";
import Link from "next/link";

type Project = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
};

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="h-full flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{project.description}</p>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div className="flex gap-2 flex-wrap">
          {project.tech.map((t) => (
            <Badge key={t}>{t}</Badge>
          ))}
        </div>
        <div className="flex space-x-2">
          {project.github && (
            <Link href={project.github} className="text-sm text-slate-700 dark:text-slate-200">GitHub</Link>
          )}
          {project.demo && (
            <Link href={project.demo} className="text-sm text-slate-700 dark:text-slate-200">Demo</Link>
          )}
        </div>
      </div>
    </Card>
  );
}
