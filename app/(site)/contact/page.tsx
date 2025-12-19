"use client";
import React from "react";

export default function Contact() {
  return (
    <section className="container max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">Want to work together? Send a message.</p>
      <div className="mt-6 space-y-4">
        <p>You can reach me at:</p>
        <p>Email: <a href="mailto:your-email@example.com" className="text-blue-600 dark:text-blue-400">your-email@example.com</a></p>
        <p>Or use the button below to send an email:</p>
        <a href="mailto:your-email@example.com?subject=Contact from Portfolio" className="inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900">Send Email</a>
      </div>
    </section>
  );
}
