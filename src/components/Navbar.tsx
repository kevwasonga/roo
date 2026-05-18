"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, BarChart3, Database, GitBranch } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-dark/90 backdrop-blur-md border-b border-gold/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-dark-3 border border-gold/30 text-gold shadow-inner group-hover:border-gold transition-colors">
                <BarChart3 className="w-5 h-5 absolute group-hover:scale-110 transition-transform" />
                <Database className="w-3 h-3 absolute -top-1 -right-1 text-green" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-lg leading-tight tracking-tight text-white group-hover:text-gold transition-colors">
                  RODRICKS.O
                </span>
                <span className="text-[10px] text-text-muted font-sans leading-none">
                  DATA SCIENTIST
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 text-sm font-medium font-sans text-text-muted hover:text-white transition-colors rounded-md hover:bg-dark-3"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <Link
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-dark bg-gold hover:bg-gold-light border border-gold/50 rounded-md transition-all shadow-sm"
            >
              Get In Touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-text-muted hover:text-white hover:bg-dark-3 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gold border border-dark-3"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-dark/95 backdrop-blur-lg border-b border-gold/30 px-2 pt-2 pb-4 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-3 rounded-md text-base font-medium font-sans text-text-muted hover:text-white hover:bg-dark-3"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 pb-2 px-3">
            <Link
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center px-4 py-3 text-base font-semibold text-dark bg-gold hover:bg-gold-light border border-gold/50 rounded-md transition-all"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
