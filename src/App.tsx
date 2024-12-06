import Bounded from "./components/Bounded"
import Heading from "./components/Heading"
import Header from "./components/Header"

function App() {

  return (
    <>
    <Header />
    <Bounded as="section">
      <Heading as="h1" size="lg">
        Reviews
      </Heading>
    </Bounded>
    <div className="fixed top-0 h-screen w-screen bg-[#6488EA] -z-[10]"></div>
    </>
  )
}

export default App
