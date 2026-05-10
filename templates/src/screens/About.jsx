import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function About() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div className="min-h-screen bg-[#0d0d14] flex flex-col">

      {/* Topbar */}
      <div className="flex items-center gap-3 px-4 pt-6 pb-3">
        <button
          onClick={() => navigate('/settings')}
          className="w-8 h-8 bg-[#161622] border border-white/10 rounded-full flex items-center justify-center text-white"
        >
          ‹
        </button>
        <h1 className="text-base font-semibold text-white">{t('aboutTitle')}</h1>
      </div>

      <div className="px-4 flex flex-col gap-4">

        {/* App info */}
        <div className="flex flex-col items-center py-6">
          <div className="w-16 h-16 bg-[#1e3a5f] rounded-2xl flex items-center justify-center text-3xl mb-3">
            🚦
          </div>
          <p className="text-white font-semibold text-base">{t('appName')}</p>
          <p className="text-gray-500 text-xs mt-1">Version 1.0.0</p>
        </div>

        {/* Disclaimer */}
        <div className="bg-[#161622] border border-white/10 rounded-2xl p-4">
          <p className="text-xs text-orange-400 font-semibold mb-2">{t('legalTitle')}</p>
          <p className="text-sm text-gray-300 leading-relaxed">{t('legalDesc')}</p>
        </div>

        {/* Data sources */}
        <div className="bg-[#161622] border border-white/10 rounded-2xl p-4">
          <p className="text-xs text-blue-400 font-semibold mb-2">{t('dataTitle')}</p>
          <div className="flex flex-col gap-2">
            {[
              'Motor Vehicles Act 1988',
              'MV Amendment Act 2019',
              'State transport dept. notifications',
              'Parivahan.gov.in',
            ].map((src, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                <p className="text-sm text-gray-300">{src}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="bg-[#161622] border border-white/10 rounded-2xl p-4">
          <p className="text-xs text-green-400 font-semibold mb-2">CONTACT</p>
          <p className="text-sm text-gray-300">support@chalan.app</p>
        </div>

      </div>

      <div className="h-6" />

    </div>
  )
}