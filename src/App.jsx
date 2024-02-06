import { BrowserRouter } from "react-router-dom"
import { About, Contact, Experience, Feedbacks, 
  Hero, Navbar, Tech, Works, StarsCanvas } from './components'
import Projects from "./components/Projects"
import Videos from "./components/Videos"

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-cold-gray">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <Experience />
        <Tech />
        <Videos />
        {/* <Feedbacks /> */}
        {/* <Projects path="/projects"/> */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
