"use client";
import Link from "next/link";
import React from "react";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="border-b py-4">
      <div className="container flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-lg font-semibold">Benjamin Stetzer</Link>
          <nav className="hidden sm:flex space-x-3 text-sm text-slate-600 dark:text-slate-300">
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-3">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
