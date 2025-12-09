import "../styles/globals.css";
import React from "react";
import { Providers } from "../components/Providers";

export const metadata = {
  title: "Benjamin Stetzer — Web Developer",
  description: "Portfolio of Benjamin Stetzer — Web Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
