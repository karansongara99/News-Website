import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import { ROUTES } from './constants/constant'
import Business from '../src/pages/Category/Business'
import Health from '../src/pages/Category/Health'
import Education from '../src/pages/Category/Education'
import Travel from '../src/pages/Category/Travel'
import Sports from '../src/pages/Category/Sports'
import Politics from '../src/pages/Category/Politican'
import Lifestyle from '../src/pages/Category/Lifestyle'
import Header from './components/Header'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import About from './pages/About'
import LiveNews from './pages/LiveNews'
import Wishlist from './components/Whislist'
function App() {

  return (
    <>      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path={ROUTES.Home} element={<Home />} />
          <Route path={ROUTES.Business} element={<Business />} />
          <Route path={ROUTES.Health} element={<Health />} />
          <Route path={ROUTES.Education} element={<Education />} />
          <Route path={ROUTES.Sports} element={<Sports />} />
          <Route path={ROUTES.Politics} element={<Politics />} />
          <Route path={ROUTES.Lifestyle} element={<Lifestyle />} />
          <Route path={ROUTES.Travel} element={<Travel />} />
          <Route path={ROUTES.Contact} element={<Contact />} />
          <Route path={ROUTES.About} element={<About />} />
          <Route path={ROUTES.LiveNews} element={<LiveNews />} />
          <Route path={ROUTES.Wishlist} element={<Wishlist />} />
        </Routes>
        <Footer />
      </BrowserRouter> 
    </>
  )
}

export default App
