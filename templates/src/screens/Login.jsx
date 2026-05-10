import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Login() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <div className="min-h-screen flex flex-col justify-center px-6" style={{background:'#0a0a0f'}}>
      <div className="max-w-sm mx-auto w-full">

        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6" style={{background:'linear-gradient(135deg,#f59e0b,#d97706)'}}>
          <span className="text-2xl">🚦</span>
        </div>

        <h1 className="text-3xl font-bold text-white mb-2">{t('signIn')}</h1>
        <p className="text-sm mb-10" style={{color:'rgba(255,255,255,0.35)'}}>{t('signInSub')}</p>

        <button
          onClick={() => navigate('/home')}
          className="w-full py-4 font-bold text-base mb-4 rounded-2xl flex items-center justify-center gap-3"
          style={{background:'linear-gradient(135deg,#f59e0b,#d97706)',color:'#000'}}
        >
         <svg width="18" height="18" viewBox="0 0 18 18">
  <path fill="#4285F4" d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.565 2.684-3.874 2.684-6.615z"/>
  <path fill="#34A853" d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z"/>
  <path fill="#FBBC05" d="M3.964 10.707A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.039l3.007-2.332z"/>
  <path fill="#EA4335" d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.961L3.964 7.293C4.672 5.163 6.656 3.58 9 3.58z"/>
</svg>
{t('continueGoogle')}
        </button>

        <div className="text-center text-sm mb-4" style={{color:'rgba(255,255,255,0.2)'}}>or</div>

        <button
          onClick={() => navigate('/home')}
          className="w-full py-4 rounded-2xl font-semibold text-base mb-8"
          style={{background:'#111118',color:'rgba(255,255,255,0.4)',border:'1px solid rgba(255,255,255,0.06)'}}
        >
          {t('continueGuest')}
        </button>

        <p className="text-xs text-center leading-relaxed" style={{color:'rgba(255,255,255,0.2)'}}>
          By continuing you agree to our Terms of Service.
        </p>
      </div>
    </div>
  )
}