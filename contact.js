import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  return (
    <div className="min-h-screen p-6">
      <main className="max-w-6xl mx-auto bg-white rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold">Contact Us</h2>
        {!sent ? (
          <form onSubmit={e => {
            e.preventDefault();
            // For demo: frontend-only alert. Backend endpoint in /backend available to receive real submissions.
            fetch('/api/contact', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                name: e.target.name.value,
                email: e.target.email.value,
                message: e.target.message.value
              })
            }).then(r => {
              setSent(true);
            }).catch(err => {
              alert('Error sending — see backend instructions in README.');
            })
          }} className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" required className="p-3 border rounded-md" placeholder="Name" />
            <input name="email" required type="email" className="p-3 border rounded-md" placeholder="Email" />
            <input name="phone" className="p-3 border rounded-md" placeholder="Phone (optional)" />
            <select name="interest" className="p-3 border rounded-md">
              <option>Interested in...</option>
              <option>Stocks</option>
              <option>Crypto</option>
              <option>Forex</option>
            </select>
            <textarea name="message" required className="p-3 border rounded-md md:col-span-2" placeholder="Message"></textarea>
            <div className="md:col-span-2 flex gap-3">
              <button type="submit" className="px-4 py-2 rounded-md bg-indigo-600 text-white">Send</button>
            </div>
          </form>
        ) : (
          <div className="p-6 bg-green-50 rounded">Thank you — we'll contact you soon.</div>
        )}
      </main>
    </div>
  )
}
