import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Sparkles, ShoppingBag, Star, ArrowLeft, ShieldCheck, Truck } from "lucide-react";

export default async function ProductDetailPage(props: any) {
  const params = await props.params;
  const id = params?.id || "1";

  const product = {
    id,
    name: "Classic Oxford Cotton Shirt",
    category: "Shirts",
    price: 45,
    rating: 4.8,
    reviewsCount: 124,
    description: "Crafted from 100% premium breathable cotton, this Classic Oxford Shirt offers a tailored yet comfortable fit suitable for both casual and formal occasions.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Light Blue", "Navy"],
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=80",
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link href="/shop" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-black mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm">
          <div className="relative aspect-[4/5] bg-gray-100 rounded-2xl overflow-hidden">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
                {product.category}
              </span>

              <h1 className="text-2xl sm:text-3xl font-black text-gray-900 mt-3">{product.name}</h1>

              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span className="text-sm font-bold text-gray-900 ml-1">{product.rating}</span>
                </div>
                <span className="text-xs text-gray-400">({product.reviewsCount} customer reviews)</span>
              </div>

              <div className="text-3xl font-black text-gray-900 mt-4">${product.price}</div>

              <p className="text-sm text-gray-600 mt-4 leading-relaxed">{product.description}</p>

              <div className="mt-6">
                <label className="text-xs font-bold text-gray-900 uppercase">Select Size</label>
                <div className="flex gap-2 mt-2">
                  {product.sizes.map((size: string) => (
                    <button key={size} className="w-10 h-10 rounded-xl border border-gray-200 text-xs font-bold hover:border-black hover:bg-black hover:text-white transition-all">
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <Link
                href={`/try-on?item=${product.id}`}
                className="w-full py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-600/20"
              >
                <Sparkles className="w-4 h-4" /> Try on AI Canvas First
              </Link>

              <button className="w-full py-3.5 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center gap-2 shadow-md">
                <ShoppingBag className="w-4 h-4" /> Add to Cart
              </button>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100 text-xs text-gray-500">
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-indigo-600" /> Fast Delivery
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-indigo-600" /> 100% Original
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
