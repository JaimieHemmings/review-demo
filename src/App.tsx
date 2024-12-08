import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Bounded from "./components/Bounded"
import Heading from "./components/Heading"
import Header from "./components/Header"
import FeedbackList from './components/FeedbackList'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './components/pages/AboutPage'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <Bounded as="section">
          <Routes>
            <Route path="/" element={
              <>
              <Heading as="h2" size="lg">
                Feedback UI
              </Heading>
              <FeedbackForm />
              <FeedbackList />
              </>
            }>
            </Route>
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Bounded>
        <div className="fixed top-0 h-screen w-screen bg-[#6488EA] -z-[10]"></div>
      </Router>
    </FeedbackProvider>
  )
}

export default App