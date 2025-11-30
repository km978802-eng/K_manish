export default function Services() {
  return (
    <div className="min-h-screen p-6">
      <main className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-5 shadow">
          <h3 className="font-semibold text-lg">Stock Market Trading</h3>
          <p className="mt-2 text-slate-600">Intraday and positional strategies, research-backed calls, and portfolio guidance.</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow">
          <h3 className="font-semibold text-lg">Crypto Trading</h3>
          <p className="mt-2 text-slate-600">Spot, futures, and strategy planning with risk controls and wallet guidance.</p>
        </div>
        <div className="bg-white rounded-2xl p-5 shadow">
          <h3 className="font-semibold text-lg">Forex Trading</h3>
          <p className="mt-2 text-slate-600">Major/minor pairs trading, scalable position sizing and strategy execution.</p>
        </div>
      </main>
    </div>
  )
}
