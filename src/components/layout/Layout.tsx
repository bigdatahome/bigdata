"use client";

import { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main>
        {children}
      </main>
      <Footer />

      {/* Scroll to Top Button - Only visible when scrolled */}
      {showTopButton && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 bg-black text-white w-16 h-16 rounded-full shadow-lg hover:bg-gray-800 flex flex-col items-center justify-center z-40 opacity-90 hover:opacity-100"
        >
          <svg className="w-3 h-3 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
          <span className="text-xs font-semibold">TOP</span>
        </button>
      )}
    </div>
  );
} 