import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'

import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Skills/>
      <Contact />
      <Footer/>
    </div>
  )
}

export default App
