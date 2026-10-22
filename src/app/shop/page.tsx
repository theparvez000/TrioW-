"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Sparkles, Search, Filter, ShoppingBag, Star } from "lucide-react";

const ALL_PRODUCTS = [
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
  {
    id: "5",
    name: "Streetwear Printed Tee",
    category: "Shirts",
    price: 30,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=500&auto=format&fit=crop&q=80",
  },
  {
    id: "6",
    name: "Tailored Blazer Jacket",
    category: "Jackets",
    price: 120,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=80",
  },
];

const CATEGORIES = ["All", "Shirts", "Pants", "Outerwear", "Jackets"];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = ALL_PRODUCTS.filter((product) => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-black text-gray-900">Shop Collection</h1>
            <p className="text-sm text-gray-500 mt-1">Explore all apparel & try them on with Triow AI</p>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600/20 focus:border-indigo-600 transition-all"
            />
          </div>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          <Filter className="w-4 h-4 text-gray-400 mr-2 flex-shrink-0" />
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                  : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all group">
              <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                <div className="absolute top-2 right-2">
                  <Link
                    href={`/try-on?item=${product.id}`}
                    className="p-2 bg-white/90 backdrop-blur-md text-indigo-600 rounded-full shadow-md hover:bg-indigo-600 hover:text-white transition-all flex items-center justify-center"
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

                <Link href={`/product/${product.id}`} className="font-bold text-sm text-gray-900 hover:text-indigo-600 transition-colors block truncate">
                  {product.name}
                </Link>
                
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
      </main>
    </div>
  );
}
