// components/Navigation.tsx
'use client';  // This is important for client-side interactivity

import React, { useState } from 'react';
import { Music, Menu, X } from 'lucide-react';
import Link from 'next/link';

const navigationLinks = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'About', href: '/about' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
] as const;

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="px-6 py-4 border-b border-zinc-800 sticky top-0 bg-black/95 backdrop-blur-sm z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Music className="h-8 w-8 text-green-500" />
          <span className="text-xl font-bold text-white">MySpotifyAI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-6 rounded-full">
            Login with Spotify
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-zinc-900 border-b border-zinc-800 py-4">
          <div className="container mx-auto px-6 flex flex-col gap-4">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-zinc-400 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-6 rounded-full w-full">
              Login with Spotify
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}