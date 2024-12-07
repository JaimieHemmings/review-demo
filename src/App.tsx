import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Bounded from "./components/Bounded"
import Heading from "./components/Heading"
import Header from "./components/Header"
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './components/pages/AboutPage'

import { FeedbackType } from './types/types'

function App() {

  const [feedback, setFeedBack] = useState<FeedbackType[]>(FeedbackData)

  const addFeedback = (newFeedback: FeedbackType) => {
    setFeedBack([...feedback, newFeedback])
  }

  const deleteFeedback = (id: number) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedBack(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <Router>
      <Header />
      <Bounded as="section">
        <Routes>
          <Route path="/" element={
            <>
            <Heading as="h2" size="lg">
              Feedback UI
            </Heading>
            <FeedbackForm handleAdd={addFeedback} />
            <FeedbackList feedback={ feedback } handleDelete={ deleteFeedback } />
            </>
          }>
          </Route>
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Bounded>
      <div className="fixed top-0 h-screen w-screen bg-[#6488EA] -z-[10]"></div>
    </Router>
  )
}

export default App