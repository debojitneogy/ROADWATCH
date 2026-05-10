import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Settings() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [notifications, setNotifications] = useState(true)
  const [darkTheme, setDarkTheme] = useState(true)
  const [offlineCache, setOfflineCache] = useState(true)

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
        <h1 className="text-base font-semibold text-white">{t('settingsTitle')}</h1>
      </div>

      <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest px-4 mb-2">
        {t('preferences')}
      </p>

      <div className="px-4 flex flex-col gap-2">

        {/* Notifications */}
        <div className="bg-[#161622] border border-white/10 rounded-2xl px-4 py-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-white font-medium">{t('notifications')}</p>
            <p className="text-xs text-gray-500 mt-0.5">{t('notifSub')}</p>
          </div>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`w-11 h-6 rounded-full relative transition-colors ${notifications ? 'bg-blue-600' : 'bg-white/15'}`}
          >
            <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${notifications ? 'right-0.5' : 'left-0.5'}`} />
          </button>
        </div>

        {/* Default state */}
        <div className="bg-[#161622] border border-white/10 rounded-2xl px-4 py-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-white font-medium">{t('defaultState')}</p>
            <p className="text-xs text-gray-500 mt-0.5">West Bengal</p>
          </div>
          <span className="text-gray-500 text-lg">›</span>
        </div>

        {/* Dark theme */}
        <div className="bg-[#161622] border border-white/10 rounded-2xl px-4 py-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-white font-medium">{t('darkTheme')}</p>
            <p className="text-xs text-gray-500 mt-0.5">{t('darkSub')}</p>
          </div>
          <button
            onClick={() => setDarkTheme(!darkTheme)}
            className={`w-11 h-6 rounded-full relative transition-colors ${darkTheme ? 'bg-blue-600' : 'bg-white/15'}`}
          >
            <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${darkTheme ? 'right-0.5' : 'left-0.5'}`} />
          </button>
        </div>

        {/* Offline cache */}
        <div className="bg-[#161622] border border-white/10 rounded-2xl px-4 py-4 flex items-center justify-between">
          <div>
            <p className="text-sm text-white font-medium">{t('offlineCache')}</p>
            <p className="text-xs text-gray-500 mt-0.5">{t('offlineCacheSub')}</p>
          </div>
          <button
            onClick={() => setOfflineCache(!offlineCache)}
            className={`w-11 h-6 rounded-full relative transition-colors ${offlineCache ? 'bg-blue-600' : 'bg-white/15'}`}
          >
            <div className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all ${offlineCache ? 'right-0.5' : 'left-0.5'}`} />
          </button>
        </div>

      </div>

      <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest px-4 mt-4 mb-2">
        {t('about')}
      </p>

      <div className="px-4">
        <button
          onClick={() => navigate('/about')}
          className="w-full bg-[#161622] border border-white/10 rounded-2xl px-4 py-4 flex items-center justify-between hover:border-white/20 transition"
        >
          <div className="text-left">
            <p className="text-sm text-white font-medium">{t('about')}</p>
            <p className="text-xs text-gray-500 mt-0.5">{t('aboutSub')}</p>
          </div>
          <span className="text-gray-500 text-lg">›</span>
        </button>
      </div>

      <div className="h-6" />

    </div>
  )
}