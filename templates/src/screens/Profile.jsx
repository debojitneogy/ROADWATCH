import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Profile() {
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
        <h1 className="text-base font-semibold text-white">{t('profileTitle')}</h1>
      </div>

      {/* Avatar */}
      <div className="flex flex-col items-center py-6">
        <div className="w-16 h-16 bg-[#1e3a5f] rounded-full flex items-center justify-center text-2xl font-bold text-blue-400 mb-3">
          RS
        </div>
        <p className="text-white font-semibold text-base">Rahul Sharma</p>
        <p className="text-gray-500 text-sm">rahul@gmail.com</p>
        <span className="mt-2 text-xs bg-[#0a2e1a] text-green-400 border border-green-500/20 px-3 py-1 rounded-full">
          ● Verified driver
        </span>
      </div>

      {/* Vehicle */}
      <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest px-4 mb-2">
        {t('vehicle')}
      </p>
      <div className="mx-4 bg-[#161622] border border-white/10 rounded-2xl p-4 flex items-center gap-3 mb-4">
        <span className="text-2xl">🏍️</span>
        <div>
          <p className="text-sm text-white font-semibold">Honda Activa · WB-02-AB-1234</p>
          <p className="text-xs text-gray-500 mt-0.5">Two-wheeler · Home state: WB</p>
        </div>
      </div>

      {/* Menu */}
      <p className="text-xs text-gray-500 font-semibold uppercase tracking-widest px-4 mb-2">
        {t('account')}
      </p>
      <div className="px-4 flex flex-col gap-2">
        {[
          { label: t('queryHistory'), sub: t('querySub'), path: '/history' },
          { label: t('savedResults'), sub: t('savedSub'), path: '/saved' },
          { label: t('settings'), sub: t('settingsSub'), path: '/settings' },
          { label: t('about'), sub: t('aboutSub'), path: '/about' },
        ].map(item => (
          <button
            key={item.label}
            onClick={() => navigate(item.path)}
            className="bg-[#161622] border border-white/10 rounded-2xl p-4 flex items-center justify-between hover:border-white/20 transition"
          >
            <div className="text-left">
              <p className="text-sm text-white font-medium">{item.label}</p>
              <p className="text-xs text-gray-500 mt-0.5">{item.sub}</p>
            </div>
            <span className="text-gray-600 text-lg">›</span>
          </button>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="mt-auto border-t border-white/10 flex">
        <button onClick={() => navigate('/home')} className="flex-1 py-3 flex flex-col items-center gap-1">
          <span className="text-lg">🏠</span>
          <span className="text-xs text-gray-500">{t('home')}</span>
        </button>
        <button onClick={() => navigate('/chatbot')} className="flex-1 py-3 flex flex-col items-center gap-1">
          <span className="text-lg">💬</span>
          <span className="text-xs text-gray-500">{t('chat')}</span>
        </button>
        <button onClick={() => navigate('/calc')} className="flex-1 py-3 flex flex-col items-center gap-1">
          <span className="text-lg">🧮</span>
          <span className="text-xs text-gray-500">{t('calc')}</span>
        </button>
        <button className="flex-1 py-3 flex flex-col items-center gap-1">
          <span className="text-lg">👤</span>
          <span className="text-xs text-blue-400 font-medium">{t('profile')}</span>
        </button>
      </div>

    </div>
  )
}