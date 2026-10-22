"use client";

import Navbar from "@/components/Navbar";
import { User, Package, Heart, LogOut, Sparkles } from "lucide-react";

export default function AccountPage() {
  const user = {
    name: "John Doe",
    email: "john@example.com",
    joined: "October 2026",
  };

  const recentOrders = [
    {
      id: "ORD-98231",
      date: "Oct 20, 2026",
      total: 100,
      status: "Delivered",
      items: "Classic Oxford Shirt, Slim Chino",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-16">
      <Navbar />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <h1 className="text-3xl font-black text-gray-900 mb-8">My Account</h1>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* User Profile Card */}
          <div className="md:col-span-4 bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4 h-fit">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center font-bold text-lg">
                <User className="w-6 h-6" />
              </div>
              <div>
                <h2 className="font-bold text-base text-gray-900">{user.name}</h2>
                <p className="text-xs text-gray-400">{user.email}</p>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 text-xs text-gray-500 space-y-2">
              <div className="flex justify-between">
                <span>Member Since:</span>
                <span className="font-semibold text-gray-900">{user.joined}</span>
              </div>
            </div>

            <button className="w-full py-2.5 bg-slate-100 text-red-600 font-semibold rounded-xl hover:bg-red-50 transition-all flex items-center justify-center gap-2 text-xs">
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>

          {/* Orders & Try-On History */}
          <div className="md:col-span-8 space-y-6">
            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm space-y-4">
              <h2 className="text-base font-black text-gray-900 flex items-center gap-2">
                <Package className="w-5 h-5 text-indigo-600" /> Recent Orders
              </h2>

              {recentOrders.map((order) => (
                <div key={order.id} className="p-4 bg-slate-50 rounded-2xl border border-gray-100 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-bold text-gray-900">{order.id}</div>
                    <div className="text-gray-400 mt-0.5">{order.items}</div>
                    <div className="text-gray-400 text-[10px] mt-1">{order.date}</div>
                  </div>
                  <div className="text-right">
                    <span className="px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-full font-bold text-[10px]">
                      {order.status}
                    </span>
                    <div className="font-black text-gray-900 text-sm mt-2">${order.total}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-indigo-50/50 p-6 rounded-3xl border border-indigo-100 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-sm text-gray-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-indigo-600" /> AI Try-On Canvas History
                </h3>
                <p className="text-xs text-gray-500 mt-1">View or re-generate your saved AI outfit combinations.</p>
              </div>
              <a href="/try-on" className="px-4 py-2 bg-indigo-600 text-white rounded-xl text-xs font-semibold hover:bg-indigo-700 transition-all">
                Open Studio
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
