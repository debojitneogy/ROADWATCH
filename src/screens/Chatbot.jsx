import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const autoReplies = {
  'helmet': 'Fine for no helmet (Section 129) is ₹1,000 for first offence in West Bengal. Repeat offence: ₹2,000 + possible DL suspension.',
  'pay': 'You can pay your challan online at parivahan.gov.in → Online Services → e-Challan.',
  'dispute': 'To dispute a challan: 1) Visit your local traffic court within 30 days. 2) Carry RC, DL and challan copy.',
  '185': 'Section 185 covers drunk driving. Fine: ₹10,000 for first offence + 6 months imprisonment.',
  'default': 'I can help you with traffic fines, MV Act sections, and challan disputes. Try the Challan Calculator for exact amounts.',
}

function getReply(msg) {
  const m = msg.toLowerCase()
  if (m.includes('helmet')) return autoReplies['helmet']
  if (m.includes('pay')) return autoReplies['pay']
  if (m.includes('dispute')) return autoReplies['dispute']
  if (m.includes('185')) return autoReplies['185']
  return autoReplies['default']
}

export default function Chatbot() {
  const navigate = useNavigate()
  const { t } = useTranslation()
  const [messages, setMessages] = useState([
    { from: 'bot', text: t('chatWelcome') }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  function sendMessage(text) {
    const msg = text || input.trim()
    if (!msg) return
    setInput('')
    setMessages(prev => [...prev, { from: 'user', text: msg }])
    setLoading(true)
    setTimeout(() => {
      setMessages(prev => [...prev, { from: 'bot', text: getReply(msg) }])
      setLoading(false)
    }, 800)
  }

  return (
    <div className="min-h-screen bg-[#0d0d14] flex flex-col">

      {/* Topbar */}
      <div className="flex items-center gap-3 px-4 pt-6 pb-3 border-b border-white/10">
        <button
          onClick={() => navigate('/home')}
          className="w-8 h-8 bg-[#161622] border border-white/10 rounded-full flex items-center justify-center text-white"
        >
          ‹
        </button>
        <h1 className="text-base font-semibold text-white flex-1">{t('chatTitle')}</h1>
        <span className="text-xs bg-[#0a2e1a] text-green-400 border border-green-500/20 px-2 py-1 rounded-full font-medium">
          ● Live
        </span>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-3">

        {/* Quick chips */}
        <div>
          <p className="text-xs text-gray-600 mb-2">Suggested</p>
          <div className="flex flex-wrap gap-2">
            {[
              'Fine for no helmet in WB?',
              'How to pay challan online?',
              'Can I dispute a challan?',
              'What is Section 185?',
            ].map(q => (
              <button
                key={q}
                onClick={() => sendMessage(q)}
                className="bg-[#161622] border border-white/10 rounded-full text-gray-400 text-xs px-3 py-2 hover:border-white/20 transition"
              >
                {q}
              </button>
            ))}
          </div>
        </div>

        {/* Messages */}
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`max-w-xs px-4 py-3 rounded-2xl text-sm leading-relaxed ${
              msg.from === 'user'
                ? 'bg-blue-600 text-white self-end rounded-br-sm ml-auto'
                : 'bg-[#161622] border border-white/10 text-gray-200 self-start rounded-bl-sm'
            }`}
          >
            {msg.text}
          </div>
        ))}

        {/* Typing dots */}
        {loading && (
          <div className="bg-[#161622] border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3 self-start">
            <div className="flex gap-1 items-center">
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay:'0ms'}}></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay:'150ms'}}></div>
              <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{animationDelay:'300ms'}}></div>
            </div>
          </div>
        )}

      </div>

      {/* Input */}
      <div className="border-t border-white/10 px-4 py-3 flex gap-3 items-center bg-[#0d0d14]">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && sendMessage()}
          placeholder={t('chatPlaceholder')}
          className="flex-1 bg-[#161622] border border-white/10 rounded-full text-white text-sm px-4 py-2.5 outline-none placeholder:text-gray-600"
        />
        <button
          onClick={() => sendMessage()}
          className="w-9 h-9 bg-blue-600 rounded-full flex items-center justify-center text-white text-lg hover:bg-blue-700 transition"
        >
          ›
        </button>
      </div>

    </div>
  )
}