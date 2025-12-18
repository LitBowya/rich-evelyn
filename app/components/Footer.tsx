"use client";

import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Couple Initials */}
        <div className="flex items-center justify-center gap-4">
          <span className="font-display text-2xl sm:text-3xl">R</span>
          <Heart className="w-6 h-6 text-primary fill-primary" />
          <span className="font-display text-2xl sm:text-3xl">E</span>
        </div>

        {/* Wedding Date */}
        <p className="font-heading text-xl sm:text-2xl text-gray-300">
          December 20, 2025
        </p>

        {/* Divider */}
        <div className="h-px w-32 bg-gray-700 mx-auto"></div>

        {/* Tagline */}
        <p className="font-sans text-sm sm:text-base text-gray-400 italic max-w-md mx-auto">
          Two Hearts, One Promise, A Lifetime of Love
        </p>

        {/* Copyright */}
        <p className="font-sans text-xs sm:text-sm text-gray-500 pt-4">
          © {currentYear} Richard & Evelyn. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
