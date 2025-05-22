import About from "./components/About"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects"

const App = () => {
  return (
    <>
      <Header />
      <div className="mx-8 md:mx-10 lg:mx-20 px-8 md:px-8 lg:px-16 border-[1.5px] max-w-7xl border-r-black/35 border-l-black/35 border-t-0 border-b-0 border-dashed">
        <Hero />
        <About />
        <Projects />
      </div>
      <Footer />
    </>
  )
}

export default App
