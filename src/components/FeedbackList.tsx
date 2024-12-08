import { motion, AnimatePresence } from 'framer-motion'
import { useContext } from 'react'
import FeedbackItem from "./FeedbackItem"
import FeedbackStats from "./FeedbackStats"
import FeedbackContext from '../context/FeedbackContext'
import { FeedbackType } from '../types/types'

const FeedbackList: React.FC = () => {
  const feedbackContext = useContext(FeedbackContext)

  if (!feedbackContext) {
    return <p className="text-white text-xl font-bold">No feedback context available</p>
  }

  const { feedback } = feedbackContext

  if (!feedback || feedback.length === 0) {
    return <p className="text-white text-xl font-bold">No feedback yet</p>
  }

  return (
    <div className="feedback-list my-6 bg-[#4169e1] p-5 rounded-lg">
      <FeedbackStats />
      <AnimatePresence initial={false} mode="popLayout">
        {feedback.map((item: FeedbackType) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <FeedbackItem item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

export default FeedbackList