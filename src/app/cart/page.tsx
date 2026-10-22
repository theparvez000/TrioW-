"use client";

import Navbar from "@/components/Navbar";
import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";
import { Trash2, ShoppingBag, ArrowRight } from "lucide-react";

export default function CartPage() {
  const { items, removeItem } = useCartStore();

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = items.length > 0 ? 10 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <h1 className="text-3xl font-black text-gray-900 mb-8">Shopping Cart</h1>

        {items.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="text-sm font-bold text-gray-900">Your cart is empty</p>
            <p className="text-xs text-gray-400 mt-1 mb-6">Explore our collection and add items to your cart.</p>
            <Link href="/shop" className="px-6 py-3 bg-black text-white text-xs font-semibold rounded-xl hover:bg-gray-800 transition-all">
              Explore Shop
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 space-y-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl bg-gray-100" />
                  <div className="flex-1">
                    <h3 className="font-bold text-sm text-gray-900">{item.name}</h3>
                    <p className="text-xs text-gray-500 mt-1">Size: <span className="font-bold text-gray-900">{item.size}</span> | Qty: {item.quantity}</p>
                    <div className="text-sm font-black text-gray-900 mt-2">${item.price * item.quantity}</div>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="p-2 text-gray-400 hover:text-red-500 transition-colors">
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm h-fit space-y-4">
              <h3 className="text-base font-black text-gray-900">Order Summary</h3>
              <div className="space-y-2 text-xs text-gray-600 border-b border-gray-100 pb-4">
                <div className="flex justify-between"><span>Subtotal</span><span className="font-bold text-gray-900">${subtotal}</span></div>
                <div className="flex justify-between"><span>Shipping</span><span className="font-bold text-gray-900">${shipping}</span></div>
              </div>
              <div className="flex justify-between font-black text-base text-gray-900">
                <span>Total</span>
                <span className="text-indigo-600">${total}</span>
              </div>
              <Link href="/checkout" className="w-full py-3.5 bg-black text-white font-semibold rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center gap-2 text-xs shadow-md">
                Proceed to Checkout <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
