import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const sections = [
  { num: 'Section 112', title: 'Limits of speed', desc: 'Fine: ₹400 (first) · ₹1,000 (repeat)' },
  { num: 'Section 119', title: 'Obeying traffic signals', desc: 'Fine: ₹500 · Includes red light jumping' },
  { num: 'Section 129', title: 'Wearing protective headgear', desc: 'Fine: ₹1,000 · DL suspension possible' },
  { num: 'Section 184', title: 'Dangerous driving', desc: 'Fine: ₹1,000–₹5,000 · Imprisonment' },
  { num: 'Section 185', title: 'Driving under influence', desc: 'Fine: ₹10,000 + 6 months imprisonment' },
  { num: 'Section 194B', title: 'Wearing seat belt', desc: 'Fine: ₹1,000 · Mandatory for all' },
  { num: 'Section 196', title: 'Driving without insurance', desc: 'Fine: ₹2,000 + imprisonment up to 3 months' },
  { num: 'Section 199', title: 'Offences by juveniles', desc: 'Guardian liable · ₹25,000 + 3 years jail' },
]

export default function Laws() {
  const navigate = useNavigate()
  const { t } = useTranslation()

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
        <h1 className="text-base font-semibold text-white">{t('lawTitle')}</h1>
      </div>

      {/* Search */}
      <div className="px-4 mb-3">
        <div className="bg-[#161622] border border-white/10 rounded-xl px-3 py-2.5 flex items-center gap-2">
          <span className="text-gray-500 text-sm">🔍</span>
          <span className="text-gray-500 text-sm">{t('filterSections')}</span>
        </div>
      </div>

      {/* Label */}
      <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest px-4 mb-2">
        {t('mvAct')}
      </p>

      {/* List */}
      <div className="px-4 flex flex-col gap-2 flex-1">
        {sections.map((s) => (
          <button
            key={s.num}
            onClick={() => navigate('/sectiondetail', { state: s })}
            className="bg-[#161622] border border-white/10 rounded-xl px-4 py-3 text-left hover:border-blue-500/30 transition"
          >
            <p className="text-xs text-blue-400 font-semibold mb-1">{s.num}</p>
            <p className="text-sm text-white font-medium">{s.title}</p>
            <p className="text-xs text-gray-500 mt-1">{s.desc}</p>
          </button>
        ))}

        {/* State amendments */}
        <button
          onClick={() => navigate('/amendments')}
          className="bg-[#161622] border border-white/10 rounded-xl px-4 py-3 text-left hover:border-orange-500/30 transition"
        >
          <p className="text-xs text-orange-400 font-semibold mb-1">{t('stateAmend')}</p>
          <p className="text-sm text-white font-medium">{t('stateAmendSub')}</p>
          <p className="text-xs text-gray-500 mt-1">{t('stateAmendDesc')}</p>
        </button>

      </div>

      <div className="h-6" />

    </div>
  )
}