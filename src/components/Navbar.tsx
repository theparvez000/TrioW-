"use client";

import Link from "next/link";
import { ShoppingBag, Sparkles, Search, User, Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link href="/" className="text-2xl font-black tracking-wider text-black">
              TRIOW<span className="text-indigo-600">.</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-700">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <Link href="/shop" className="hover:text-black transition-colors">Shop All</Link>
            <Link href="/try-on" className="flex items-center gap-1 text-indigo-600 font-semibold hover:text-indigo-700 transition-colors">
              <Sparkles className="w-4 h-4" /> AI Virtual Canvas
            </Link>
            <Link href="/categories" className="hover:text-black transition-colors">Categories</Link>
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-4 text-gray-700">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            
            <Link href="/cart" className="p-2 hover:bg-gray-100 rounded-full transition-colors relative" aria-label="Shopping Cart">
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute top-1 right-1 bg-indigo-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                0
              </span>
            </Link>

            <Link href="/account" className="p-2 hover:bg-gray-100 rounded-full transition-colors hidden sm:block" aria-label="Account">
              <User className="w-5 h-5" />
            </Link>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 md:hidden hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-2 pb-4 space-y-3 font-medium text-gray-700">
          <Link href="/" className="block py-2 hover:text-black">Home</Link>
          <Link href="/shop" className="block py-2 hover:text-black">Shop All</Link>
          <Link href="/try-on" className="flex items-center gap-2 py-2 text-indigo-600 font-semibold">
            <Sparkles className="w-4 h-4" /> AI Virtual Canvas
          </Link>
          <Link href="/categories" className="block py-2 hover:text-black">Categories</Link>
        </div>
      )}
    </header>
  );
}
