'use client';

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Sparkles, ShoppingBag, Star, Search } from "lucide-react";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
}

const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Classic Oxford Cotton Shirt",
    category: "Shirts",
    price: 45,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "2",
    name: "Slim Fit Chino Trousers",
    category: "Pants",
    price: 55,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "3",
    name: "Winter Woolen Overcoat",
    category: "Outerwear",
    price: 120,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=80",
  },
  {
    id: "4",
    name: "Casual Linen Shirt",
    category: "Shirts",
    price: 40,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=800&auto=format&fit=crop&q=80",
  }
];

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [cartCount, setCartCount] = useState<number>(0);

  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category.toLowerCase() === selectedCategory.toLowerCase();
    return matchesSearch && matchesCategory;
  });

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>, productName: string) => {
    e.preventDefault();
    setCartCount((prev) => prev + 1);
    alert(`"${productName}" added to cart successfully! 🛒`);
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Navbar cartCount={cartCount} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="mb-6">
          <h1 className="text-3xl font-black text-gray-900">Shop Collection</h1>
          <p className="text-sm text-gray-500 mt-1">Explore all apparel & try them on with Triow AI</p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-black shadow-sm transition-all"
          />
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-6">
          {["All", "Shirts", "Pants", "Outerwear"].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all whitespace-nowrap shadow-sm ${
                selectedCategory === cat
                  ? "bg-black text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <p className="text-gray-400 font-medium text-sm">No products found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                className="group bg-white rounded-3xl p-4 border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative"
              >
                <Link
                  href={`/try-on?item=${product.id}`}
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-7 right-7 z-10 w-9 h-9 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center text-indigo-600 shadow-sm hover:scale-110 transition-all border border-indigo-100"
                  title="Try on AI Canvas"
                >
                  <Sparkles className="w-4 h-4" />
                </Link>

                <div className="relative aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
                    <span>{product.category}</span>
                    <div className="flex items-center text-amber-400 font-bold">
                      <Star className="w-3.5 h-3.5 fill-amber-400 mr-0.5" />
                      <span>{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900 line-clamp-1 group-hover:text-indigo-600 transition-colors">
                    {product.name}
                  </h3>
                </div>

                <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
                  <span className="text-lg font-black text-gray-900">${product.price}</span>
                  <button
                    onClick={(e) => handleAddToCart(e, product.name)}
                    className="w-10 h-10 bg-gray-50 hover:bg-black hover:text-white rounded-2xl flex items-center justify-center transition-all text-gray-800"
                    title="Add to Cart"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
