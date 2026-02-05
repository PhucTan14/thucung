'use client'

import Link from 'next/link'
import { Search, Heart, ShoppingCart, User } from 'lucide-react'

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top banner */}
      <div className="bg-blue-600 text-white text-center py-1.5 text-xs">
        🎉 Free shipping on all orders over $49! Use code: PETLOVER
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-2.5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-xl">🐾</span>
            </div>
            <span className="text-lg font-bold">PetFoodHome</span>
          </Link>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-lg mx-6">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search products, brands..."
                className="w-full px-4 py-1.5 text-sm border border-gray-300 rounded-full focus:outline-none focus:border-primary"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-5 text-sm">
            <Link href="/" className="hover:text-primary transition">Shop All</Link>
            <Link href="/our-story" className="hover:text-primary transition">Our Story</Link>
            <Link href="/vet" className="hover:text-primary transition">Vet Care</Link>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-3 ml-4">
            <button className="hover:text-primary transition">
              <Heart className="w-5 h-5" />
            </button>
            <button className="hover:text-primary transition relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1.5 -right-1.5 bg-primary text-black text-xs rounded-full w-4 h-4 flex items-center justify-center font-bold text-[10px]">
                0
              </span>
            </button>
            <button className="hover:text-primary transition">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

