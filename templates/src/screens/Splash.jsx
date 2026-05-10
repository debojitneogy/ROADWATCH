import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Splash() {
  const navigate = useNavigate()
  const { t, i18n } = useTranslation()
  const [lang, setLang] = useState('en')

  function changeLanguage(l) {
    i18n.changeLanguage(l)
    setLang(l)
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6" style={{background:'#0a0a0f'}}>

      <div className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6" style={{background:'linear-gradient(135deg,#f59e0b,#d97706)'}}>
        <span className="text-4xl">🚦</span>
      </div>

      <h1 className="text-3xl font-bold text-white mb-2">{t('appName')}</h1>
      <p className="text-sm text-center mb-10" style={{color:'rgba(255,255,255,0.4)'}}>{t('appSub')}</p>

      <div className="w-full max-w-sm">
        <p className="text-xs mb-3" style={{color:'rgba(255,255,255,0.35)'}}>{t('chooseLanguage')}</p>
        <div className="flex gap-3 mb-8">
          {[['en','English'],['hi','हिन्दी'],['bn','বাংলা']].map(([code,label]) => (
            <button
              key={code}
              onClick={() => changeLanguage(code)}
              className="flex-1 py-2 rounded-xl text-sm font-semibold transition"
              style={{
                background: lang===code ? 'linear-gradient(135deg,#f59e0b,#d97706)' : '#111118',
                color: lang===code ? '#000' : 'rgba(255,255,255,0.4)',
                border: lang===code ? 'none' : '1px solid rgba(255,255,255,0.06)'
              }}
            >
              {label}
            </button>
          ))}
        </div>

        <button
          onClick={() => navigate('/login')}
          className="w-full py-4 font-bold text-base mb-3 rounded-2xl"
          style={{background:'linear-gradient(135deg,#f59e0b,#d97706)',color:'#000'}}
        >
          {t('getStarted')}
        </button>

        <button
          onClick={() => navigate('/home')}
          className="w-full py-3 text-sm"
          style={{color:'rgba(255,255,255,0.3)'}}
        >
          {t('continueGuest')}
        </button>
      </div>

    </div>
  )
}