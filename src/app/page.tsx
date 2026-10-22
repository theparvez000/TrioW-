import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Sparkles, ArrowRight, ShoppingBag, Eye, Star } from "lucide-react";

const DEMO_PRODUCTS = [
  {
    id: "1",
    name: "Classic Oxford Cotton Shirt",
    category: "Shirts",
    price: 45,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    name: "Slim Fit Chino Trousers",
    category: "Pants",
    price: 55,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "3",
    name: "Minimalist Everyday Hoodie",
    category: "Outerwear",
    price: 60,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "4",
    name: "Casual Denim Jacket",
    category: "Jackets",
    price: 85,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=500&auto=format&fit=crop&q=80",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 pb-16">
      {/* Dynamic Header */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50/60 via-white to-slate-50 py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/80 text-indigo-700 text-xs font-semibold mb-6 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-indigo-600" /> Next-Gen AI Smart Shopping
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-gray-900 tracking-tight leading-tight">
              Wear Your Style Before <br className="hidden sm:inline" />
              You Buy with <span className="text-indigo-600">Triow AI</span>
            </h1>

            <p className="mt-5 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore the latest premium fashion collection and preview how outfits fit you using our real-time interactive AI Virtual Try-On Canvas.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
              <Link
                href="/shop"
                className="w-full sm:w-auto px-8 py-3.5 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-md shadow-black/10"
              >
                Shop Collection <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/try-on"
                className="w-full sm:w-auto px-8 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
              >
                <Sparkles className="w-4 h-4" /> Try AI Canvas
              </Link>
            </div>

          </div>
        </section>

        {/* Featured Collection Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-black text-gray-900 tracking-tight">Trending Collection</h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">Discover popular items ready for AI Virtual Try-On</p>
            </div>
            <Link href="/shop" className="text-xs sm:text-sm font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
              View All <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {DEMO_PRODUCTS.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all group">
                <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Floating Action Buttons */}
                  <div className="absolute top-2 right-2 flex flex-col gap-2">
                    <Link
                      href={`/try-on?item=${product.id}`}
                      className="p-2 bg-white/90 backdrop-blur-md text-indigo-600 rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition-all"
                      title="Try on AI Canvas"
                    >
                      <Sparkles className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <div className="p-4">
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                    <span>{product.category}</span>
                    <span className="flex items-center gap-1 text-amber-500 font-medium">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> {product.rating}
                    </span>
                  </div>

                  <h3 className="font-bold text-sm text-gray-900 truncate">{product.name}</h3>
                  
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-base font-black text-gray-900">${product.price}</span>
                    <button className="p-2 bg-slate-100 text-gray-800 hover:bg-black hover:text-white rounded-lg transition-colors">
                      <ShoppingBag className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
