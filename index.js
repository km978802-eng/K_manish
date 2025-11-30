import Logo from '../components/Logo'

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <Logo size={40} />
            <div className="text-xl font-bold text-slate-800">K_manish</div>
          </div>
          <nav className="hidden md:flex gap-6 items-center text-sm font-medium">
            <a href="/" className="hover:text-indigo-600">Home</a>
            <a href="/about" className="hover:text-indigo-600">About</a>
            <a href="/services" className="hover:text-indigo-600">Services</a>
            <a href="/markets" className="hover:text-indigo-600">Markets</a>
            <a href="/contact" className="hover:text-indigo-600">Contact</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto p-6 pt-12 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">K_manish — Smart Trading in Stocks, Crypto & Forex</h1>
          <p className="mt-4 text-lg text-slate-600">Professional trading services, real-time market intelligence, and disciplined strategies designed to help you grow.</p>
        </div>
        <div className="flex-1 bg-gradient-to-br from-indigo-50 to-slate-900/5 rounded-2xl p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-28 h-28 p-3 bg-white rounded-lg shadow flex items-center justify-center">
              <Logo size={56} />
            </div>
            <div>
              <div className="text-sm text-slate-500">Trusted by traders</div>
              <div className="text-2xl font-semibold">1000+ clients</div>
              <div className="mt-1 text-sm text-slate-500">Stocks • Crypto • Forex</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
