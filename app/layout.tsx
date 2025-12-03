import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ArcStrike — Advanced Endpoint Threat Detection",
  description: "Next-gen malware analysis and behavioral EDR for modern defense teams.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased dark`} suppressHydrationWarning>
      <body className="bg-oled-black text-foreground min-h-screen selection:bg-neon-blue/30 selection:text-neon-blue" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
