import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import StickyTGCLBadge from "../components/layout/StickyTGCLBadge";
import VoiceAssistant from "../components/voice/VoiceAssistant";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tech Eureka - Leading IT Solutions, Enterprise ERP & Tech Training",
  description: "Tech Eureka is a premier IT consulting, software engineering, enterprise ERP, and training firm. Specialized in Pharma, Chemical & Leather ERPs, custom web & app development, and SQA automation.",
  keywords: ["Tech Eureka", "TGCL", "Pharma ERP", "Con Eureka", "Leather Eureka", "Software Development", "SQA Automation", "Dot Net Training", "Spring Boot Training", "Bangladesh IT Firm"],
  authors: [{ name: "Tech Eureka" }],
  icons: {
    icon: "/favicon.ico",
    apple: "/img/favicon/favicon-144x144.html",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} dark`}>
      <body className="min-h-screen bg-[#050914] text-slate-100 antialiased flex flex-col selection:bg-[#7dc535] selection:text-slate-950">
        <Navbar />
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        <StickyTGCLBadge />
        <VoiceAssistant />
        <Footer />
      </body>
    </html>
  );
}
