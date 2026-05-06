import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const fines = {
  'Drunk driving (Section 185)': { first: 10000, repeat: 15000, section: 'Sec 185' },
  'Signal jumping (Section 119)': { first: 500, repeat: 1500, section: 'Sec 119' },
  'Speeding (Section 112)': { first: 400, repeat: 1000, section: 'Sec 112' },
  'No helmet (Section 129)': { first: 1000, repeat: 2000, section: 'Sec 129' },
  'No seatbelt (Section 194B)': { first: 1000, repeat: 1000, section: 'Sec 194B' },
  'Wrong side driving': { first: 500, repeat: 1000, section: 'Sec 184' },
  'Using phone while driving': { first: 5000, repeat: 10000, section: 'Sec 184' },
  'No PUC certificate': { first: 10000, repeat: 10000, section: 'Sec 190' },
}

export default function Calc() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [state, setState] = useState('West Bengal')
  const [vehicle, setVehicle] = useState('Two-wheeler')
  const [violation, setViolation] = useState('Drunk driving (Section 185)')
  const [offence, setOffence] = useState('first')

  const fine = fines[violation]
  const amount = offence === 'first' ? fine.first : fine.repeat

  return (
    <div className="min-h-screen bg-[#0d0d14] flex flex-col">

      {/* Topbar */}
      <div className="flex items-center gap-3 px-4 pt-6 pb-3">
        <button
          onClick={() => navigate('/home')}
          className="w-8 h-8 bg-[#161622] border border-white/10 rounded-full flex items-center justify-center text-white"
        >
          ‹
        </button>
        <h1 className="text-base font-semibold text-white">{t('calcTitle')}</h1>
      </div>

      <div className="px-4 flex flex-col gap-3 flex-1">

        {/* State */}
        <div>
          <p className="text-xs text-gray-500 mb-1">{t('state')}</p>
          <select
            value={state}
            onChange={e => setState(e.target.value)}
            className="w-full bg-[#161622] border border-white/10 rounded-xl text-white px-3 py-3 text-sm outline-none"
          >
            <option>West Bengal</option>
            <option>Maharashtra</option>
            <option>Delhi</option>
            <option>Karnataka</option>
            <option>Tamil Nadu</option>
          </select>
        </div>

        {/* Vehicle */}
        <div>
          <p className="text-xs text-gray-500 mb-1">{t('vehicleType')}</p>
          <select
            value={vehicle}
            onChange={e => setVehicle(e.target.value)}
            className="w-full bg-[#161622] border border-white/10 rounded-xl text-white px-3 py-3 text-sm outline-none"
          >
            <option>Two-wheeler</option>
            <option>Car / Jeep</option>
            <option>Auto-rickshaw</option>
            <option>Bus / Truck</option>
          </select>
        </div>

        {/* Violation */}
        <div>
          <p className="text-xs text-gray-500 mb-1">{t('violation')}</p>
          <select
            value={violation}
            onChange={e => setViolation(e.target.value)}
            className="w-full bg-[#161622] border border-white/10 rounded-xl text-white px-3 py-3 text-sm outline-none"
          >
            {Object.keys(fines).map(f => (
              <option key={f}>{f}</option>
            ))}
          </select>
        </div>

        {/* Offence type */}
        <div>
          <p className="text-xs text-gray-500 mb-2">{t('offenceType')}</p>
          <div className="flex gap-3">
            <button
              onClick={() => setOffence('first')}
              className={`flex-1 py-3 rounded-xl text-sm font-semibold border transition ${
                offence === 'first'
                  ? 'bg-blue-600 border-blue-600 text-white'
                  : 'bg-[#161622] border-white/10 text-gray-400'
              }`}
            >
              {t('firstOffence')}
            </button>
            <button
              onClick={() => setOffence('repeat')}
              className={`flex-1 py-3 rounded-xl text-sm font-semibold border transition ${
                offence === 'repeat'
                  ? 'bg-orange-600 border-orange-600 text-white'
                  : 'bg-[#161622] border-white/10 text-gray-400'
              }`}
            >
              {t('repeatOffence')}
            </button>
          </div>
        </div>

        {/* Result card */}
        <div className="bg-[#0f1a35] border border-blue-500/20 rounded-2xl p-5 mt-1">
          <p className="text-xs text-gray-500 mb-1">{t('fineAmount')}</p>
          <p className="text-4xl font-bold text-blue-400 mb-1">
            ₹{amount.toLocaleString('en-IN')}
          </p>
          <p className="text-xs text-gray-500">{fine.section} · Motor Vehicles Act 1988</p>
          <p className="text-xs text-gray-500 mt-2">
            {t('repeatOffence')}: ₹{fine.repeat.toLocaleString('en-IN')} + possible imprisonment
          </p>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          <button
            onClick={() => navigate('/payinfo')}
            className="flex-1 py-3 bg-[#161622] border border-white/10 rounded-xl text-white text-sm hover:border-white/20 transition"
          >
            {t('payDispute')}
          </button>
          <button
            onClick={() => navigate('/share')}
            className="flex-1 py-3 bg-[#161622] border border-white/10 rounded-xl text-white text-sm hover:border-white/20 transition"
          >
            {t('shareResult')}
          </button>
        </div>

      </div>
      <div className="h-6" />
    </div>
  )
}