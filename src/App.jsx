
import './App.css'
import About from './components/About'
import Catalysts from './components/Catalysts'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Section from './components/Section'
import Section2 from './components/Section2'
import Section3 from './components/Section3'
// import Tracks from './components/Tracks'

function App() {

  return (
    <>
      <Header/>
      <Section/>
      <Section2/>
      <Section3/>
      <Catalysts/>
      {/* <Tracks/> */}
      <About/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
