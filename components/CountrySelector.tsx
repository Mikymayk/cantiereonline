"use client";

// We use native <a> tags instead of Next.js <Link> to force a full page reload.
// This ensures that the middleware processes the updated 'manual_country' cookie
// and redirects (or doesn't redirect) correctly.

export default function CountrySelector() {
  const handleCountryChange = (code: string) => {
    // Set a cookie that lasts for a year
    document.cookie = `manual_country=${code}; path=/; max-age=31536000`;
  };

  return (
    <div className="bg-slate-800 text-slate-400 py-6 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm font-medium">Select Country / Region:</span>
        <div className="flex gap-4 text-sm font-bold text-white flex-wrap justify-center md:justify-end">
          <a href="/" onClick={() => handleCountryChange('it')} className="hover:text-blue-400 transition-colors flex items-center gap-2 cursor-pointer">
            🇮🇹 Italia
          </a>
          <a href="/de" onClick={() => handleCountryChange('de')} className="hover:text-blue-400 transition-colors flex items-center gap-2 cursor-pointer">
            🇩🇪 Deutschland
          </a>
          <a href="/ch" onClick={() => handleCountryChange('ch')} className="hover:text-blue-400 transition-colors flex items-center gap-2 cursor-pointer">
            🇨🇭 Schweiz
          </a>
          <a href="/se" onClick={() => handleCountryChange('se')} className="hover:text-blue-400 transition-colors flex items-center gap-2 cursor-pointer">
            🇸🇪 Sverige
          </a>
          <a href="/no" onClick={() => handleCountryChange('no')} className="hover:text-blue-400 transition-colors flex items-center gap-2 cursor-pointer">
            🇳🇴 Norge
          </a>
        </div>
      </div>
    </div>
  );
}
