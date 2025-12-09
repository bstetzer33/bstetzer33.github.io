import React from "react";
import Link from "next/link";
import Button from "../../components/ui/Button";

export default function Home() {
  return (
    <section className="container">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-sm text-slate-500 dark:text-slate-400">Hello — I build web experiences</p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold">Benjamin Stetzer</h1>
        <p className="mt-2 text-xl text-slate-700 dark:text-slate-300">Web Developer — I create accessible, performant interfaces.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/projects"><Button>View Projects</Button></Link>
          <Link href="/contact"><Button variant="ghost">Contact</Button></Link>
        </div>
      </div>
    </section>
  );
}
