'use client'

import Image from 'next/image'
import { Heart, Star, Shield, Award, Settings } from 'lucide-react'

export default function VetPage() {
  const healthConcerns = [
    { name: 'Weight Management', icon: '⚖️', active: true },
    { name: 'Sensitive Stomach', icon: '🐾', active: false },
    { name: 'Joint & Bone Health', icon: '🦴', active: false },
    { name: 'Renal Care', icon: '❤️', active: false },
    { name: 'Immune Support', icon: '🛡️', active: false },
  ]

  const brands = [
    'Royal Canin Pro',
    "Hill's Prescription Diet",
    'Purina Pro Plan',
    'Blue Buffalo Clinical',
  ]

  const products = [
    {
      id: 1,
      name: 'Royal Canin Satiety Support',
      description: 'Dry Dog Food • 18lb Bag • Clinical Weight',
      price: 84.99,
      originalPrice: 99.99,
      rating: 4.9,
      reviews: 1204,
      badge: 'VET RECOMMENDED',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: "Hill's Metabolic + Urinary",
      description: 'Dry Dog Food • 6.6lb Bag • Weight + Bladder Care',
      price: 52.49,
      rating: 4.8,
      reviews: 892,
      badge: 'VET RECOMMENDED',
      image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Purina Pro Plan OM Diet',
      description: 'Dry Dog Food • 18lb Bag • Low Calorie Formula',
      price: 79.99,
      rating: 4.7,
      reviews: 612,
      badge: 'VET RECOMMENDED',
      image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=400&fit=crop'
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-72 bg-white border-r border-gray-200 p-6 hidden lg:block sticky top-[60px] self-start h-[calc(100vh-60px)] overflow-y-auto shadow-sm">
          <div className="mb-10">
            <h3 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">
              Health Concerns
            </h3>
            <ul className="space-y-1">
              {healthConcerns.map((concern) => (
                <li key={concern.name}>
                  <button
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                      concern.active
                        ? 'bg-primary text-black font-semibold shadow-sm'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-black'
                    }`}
                  >
                    <span className="text-2xl">{concern.icon}</span>
                    <span className="text-sm font-medium">{concern.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-10 pb-10 border-b border-gray-100">
            <h3 className="text-xs font-bold text-gray-400 mb-4 uppercase tracking-widest">
              Professional Brands
            </h3>
            <ul className="space-y-1">
              {brands.map((brand) => (
                <li key={brand}>
                  <button className="w-full text-left text-sm text-gray-600 hover:text-primary hover:bg-gray-50 transition px-4 py-2 rounded-lg font-medium">
                    {brand}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-2xl p-6 text-white shadow-lg">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 shadow-md">
              <span className="text-3xl">🩺</span>
            </div>
            <h4 className="font-bold text-lg mb-2">Need Professional Advice?</h4>
            <p className="text-sm text-blue-100 mb-5 leading-relaxed">
              Our certified veterinary team is available for live consultation.
            </p>
            <button className="w-full bg-primary hover:bg-primary-dark text-black font-bold py-3 rounded-full transition-all text-sm shadow-md hover:shadow-lg">
              Consult a Vet
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          {/* Auto-ship Banner */}
          <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="container mx-auto px-8 py-16 relative">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 bg-primary text-black text-xs font-bold px-4 py-2 rounded-full mb-6 shadow-lg">
                  <span className="text-base">💰</span>
                  15% INSTANT SAVINGS
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  Set it and forget it!<br />
                  <span className="text-primary">Save with Auto-ship.</span>
                </h1>
                <p className="text-lg text-blue-100 mb-8 max-w-xl leading-relaxed">
                  Never run out of specialized health food again.
                  Professionally managed delivery, fully customizable schedules.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-primary hover:bg-primary-dark text-black font-bold px-10 py-4 rounded-full transition-all shadow-xl hover:shadow-2xl hover:scale-105">
                    Start Auto-ship
                  </button>
                  <button className="border-2 border-white hover:bg-white hover:text-blue-900 font-bold px-10 py-4 rounded-full transition-all backdrop-blur-sm">
                    How it works
                  </button>
                </div>
              </div>
              <div className="absolute right-20 top-1/2 -translate-y-1/2 text-[200px] opacity-10 hidden xl:block">
                📦
              </div>
            </div>
          </section>

          {/* Recommended Diets */}
          <section className="container mx-auto px-8 py-16">
            <div className="mb-10">
              <h2 className="text-4xl font-bold mb-3">Recommended Professional Diets</h2>
              <p className="text-gray-600 text-lg">Based on your recent search for weight management</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {products.map((product) => (
                <div key={product.id} className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group">
                  {/* Image */}
                  <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-6 group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-5 left-5 bg-primary text-black text-xs font-bold px-4 py-2 rounded-full shadow-lg z-10">
                      {product.badge}
                    </div>
                    <button className="absolute top-5 right-5 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-red-50 transition shadow-lg z-10 group/heart">
                      <Heart className="w-5 h-5 text-gray-600 group-hover/heart:text-red-500 transition" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-1 mb-4">
                      <div className="flex text-yellow-400">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm font-bold ml-1.5">{product.rating}</span>
                      <span className="text-sm text-gray-500">({product.reviews.toLocaleString()} reviews)</span>
                    </div>

                    <h3 className="font-bold text-xl mb-2 leading-tight">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-5 leading-relaxed">{product.description}</p>

                    <div className="flex items-baseline gap-3 mb-5">
                      <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-base text-gray-400 line-through">${product.originalPrice}</span>
                      )}
                    </div>

                    <button className="w-full bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white font-bold py-4 rounded-full transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group/btn">
                      <span>Add to Cart</span>
                      <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center group-hover/btn:scale-110 transition">
                        <Star className="w-3.5 h-3.5 fill-current text-black" />
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust Badge */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-l-4 border-primary rounded-2xl p-8 flex flex-col md:flex-row items-start gap-6 shadow-md">
              <div className="flex gap-3 text-5xl">
                🩺🐕🐈
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-2xl mb-3">Trusted by 5,000+ Veterinarians</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Every product we sell is vetted for clinical accuracy and nutritional completeness.
                </p>
              </div>
              <div className="flex gap-5 text-gray-400">
                <div className="flex flex-col items-center">
                  <Shield className="w-10 h-10 mb-1" />
                  <span className="text-xs font-medium text-gray-600">Certified</span>
                </div>
                <div className="flex flex-col items-center">
                  <Award className="w-10 h-10 mb-1" />
                  <span className="text-xs font-medium text-gray-600">Awarded</span>
                </div>
                <div className="flex flex-col items-center">
                  <Settings className="w-10 h-10 mb-1" />
                  <span className="text-xs font-medium text-gray-600">Quality</span>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

