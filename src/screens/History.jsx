import { useNavigate } from 'react-router-dom'

const history = [
  { query: 'Fine for no helmet in WB', time: '2 hours ago', result: '₹1,000' },
  { query: 'Section 185 — drunk driving', time: 'Yesterday', result: '₹10,000' },
  { query: 'Signal jumping Delhi fine', time: '3 days ago', result: '₹5,000' },
  { query: 'No seatbelt Maharashtra', time: '1 week ago', result: '₹1,000' },
  { query: 'Speeding fine Karnataka', time: '2 weeks ago', result: '₹400' },
]

export default function History() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-[#0d0d14] flex flex-col">

      {/* Topbar */}
      <div className="flex items-center gap-3 px-4 pt-6 pb-3">
        <button
          onClick={() => navigate('/profile')}
          className="w-8 h-8 bg-[#161622] border border-white/10 rounded-full flex items-center justify-center text-white"
        >
          ‹
        </button>
        <h1 className="text-base font-semibold text-white">Query history</h1>
      </div>

      <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest px-4 mb-2">
        Recent searches
      </p>

      <div className="px-4 flex flex-col gap-2">
        {history.map((item, i) => (
          <div
            key={i}
            className="bg-[#161622] border border-white/10 rounded-2xl px-4 py-4 flex items-center justify-between"
          >
            <div>
              <p className="text-sm text-white font-medium">{item.query}</p>
              <p className="text-xs text-gray-500 mt-1">{item.time}</p>
            </div>
            <span className="text-sm text-blue-400 font-semibold">{item.result}</span>
          </div>
        ))}
      </div>

      <div className="h-6" />

    </div>
  )
}