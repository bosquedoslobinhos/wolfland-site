import { LangProvider } from './i18n'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WorldMap from './components/WorldMap'
import Characters from './components/Characters'
import Videos from './components/Videos'
import Social from './components/Social'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import MusicPlayer from './components/MusicPlayer'
import CookieBanner from './components/CookieBanner'

export default function App() {
  return (
    <LangProvider>
      <Navbar />
      <Hero />
      <About />
      <WorldMap />
      <Characters />
      <Videos />
      <Social />
      <Newsletter />
      <Footer />
      <MusicPlayer />
      <CookieBanner />
    </LangProvider>
  )
}
