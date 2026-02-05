'use client'

import Image from 'next/image'
import { Heart, ShoppingCart, ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'Zenith Grain-Free Puppy Kibble',
      brand: 'NutriWell and Omega-3',
      price: 34.99,
      rating: 4.8,
      reviews: 46,
      badge: 'BEST SELLER',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Organic Salmon Pate Variety Pack',
      brand: 'DefPack • 100% Caught',
      price: 22.50,
      rating: 4.9,
      reviews: 153,
      badge: '10% OFF',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Tropical Fruit & Nut Bird Mix',
      brand: 'High Energy Blend',
      price: 18.99,
      rating: 4.7,
      reviews: 31,
      badge: '',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Premium Alfalfa Hay 2lb',
      brand: '',
      price: 12.45,
      rating: 4.9,
      reviews: 92,
      badge: '',
      image: 'https://images.unsplash.com/photo-1585110396000-c9ffd4e4b308?w=400&h=400&fit=crop'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-blue-500 text-white text-xs font-semibold px-4 py-1 rounded-full mb-6">
                PREMIUM NUTRITION
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4">
                Only the Best<br />for Your <span className="text-primary">Best<br />Friend.</span>
              </h1>
              <p className="text-gray-600 mb-8 text-lg">
                Vibrant, organic, and vet-recommended food<br />
                delivered straight to your door with love.
              </p>
              <div className="flex gap-4">
                <button className="bg-primary hover:bg-primary-dark text-black font-bold px-8 py-3 rounded-full transition">
                  Shop All Food
                </button>
                <button className="border-2 border-primary text-black font-bold px-8 py-3 rounded-full hover:bg-primary transition">
                  Take the Quiz
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-full h-[400px] rounded-3xl overflow-hidden bg-gradient-to-br from-amber-100 to-orange-100">
                <Image
                  src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=800&h=600"
                  alt="Happy dog and cat"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-2xl">
                🌾
              </div>
              <div>
                <h3 className="font-bold">100% Organic</h3>
                <p className="text-sm text-gray-600">Non-GMO ingredients</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-2xl">
                🥗
              </div>
              <div>
                <h3 className="font-bold">Vet Approved</h3>
                <p className="text-sm text-gray-600">Nutritional formulated</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center text-2xl">
                🚚
              </div>
              <div>
                <h3 className="font-bold">Fast Delivery</h3>
                <p className="text-sm text-gray-600">2-day shipping</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center text-2xl">
                💬
              </div>
              <div>
                <h3 className="font-bold">24/7 Support</h3>
                <p className="text-sm text-gray-600">Always here for you</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Pet */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Shop by Pet</h2>
              <p className="text-gray-600">Everything you need for your furry or feathered family.</p>
            </div>
            <button className="text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
              View All →
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: 'Dogs', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=400&h=400&fit=crop' },
              { name: 'Cats', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop' },
              { name: 'Birds', image: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400&h=400&fit=crop' },
              { name: 'Small Pets', image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&h=400&fit=crop' }
            ].map((pet) => (
              <button
                key={pet.name}
                className="relative rounded-3xl aspect-square overflow-hidden hover:scale-105 transition-transform group bg-gray-900"
              >
                <Image
                  src={pet.image}
                  alt={pet.name}
                  fill
                  className="object-cover brightness-75 group-hover:brightness-90 group-hover:scale-110 transition-all duration-300"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="text-2xl font-bold text-white drop-shadow-lg">{pet.name}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
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
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
                {/* Image */}
                <div className="relative aspect-square bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded z-10">
                      {product.badge}
                    </div>
                  )}
                  <button className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition shadow-md z-10">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="font-bold mb-1">{product.name}</h3>
                  {product.brand && (
                    <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
                  )}
                  <div className="flex items-center gap-1 mb-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">({product.reviews})</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">${product.price}</span>
                    <button className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-primary-dark transition">
                      <ShoppingCart className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Join the pack! Get 15% off your first order.
            </h2>
            <p className="mb-8 text-blue-100">
              Receive healthy pet tips, exclusive deals, and new product alerts delivered weekly.
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 px-6 py-3 rounded-full focus:outline-none text-gray-800"
              />
              <button className="bg-primary hover:bg-primary-dark text-black font-bold px-8 py-3 rounded-full transition whitespace-nowrap">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

