"use client";
import React from "react";
import clsx from "clsx";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'ghost';
}

export default function Button({ className, variant = 'default', ...props }: Props) {
  return (
    <button
      {...props}
      className={clsx(
        'inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors',
        variant === 'default' && 'bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900',
        variant === 'ghost' && 'bg-transparent text-slate-700 dark:text-slate-200',
        className
      )}
    />
  );
}
