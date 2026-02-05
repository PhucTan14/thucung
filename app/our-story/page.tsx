'use client'

import Image from 'next/image'
import { Heart, ShoppingCart, ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function OurStory() {
  const products = [
    {
      id: 1,
      name: 'Grass-Fed Beef Kibble',
      category: 'Grain-Free',
      price: 34.99,
      rating: 4.9,
      reviews: 218,
      badge: 'NEW',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Wild Salmon Wet Food',
      category: 'High Protein',
      price: 28.50,
      rating: 4.8,
      reviews: 168,
      badge: '',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Organic Chicken Bits',
      category: 'Limited Ingredient',
      price: 15.00,
      rating: 4.7,
      reviews: 619,
      badge: '',
      image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Garden Veggie Mix',
      category: 'Superfood Boost',
      price: 22.00,
      rating: 4.9,
      reviews: 64,
      badge: '',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=400&fit=crop'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-xs font-semibold text-gray-600 mb-4 tracking-wider">
                100% ORGANIC & GRAIN-FREE
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Nourishment as Nature Intended.
              </h1>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Premium organic nutrition for your best friend.<br />
                Crafted with human-grade ingredients and<br />
                absolutely no artificial fillers.
              </p>
              <div className="flex gap-4">
                <button className="bg-primary hover:bg-primary-dark text-black font-bold px-8 py-3 rounded-full transition flex items-center gap-2">
                  Shop The Collection
                  <span>→</span>
                </button>
                <button className="border-2 border-gray-800 text-gray-800 font-bold px-8 py-3 rounded-full hover:bg-gray-800 hover:text-white transition">
                  View Ingredients
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-green-700 to-green-900 rounded-3xl overflow-hidden relative h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1558788353-f76d92427f16?w=800&h=600"
                  alt="Happy Golden Retriever"
                  fill
                  className="object-contain opacity-95"
                />
                <div className="absolute bottom-8 left-8 bg-white rounded-2xl p-4 shadow-xl z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                      ✓
                    </div>
                    <div className="text-xs font-bold">VET RECOMMENDED</div>
                  </div>
                  <div className="text-xs text-gray-600">Since 2012</div>
                </div>
                <div className="absolute top-8 right-8 text-6xl z-10">🥕</div>
                <div className="absolute bottom-12 right-12 text-4xl z-10">🥦</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purity Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'Georgia, serif' }}>
              Purity in Every Bite
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We prioritize your pet's long-term health with the highest standards of organic nutrition and ethical sourcing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center text-3xl mb-6">
                🌾
              </div>
              <h3 className="text-xl font-bold mb-3">100% Organic</h3>
              <p className="text-gray-600 leading-relaxed">
                Every ingredient is ethically sourced from local family farms. No pesticides, no chemicals.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-3xl mb-6">
                🍴
              </div>
              <h3 className="text-xl font-bold mb-3">Human Grade</h3>
              <p className="text-gray-600 leading-relaxed">
                If it's not food that a human you would eat or your own table, it's not going in your best friend's bowl.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-3xl mb-6">
                ♻️
              </div>
              <h3 className="text-xl font-bold mb-3">Eco-Friendly</h3>
              <p className="text-gray-600 leading-relaxed">
                Our packaging is 100% compostable. We care for the second your pet plays on.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Selection */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Curated Selection</h2>
              <p className="text-gray-600">
                The perfect balance of protein, vitamins, and minerals for daily wellness.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded-full bg-white shadow hover:bg-gray-100 transition flex items-center justify-center">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-full bg-white shadow hover:bg-gray-100 transition flex items-center justify-center">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-xl transition group">
                {/* Image */}
                <div className="relative aspect-square bg-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform"
                  />
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-primary text-black text-xs font-bold px-3 py-1 rounded-full z-10">
                      {product.badge}
                    </div>
                  )}
                  <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-red-50 transition shadow-md z-10">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3">{product.category}</p>
                  
                  <div className="flex items-center gap-1 mb-4">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{product.rating} ({product.reviews} reviews)</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">${product.price}</span>
                    <button className="bg-gray-900 text-white font-semibold px-6 py-2 rounded-full hover:bg-gray-800 transition text-sm">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-gradient-to-br from-amber-900 to-stone-800">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white relative">
            <div className="absolute -top-10 right-10 text-6xl opacity-20">🌲</div>
            <h2 className="text-4xl font-bold mb-4">
              Join the Pack
            </h2>
            <p className="mb-8 text-amber-100">
              Receive weekly organic recipes, nutritional tips from vets, and exclusive member discounts.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-3 rounded-full focus:outline-none text-gray-800"
              />
              <button className="bg-primary hover:bg-primary-dark text-black font-bold px-8 py-3 rounded-full transition whitespace-nowrap">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-amber-200 mt-4">
              By subscribing, you agree to our Privacy Policy and Terms of Service.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

