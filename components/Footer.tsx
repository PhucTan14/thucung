import Link from 'next/link'
import { Home, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-xl">🐾</span>
              </div>
              <span className="text-lg font-bold">PetFoodHome</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Dedicated to providing the healthiest, most sustainable nutrition for pets everywhere. Because they're more than pets, they're family.
            </p>
            <div className="flex gap-3">
              <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary transition">
                <Home className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-primary transition">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-600 hover:text-primary transition">Shop All Products</Link></li>
              <li><Link href="/our-story" className="text-gray-600 hover:text-primary transition">Track Your Order</Link></li>
              <li><Link href="/" className="text-gray-600 hover:text-primary transition">Gift Cards</Link></li>
              <li><Link href="/" className="text-gray-600 hover:text-primary transition">Store Locator</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-gray-600 hover:text-primary transition">Help Center</Link></li>
              <li><Link href="/" className="text-gray-600 hover:text-primary transition">Contact Us</Link></li>
              <li><Link href="/" className="text-gray-600 hover:text-primary transition">Shipping & Returns</Link></li>
              <li><Link href="/vet" className="text-gray-600 hover:text-primary transition">Vet Advice</Link></li>
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="font-bold mb-4">Download Our App</h3>
            <div className="space-y-2">
              <button className="w-full bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition text-sm">
                <span className="text-xl">🍎</span>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </button>
              <button className="w-full bg-black text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-800 transition text-sm">
                <span className="text-xl">📱</span>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-8 text-center text-sm text-gray-600">
          <p>© 2024 Pet Food Home. All rights reserved. Built for happy tails.</p>
        </div>
      </div>
    </footer>
  )
}

