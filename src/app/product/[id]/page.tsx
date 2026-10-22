export const dynamic = 'force-dynamic';

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
        <h1 className="text-2xl font-black text-gray-900 mb-2">Product Detail</h1>
        <p className="text-xs text-gray-500 mb-6">Explore product features and AI Try-On preview options.</p>
        <a href="/shop" className="inline-block px-5 py-2.5 bg-black text-white text-xs font-semibold rounded-xl">
          Back to Shop
        </a>
      </div>
    </div>
  );
}
