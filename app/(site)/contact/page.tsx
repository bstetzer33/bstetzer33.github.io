"use client";
import React, { useState } from "react";
import Button from "../../../components/ui/Button";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || !email || !message) {
      setStatus('Please fill out all fields.');
      return;
    }

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    });

    if (res.ok) {
      setStatus('Message sent — thank you!');
      setName(''); setEmail(''); setMessage('');
    } else {
      setStatus('Error sending message.');
    }
  }

  return (
    <section className="container max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold">Contact</h2>
      <p className="mt-2 text-slate-600 dark:text-slate-300">Want to work together? Send a message.</p>
      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm">Name</label>
          <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-md border px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm">Message</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={6} className="mt-1 w-full rounded-md border px-3 py-2" />
        </div>
        <div>
          <Button type="submit">Send</Button>
        </div>
        {status && <div className="text-sm text-slate-600 dark:text-slate-300">{status}</div>}
      </form>
    </section>
  );
}
