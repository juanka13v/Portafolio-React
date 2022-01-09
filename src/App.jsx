import './App.css'
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
      <Footer/>
    </div>
  )
}

export default App
