import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function PayInfo() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-[#0d0d14] flex flex-col">

      {/* Topbar */}
      <div className="flex items-center gap-3 px-4 pt-6 pb-3">
        <button
          onClick={() => navigate('/calc')}
          className="w-8 h-8 bg-[#161622] border border-white/10 rounded-full flex items-center justify-center text-white"
        >
          ‹
        </button>
        <h1 className="text-base font-semibold text-white">{t('payTitle')}</h1>
      </div>

      <div className="px-4 flex flex-col gap-4">

        {/* Pay online */}
        <div className="bg-[#161622] border border-white/10 rounded-2xl p-4">
          <p className="text-xs text-green-400 font-semibold mb-2">{t('payOnline')}</p>
          <p className="text-sm text-gray-300 leading-relaxed mb-4">{t('payDesc')}</p>
          <button
            onClick={() => window.open('https://echallan.parivahan.gov.in', '_blank')}
            className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold text-sm hover:bg-blue-700 transition"
          >
            {t('openParivahan')}
          </button>
        </div>

        {/* How to dispute */}
        <div className="bg-[#161622] border border-white/10 rounded-2xl p-4">
          <p className="text-xs text-orange-400 font-semibold mb-3">{t('howDispute')}</p>
          <div className="flex flex-col gap-3">
            {[
              'Receive challan notice via email or SMS',
              'Visit traffic court within 30 days',
              'Carry RC, DL and challan copy',
              'Present your case to the magistrate',
            ].map((step, i) => (
              <div key={i} className="flex gap-3 items-start">
                <div className="w-6 h-6 bg-[#0f1a35] border border-blue-500/30 rounded-full flex items-center justify-center text-xs text-blue-400 font-semibold flex-shrink-0">
                  {i + 1}
                </div>
                <p className="text-sm text-gray-300 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Deadline */}
        <div className="bg-[#161622] border border-white/10 rounded-2xl p-4">
          <p className="text-xs text-blue-400 font-semibold mb-2">{t('penaltyDeadline')}</p>
          <p className="text-sm text-gray-300 leading-relaxed">{t('penaltyDesc')}</p>
        </div>

      </div>

      <div className="h-6" />

    </div>
  )
}