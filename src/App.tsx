import { useState } from 'react'
import Bounded from "./components/Bounded"
import Heading from "./components/Heading"
import Header from "./components/Header"
import FeedbackData from './data/FeedbackData'
import FeedbackList from './components/FeedbackList'
import FeedbackStats from './components/FeedbackStats'

import { FeedbackType } from './types/types'

function App() {

  const [feedback, setFeedBack] = useState<FeedbackType[]>(FeedbackData)

  const deleteFeedback = (id: number) => {
    if (window.confirm('Are you sure you want to delete this feedback?')) {
      setFeedBack(feedback.filter((item) => item.id !== id))
    }
  }

  return (
    <>
    <Header />
    <Bounded as="section">
      <Heading as="h2" size="lg">
        Feedback UI
      </Heading>

      <FeedbackStats feedback={ feedback } />
      <FeedbackList feedback={ feedback } handleDelete={ deleteFeedback } />

    </Bounded>
    <div className="fixed top-0 h-screen w-screen bg-[#6488EA] -z-[10]"></div>
    </>
  )
}

export default App
