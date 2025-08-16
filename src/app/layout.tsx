import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Game",
  description: "A Game built with Next.js and React",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body>{children}</body>
    </html>
  );
}
