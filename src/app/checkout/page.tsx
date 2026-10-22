"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { useCartStore } from "@/store/useCartStore";
import { CheckCircle2, CreditCard, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function CheckoutPage() {
  const { items, clearCart } = useCartStore();
  const [isOrdered, setIsOrdered] = useState(false);

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + (items.length > 0 ? 10 : 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
    clearCart();
  };

  if (isOrdered) {
    return (
      <div className="min-h-screen bg-slate-50 pb-16">
        <Navbar />
        <main className="max-w-md mx-auto px-4 pt-16 text-center">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h1 className="text-2xl font-black text-gray-900">Order Placed!</h1>
            <p className="text-xs text-gray-500">Thank you for shopping with Triow. Your order has been successfully created.</p>
            <Link href="/" className="inline-block px-6 py-3 bg-black text-white text-xs font-semibold rounded-xl hover:bg-gray-800 transition-all">
              Back to Home
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <h1 className="text-3xl font-black text-gray-900 mb-8">Checkout</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
            <h2 className="text-base font-black text-gray-900">Shipping Details</h2>
            
            <div className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-gray-700 block mb-1">Full Name</label>
                <input required type="text" placeholder="John Doe" className="w-full px-4 py-2.5 bg-slate-50 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-600" />
              </div>
              <div>
                <label className="font-bold text-gray-700 block mb-1">Email Address</label>
                <input required type="email" placeholder="john@example.com" className="w-full px-4 py-2.5 bg-slate-50 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-600" />
              </div>
              <div>
                <label className="font-bold text-gray-700 block mb-1">Delivery Address</label>
                <input required type="text" placeholder="Street, City, Country" className="w-full px-4 py-2.5 bg-slate-50 border border-gray-200 rounded-xl focus:outline-none focus:border-indigo-600" />
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 flex items-center gap-2 text-xs text-gray-500">
              <ShieldCheck className="w-4 h-4 text-emerald-500" /> Secure SSL Encrypted Payment
            </div>
          </div>

          <div className="md:col-span-5 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm h-fit space-y-4">
            <h2 className="text-base font-black text-gray-900">Payment Summary</h2>
            <div className="flex justify-between font-black text-base text-gray-900 border-b border-gray-100 pb-4">
              <span>Total Payable</span>
              <span className="text-indigo-600">${total}</span>
            </div>
            
            <button type="submit" className="w-full py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 text-xs shadow-lg shadow-indigo-600/20">
              <CreditCard className="w-4 h-4" /> Place Order (${total})
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}
