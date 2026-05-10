import { useNavigate, useLocation } from 'react-router-dom'

export default function SectionDetail() {
  const navigate = useNavigate()
  const { state } = useLocation()

  const section = state || {
    num: 'Section 129',
    title: 'Wearing protective headgear',
    desc: 'Fine: ₹1,000 · DL suspension possible',
  }

  return (
    <div className="min-h-screen bg-[#0d0d14] flex flex-col">

      {/* Topbar */}
      <div className="flex items-center gap-3 px-4 pt-6 pb-3">
        <button
          onClick={() => navigate('/laws')}
          className="w-8 h-8 bg-[#161622] border border-white/10 rounded-full flex items-center justify-center text-white"
        >
          ‹
        </button>
        <h1 className="text-base font-semibold text-white">{section.num}</h1>
      </div>

      <div className="px-4 flex flex-col gap-3">

        {/* Title card */}
        <div className="bg-[#161622] border border-white/10 rounded-2xl p-4">
          <p className="text-xs text-blue-400 font-semibold mb-2">TITLE</p>
          <p className="text-white text-base font-semibold">{section.title}</p>
        </div>

        {/* Fine details */}
        <div className="bg-[#161622] border border-white/10 rounded-2xl p-4">
          <p className="text-xs text-orange-400 font-semibold mb-3">FINE DETAILS</p>
          <div className="flex justify-between py-2 border-b border-white/5">
            <span className="text-sm text-gray-400">First offence</span>
            <span className="text-sm text-white font-medium">{section.desc.split('·')[0]}</span>
          </div>
          <div className="flex justify-between py-2">
            <span className="text-sm text-gray-400">Repeat offence</span>
            <span className="text-sm text-orange-400 font-medium">2x fine + DL suspension</span>
          </div>
        </div>

        {/* State override */}
        <div className="bg-[#2d1f00] border border-orange-500/30 rounded-2xl p-4 flex gap-3">
          <span className="text-lg">🗺️</span>
          <div>
            <p className="text-xs text-orange-400 font-semibold mb-1">STATE OVERRIDE</p>
            <p className="text-xs text-gray-300 leading-relaxed">
              WB: Same as central. MH: Additional ₹500. DL: Mandatory sticker required.
            </p>
          </div>
        </div>

        <button
          onClick={() => navigate('/amendments')}
          className="w-full py-4 bg-blue-600 text-white rounded-2xl font-semibold text-sm hover:bg-blue-700 transition"
        >
          View all state overrides
        </button>

      </div>

    </div>
  )
}