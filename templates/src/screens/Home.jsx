import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

export default function Home() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  const cards = [
    { icon:'🧮', label:t('calculator'), sub:t('calculatorSub'), path:'/calc', bg:'#1a1200' },
    { icon:'💬', label:t('chatbot'), sub:t('chatbotSub'), path:'/chatbot', bg:'#0a1a0a' },
    { icon:'📖', label:t('lawBrowser'), sub:t('lawBrowserSub'), path:'/laws', bg:'#0f0f1a' },
  ]

  return (
    <div className="min-h-screen flex flex-col" style={{background:'#0a0a0f'}}>

      {/* Topbar */}
      <div className="flex justify-between items-center px-4 pt-8 pb-3">
        <div>
          <p className="text-xs" style={{color:'rgba(255,255,255,0.3)'}}>{t('location')}</p>
          <p className="text-sm text-white font-semibold">West Bengal ▾</p>
        </div>
        <button
          onClick={() => navigate('/profile')}
          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm"
          style={{background:'linear-gradient(135deg,#f59e0b,#d97706)',color:'#000'}}
        >
          RS
        </button>
      </div>

      {/* Hero */}
      <div className="mx-4 mb-4 p-4 rounded-2xl" style={{background:'linear-gradient(135deg,#1a1200,#2d1f00)',border:'1px solid rgba(245,158,11,0.2)'}}>
        <p className="text-xs mb-1" style={{color:'rgba(245,158,11,0.6)',letterSpacing:'.05em'}}>CHALLAN CHECK</p>
        <p className="text-lg font-bold text-white mb-1">Check your fine</p>
        <p className="text-xs mb-3" style={{color:'rgba(255,255,255,0.4)'}}>MV Act 1988 · All states covered</p>
        <button
          onClick={() => navigate('/calc')}
          className="px-4 py-2 rounded-full text-xs font-bold"
          style={{background:'linear-gradient(135deg,#f59e0b,#d97706)',color:'#000'}}
        >
          Calculate now →
        </button>
      </div>

      {/* Search */}
      <div className="px-4 mb-4">
        <div className="flex items-center gap-2 px-4 py-3 rounded-2xl" style={{background:'#111118',border:'1px solid rgba(245,158,11,0.1)'}}>
          <span style={{color:'rgba(245,158,11,0.4)'}}>🔍</span>
          <span className="text-sm" style={{color:'rgba(255,255,255,0.25)'}}>{t('searchPlaceholder')}</span>
        </div>
      </div>

      {/* Section label */}
      <p className="text-xs font-semibold uppercase tracking-widest px-4 mb-3" style={{color:'rgba(255,255,255,0.25)'}}>
        {t('quickAccess')}
      </p>

      {/* Cards */}
      <div className="px-4 flex flex-col gap-3">
        {cards.map(card => (
          <button
            key={card.path}
            onClick={() => navigate(card.path)}
            className="flex items-center gap-4 p-4 rounded-2xl text-left"
            style={{background:'#111118',border:'1px solid rgba(255,255,255,0.05)'}}
          >
            <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style={{background:card.bg}}>
              {card.icon}
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">{card.label}</p>
              <p className="text-xs mt-0.5" style={{color:'rgba(255,255,255,0.35)'}}>{card.sub}</p>
            </div>
            <span style={{color:'#f59e0b',fontSize:'18px'}}>›</span>
          </button>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="mt-auto px-4 pb-6 pt-3">
        <div className="flex items-center justify-around p-2 rounded-2xl" style={{background:'#111118',border:'1px solid rgba(255,255,255,0.05)'}}>
          <button className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl" style={{background:'linear-gradient(135deg,#f59e0b,#d97706)'}}>
            <span className="text-lg">🏠</span>
            <span className="text-xs font-bold" style={{color:'#000'}}>{t('home')}</span>
          </button>
          <button onClick={() => navigate('/chatbot')} className="flex flex-col items-center gap-1 px-4 py-2">
            <span className="text-lg">💬</span>
            <span className="text-xs" style={{color:'rgba(255,255,255,0.3)'}}>{t('chat')}</span>
          </button>
          <button onClick={() => navigate('/calc')} className="flex flex-col items-center gap-1 px-4 py-2">
            <span className="text-lg">🧮</span>
            <span className="text-xs" style={{color:'rgba(255,255,255,0.3)'}}>{t('calc')}</span>
          </button>
          <button onClick={() => navigate('/profile')} className="flex flex-col items-center gap-1 px-4 py-2">
            <span className="text-lg">👤</span>
            <span className="text-xs" style={{color:'rgba(255,255,255,0.3)'}}>{t('profile')}</span>
          </button>
        </div>
      </div>

    </div>
  )
}