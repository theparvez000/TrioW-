import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Sparkles, ShoppingBag, Star, ArrowLeft, ShieldCheck, Truck } from "lucide-react";

export async function generateStaticParams() {
  return [{ id: '1' }];
}

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
    description: "Crafted from 100% premium breathable cotton shirt.",
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Light Blue", "Navy"],
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&auto=format&fit=crop&q=80",
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 pt-6">
        <Link href="/shop" className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to Shop
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-3xl border border-gray-100">
          <img src={product.image} alt={product.name} className="w-full h-auto rounded-2xl object-cover" />
          <div>
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-xl font-bold mt-2">${product.price}</p>
            <p className="text-sm text-gray-600 mt-2">{product.description}</p>
            <div className="mt-6 space-y-3">
              <Link href={`/try-on?item=${product.id}`} className="w-full py-3 bg-indigo-600 text-white rounded-xl flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" /> Try on AI Canvas First
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
