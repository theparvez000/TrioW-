import Link from "next/link";
import { ShoppingBag, Sparkles } from "lucide-react";

export default function Navbar({ cartCount = 0 }: { cartCount?: number }) {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-black tracking-tight text-gray-900">
          TRIOW<span className="text-indigo-600">.</span>
        </Link>
        
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link href="/shop" className="text-sm font-semibold text-gray-600 hover:text-black transition-colors">
            Shop
          </Link>
          <Link href="/try-on" className="text-sm font-semibold text-indigo-600 hover:text-black transition-colors flex items-center gap-1">
            <Sparkles className="w-4 h-4" /> AI Try-On
          </Link>
          <Link href="/shop" className="relative p-2 text-gray-700 hover:text-black transition-colors">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-indigo-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}
