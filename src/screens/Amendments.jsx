import { useNavigate } from 'react-router-dom'

export default function Amendments() {
  const navigate = useNavigate()

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
        <h1 className="text-base font-semibold text-white">State amendments</h1>
      </div>

      <div className="px-4 flex flex-col gap-4">

        {/* WB */}
        <div>
          <p className="text-sm font-semibold text-blue-400 mb-2">West Bengal</p>
          <div className="bg-[#161622] border border-white/10 rounded-2xl p-4 flex flex-col gap-2">
            <div className="flex justify-between"><span className="text-xs text-gray-400">No seatbelt</span><span className="text-xs text-white font-medium">₹1,000</span></div>
            <div className="flex justify-between"><span className="text-xs text-gray-400">Speeding 40km/h over</span><span className="text-xs text-white font-medium">₹2,000</span></div>
            <div className="flex justify-between"><span className="text-xs text-gray-400">No PUC certificate</span><span className="text-xs text-white font-medium">₹10,000</span></div>
            <div className="flex justify-between"><span className="text-xs text-gray-400">No helmet</span><span className="text-xs text-white font-medium">₹1,000</span></div>
          </div>
        </div>

        {/* MH */}
        <div>
          <p className="text-sm font-semibold text-orange-400 mb-2">Maharashtra</p>
          <div className="bg-[#161622] border border-white/10 rounded-2xl p-4 flex flex-col gap-2">
            <div className="flex justify-between"><span className="text-xs text-gray-400">No helmet</span><span className="text-xs text-white font-medium">₹1,500</span></div>
            <div className="flex justify-between"><span className="text-xs text-gray-400">Triple riding</span><span className="text-xs text-white font-medium">₹2,000</span></div>
            <div className="flex justify-between"><span className="text-xs text-gray-400">Wrong parking</span><span className="text-xs text-white font-medium">₹500</span></div>
            <div className="flex justify-between"><span className="text-xs text-gray-400">No insurance</span><span className="text-xs text-white font-medium">₹2,000</span></div>
          </div>
        </div>

        {/* DL */}
        <div>
          <p className="text-sm font-semibold text-green-400 mb-2">Delhi</p>
          <div className="bg-[#161622] border border-white/10 rounded-2xl p-4 flex flex-col gap-2">
            <div className="flex justify-between"><span className="text-xs text-gray-400">Red light jumping</span><span className="text-xs text-white font-medium">₹5,000</span></div>
            <div className="flex justify-between"><span className="text-xs text-gray-400">No driving licence</span><span className="text-xs text-white font-medium">₹5,000</span></div>
            <div className="flex justify-between"><span className="text-xs text-gray-400">Odd-even violation</span><span className="text-xs text-white font-medium">₹4,000</span></div>
            <div className="flex justify-between"><span className="text-xs text-gray-400">Using phone while driving</span><span className="text-xs text-white font-medium">₹5,000</span></div>
          </div>
        </div>

      </div>

      <div className="h-6" />

    </div>
  )
}