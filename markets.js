export default function Markets() {
  return (
    <div className="min-h-screen p-6">
      <main className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold">Live Markets & Advanced Charts</h2>
        <p className="mt-2 text-slate-600">Realtime market overviews and interactive charts are embedded below.</p>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="rounded-lg overflow-hidden border">
            <iframe title="TradingView Mini" src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_1&symbol=NASDAQ%3AAAPL&interval=1&hidesidetoolbar=1" style={{width: '100%', height: 360, border: 0}}></iframe>
          </div>
          <div className="rounded-lg overflow-hidden border">
            <iframe title="TradingView Advanced" src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_2&symbol=BITSTAMP:BTCUSD&interval=D" style={{width: '100%', height: 360, border: 0}}></iframe>
          </div>
        </div>
      </main>
    </div>
  )
}
