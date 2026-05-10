import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Splash from './screens/Splash'
import Login from './screens/Login'
import Home from './screens/Home'
import Calc from './screens/Calc'
import Chatbot from './screens/Chatbot'
import Laws from './screens/Laws'
import SectionDetail from './screens/SectionDetail'
import Amendments from './screens/Amendments'
import PayInfo from './screens/PayInfo'
import Profile from './screens/Profile'
import Settings from './screens/Settings'
import History from './screens/History'
import About from './screens/About'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/calc" element={<Calc />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/laws" element={<Laws />} />
        <Route path="/sectiondetail" element={<SectionDetail />} />
        <Route path="/amendments" element={<Amendments />} />
        <Route path="/payinfo" element={<PayInfo />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/history" element={<History />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App