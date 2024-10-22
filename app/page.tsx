"use client"
import React from 'react';
import { Music, Sparkles, MessageCircle, Brain, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationLinks = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="px-6 py-4 border-b border-zinc-800 sticky top-0 bg-black/95 backdrop-blur-sm z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Music className="h-8 w-8 text-green-500" />
            <span className="text-xl font-bold">MySpotifyAI</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-6 rounded-full">
              Login with Spotify
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
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
                <a
                  key={link.name}
                  href={link.href}
                  className="text-zinc-400 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-green-500 hover:bg-green-400 text-black font-bold py-2 px-6 rounded-full w-full">
                Login with Spotify
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-500 to-green-300 text-transparent bg-clip-text">
            Your AI-Powered Music Companion
          </h1>
          <p className="text-xl text-zinc-400 mb-8">
            Experience music like never before with personalized recommendations powered by artificial intelligence.
          </p>
          <button className="bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-8 rounded-full text-lg">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Sparkles className="h-8 w-8 text-green-500" />}
            title="AI-Powered Recommendations"
            description="Get intelligent music suggestions based on your listening habits and preferences."
          />
          <FeatureCard 
            icon={<MessageCircle className="h-8 w-8 text-green-500" />}
            title="Interactive Chat"
            description="Discover new music through natural conversations with our AI assistant."
          />
          <FeatureCard 
            icon={<Brain className="h-8 w-8 text-green-500" />}
            title="Emotion Analysis"
            description="Receive song recommendations that match your current mood and emotional state."
          />
        </div>
      </section>

      {/* Call to Action */}
      <section className="container mx-auto px-6 py-20">
        <div className="bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-2xl p-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Music Experience?</h2>
          <p className="text-zinc-400 mb-8 text-lg">
            Join MySpotifyAI today and discover music that speaks to your soul.
          </p>
          <button className="bg-green-500 hover:bg-green-400 text-black font-bold py-3 px-8 rounded-full text-lg">
            Connect with Spotify
          </button>
        </div>
      </section>
    </div>
  );
}

// Feature Card Component
const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 hover:border-green-500 transition-colors">
    <div className="mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-zinc-400">{description}</p>
  </div>
);